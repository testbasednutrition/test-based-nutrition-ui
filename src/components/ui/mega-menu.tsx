import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
    id: number;
    label: string;
    subMenus?: {
        title: string;
        items: {
            label: string;
            description: string;
            icon: React.ElementType;
            link?: string;
        }[];
    }[];
    link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    items: MegaMenuItem[];
    className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
    ({ items, className, ...props }, ref) => {
        const [openMenu, setOpenMenu] = React.useState<string | null>(null);
        const [isHover, setIsHover] = React.useState<number | null>(null);
        const [activeSubMenu, setActiveSubMenu] = React.useState<string | null>(null);

        const handleHover = (menuLabel: string | null) => {
            setOpenMenu(menuLabel);
            if (menuLabel) {
                const menu = items.find((m) => m.label === menuLabel);
                if (menu?.subMenus && menu.subMenus.length > 0) {
                    setActiveSubMenu(menu.subMenus[0].title);
                }
            } else {
                setActiveSubMenu(null);
            }
        };

        return (
            <ul
                ref={ref}
                className={`relative flex items-center space-x-0 ${className || ""}`}
                {...props}
            >
                {items.map((navItem) => (
                    <li
                        key={navItem.label}
                        className="static"
                        onMouseEnter={() => handleHover(navItem.label)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        <button
                            className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/50 transition-colors duration-300 hover:text-white group"
                            onMouseEnter={() => setIsHover(navItem.id)}
                            onMouseLeave={() => setIsHover(null)}
                        >
                            <span>{navItem.label}</span>
                            {navItem.subMenus && (
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${openMenu === navItem.label ? "rotate-180" : ""
                                        }`}
                                />
                            )}
                            {(isHover === navItem.id || openMenu === navItem.label) && (
                                <motion.div
                                    layoutId="hover-bg"
                                    className="absolute inset-0 size-full bg-white/10"
                                    style={{
                                        borderRadius: 99,
                                    }}
                                />
                            )}
                        </button>

                        <AnimatePresence>
                            {openMenu === navItem.label && navItem.subMenus && (
                                <div className="fixed left-0 top-[60px] md:top-[80px] w-full pt-2 z-50 px-4 md:px-8 flex justify-start">
                                    <motion.div
                                        className="w-full max-w-[1000px] border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl overflow-hidden"
                                        style={{
                                            borderRadius: 16,
                                        }}
                                        layoutId="menu"
                                    >
                                        <div className="flex min-h-[400px]">
                                            {/* Left Sidebar Main Headings */}
                                            <div className="w-1/3 bg-white/5 p-6 border-r border-white/10 flex flex-col gap-2">
                                                {navItem.subMenus.map((sub) => (
                                                    <button
                                                        key={sub.title}
                                                        onMouseEnter={() => setActiveSubMenu(sub.title)}
                                                        className={`text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${activeSubMenu === sub.title
                                                                ? "bg-white/10 text-white translate-x-1"
                                                                : "text-white/50 hover:text-white hover:bg-white/5"
                                                            }`}
                                                    >
                                                        {sub.title}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Right Content Sub Pages */}
                                            <div className="w-2/3 p-8 bg-[#0A0A0A]/50 relative">
                                                {navItem.subMenus.map((sub) => (
                                                    activeSubMenu === sub.title && (
                                                        <motion.div
                                                            key={sub.title}
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute inset-0 p-8"
                                                        >
                                                            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/40 border-b border-white/10 pb-3">
                                                                {sub.title}
                                                            </h3>
                                                            <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
                                                                {sub.items.map((item) => {
                                                                    const Icon = item.icon;
                                                                    return (
                                                                        <li key={item.label}>
                                                                            <a
                                                                                href={item.link || "#"}
                                                                                className="flex items-start space-x-3 group"
                                                                            >
                                                                                <div className="flex size-9 shrink-0 items-center justify-center rounded border border-white/20 text-white/70 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0A0A0A]">
                                                                                    <Icon className="h-4 w-4 flex-none" />
                                                                                </div>
                                                                                <div className="w-full leading-tight">
                                                                                    <p className="shrink-0 text-sm mt-1.5 font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                                                                                        {item.label}
                                                                                    </p>
                                                                                    {item.description && (
                                                                                        <p className="shrink-0 text-xs text-white/40 transition-colors duration-300 group-hover:text-white/70 mt-1">
                                                                                            {item.description}
                                                                                        </p>
                                                                                    )}
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </motion.div>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        );
    }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
