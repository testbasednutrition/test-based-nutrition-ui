import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Lock, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Toggle to false to temporarily disable the screenshot blank screen overlay (until going live)
const ENABLE_SCREENSHOT_BLANK = true;

export default function CopyProtection() {
  const [showWarning, setShowWarning] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const triggerWarning = useCallback(() => {
    setShowWarning(true);
    setWarningCount((prev) => prev + 1);
  }, []);

  // Dismiss warning
  const dismissWarning = useCallback(() => {
    setShowWarning(false);
  }, []);

  // Resolve admin status on mount and on auth changes
  useEffect(() => {
    const checkAdmin = async () => {
      // 1. Local session check (admin leads portal password login)
      if (sessionStorage.getItem("tbn_admin_auth") === "true") {
        setIsAdmin(true);
        return;
      }

      // 2. Supabase role check
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const user = session?.user;
        if (user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();
          setIsAdmin(profile?.role === "admin");
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        console.warn("[CopyProtection] Failed to fetch user role from Supabase:", err);
        setIsAdmin(false);
      }
    };

    checkAdmin();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAdmin();
    });

    // Poll sessionStorage for dynamic updates without reload
    const storageInterval = setInterval(() => {
      if (sessionStorage.getItem("tbn_admin_auth") === "true") {
        setIsAdmin(true);
      }
    }, 1000);

    return () => {
      subscription.unsubscribe();
      clearInterval(storageInterval);
    };
  }, []);

  const isUserAdmin = useCallback(() => {
    return isAdmin || sessionStorage.getItem("tbn_admin_auth") === "true";
  }, [isAdmin]);

  // Auto-dismiss after 4 seconds
  useEffect(() => {
    if (showWarning) {
      const timer = setTimeout(() => {
        setShowWarning(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showWarning, warningCount]);

  // Window blur and focus event listeners to prevent screenshots
  useEffect(() => {
    if (!ENABLE_SCREENSHOT_BLANK) return;
    const handleBlur = () => {
      if (isUserAdmin()) return;
      setIsBlurred(true);
    };
    const handleFocus = () => {
      setIsBlurred(false);
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, [isUserAdmin]);

  useEffect(() => {
    const isFormInputActive = () => {
      const activeEl = document.activeElement;
      if (!activeEl) return false;
      const tagName = activeEl.tagName.toUpperCase();
      return (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        activeEl.getAttribute("contenteditable") === "true"
      );
    };

    const handleContextMenu = (e: MouseEvent) => {
      if (isUserAdmin()) return;
      // Allow context menu in inputs (e.g. for spellcheck, copy-paste inside fields)
      if (isFormInputActive()) return;
      e.preventDefault();
      triggerWarning();
    };

    const handleCopy = (e: ClipboardEvent) => {
      if (isUserAdmin()) return;
      if (isFormInputActive()) return;
      e.preventDefault();
      triggerWarning();
    };

    const handleCut = (e: ClipboardEvent) => {
      if (isUserAdmin()) return;
      if (isFormInputActive()) return;
      e.preventDefault();
      triggerWarning();
    };

    const handleDragStart = (e: DragEvent) => {
      if (isUserAdmin()) return;
      const target = e.target as HTMLElement;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isUserAdmin()) return;
      const isMeta = e.ctrlKey || e.metaKey;
      
      // Proactive screenshot shortcut detection:
      // If the user holds Cmd+Shift (Mac) or Win+Shift (Win), turn the screen white immediately
      // before they can trigger the screenshot capture (e.g., Cmd+Shift+4)
      if (ENABLE_SCREENSHOT_BLANK && isMeta && e.shiftKey) {
        setIsBlurred(true);
      }

      if (e.key === "PrintScreen") {
        if (ENABLE_SCREENSHOT_BLANK) {
          setIsBlurred(true);
        }
        triggerWarning();
        e.preventDefault();
        return;
      }

      // F12 key
      if (e.key === "F12") {
        e.preventDefault();
        triggerWarning();
        return;
      }

      if (isMeta) {
        const key = e.key.toLowerCase();

        // Copy (c) / Cut (x) - Only block outside of inputs
        if ((key === "c" || key === "x") && !isFormInputActive()) {
          e.preventDefault();
          triggerWarning();
          return;
        }

        // View Source (u), Save (s), Print (p)
        if (key === "u" || key === "s" || key === "p") {
          e.preventDefault();
          triggerWarning();
          return;
        }

        // Shift key combinations (DevTools)
        // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
        if (e.shiftKey && (key === "i" || key === "j" || key === "c")) {
          e.preventDefault();
          triggerWarning();
          return;
        }
      }

      // macOS Inspect shortcuts: Cmd+Opt+I / Cmd+Opt+J / Cmd+Opt+C / Cmd+Opt+U
      if (isMeta && e.altKey) {
        const key = e.key.toLowerCase();
        if (key === "i" || key === "j" || key === "c" || key === "u") {
          e.preventDefault();
          triggerWarning();
          return;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!ENABLE_SCREENSHOT_BLANK) return;
      if (isUserAdmin()) {
        setIsBlurred(false);
        return;
      }
      // Remove white overlay when they release the shortcut modifier keys
      if (e.key === "Meta" || e.key === "Control" || e.key === "Shift") {
        setIsBlurred(false);
      }
    };

    // Attach event listeners
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("copy", handleCopy);
    window.addEventListener("cut", handleCut);
    window.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("copy", handleCopy);
      window.removeEventListener("cut", handleCut);
      window.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [triggerWarning, isUserAdmin]);

  return (
    <>
      {ENABLE_SCREENSHOT_BLANK && isBlurred && (
        <div className="fixed inset-0 z-[100000] bg-white dark:bg-zinc-950" />
      )}
      <AnimatePresence>
        {showWarning && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-auto">
            {/* Animated Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-transparent"
              onClick={dismissWarning}
            />

            {/* Premium Dialog Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/80 dark:bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl text-center text-zinc-950 dark:text-white"
            >
              {/* Ambient Background Glow */}
              <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />
              <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

              {/* Close Button */}
              <button
                onClick={dismissWarning}
                className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Warning Shield & Lock */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 relative">
                <ShieldAlert className="h-7 w-7 animate-pulse" />
                <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border border-white/20">
                  <Lock className="h-3 w-3" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 font-heading text-xl font-bold tracking-tight uppercase text-zinc-900 dark:text-white">
                Content Protection Active
              </h3>

              {/* Description */}
              <p className="mb-6 font-sans text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                This website's text, images, and practitioner profiles are copyright-protected. Copying content, dragging photos, printing, and inspecting source code have been disabled to safeguard our intellectual property.
              </p>

              {/* Action Button */}
              <button
                onClick={dismissWarning}
                className="w-full rounded-xl bg-gradient-to-r from-red-700 to-red-800 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-red-700/20 hover:from-red-600 hover:to-red-700 transition-all duration-200 cursor-pointer active:scale-95"
              >
                Acknowledge & Continue
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
