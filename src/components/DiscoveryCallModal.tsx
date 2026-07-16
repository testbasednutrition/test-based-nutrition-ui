import React, { useState } from "react";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface DiscoveryCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  parentLeadForm?: {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    partnershipType: string;
    message: string;
  };
}

const mapTypeToLabel = (type: string) => {
  const mapping: Record<string, string> = {
    clinic: "Clinic / Private Practice",
    pharmacy: "Pharmacy",
    healthClub: "Health Club / Gym",
    hub: "TBN Hub",
    academy: "Training Academy",
    retreat: "Retreat / Resort",
    expert: "Specialist / Consultant",
    ambassador: "TBN Brand Ambassador",
    other: "Other"
  };
  return mapping[type] || type;
};

const TIME_SLOTS = [
  "09:00 - 09:30",
  "10:00 - 10:30",
  "11:00 - 11:30",
  "12:00 - 12:30",
  "14:00 - 14:30",
  "15:00 - 15:30",
  "16:00 - 16:30"
];

export default function DiscoveryCallModal({ isOpen, onClose, parentLeadForm }: DiscoveryCallModalProps) {
  const [leadForm, setLeadForm] = useState({
    fullName: parentLeadForm?.fullName || "",
    companyName: parentLeadForm?.companyName || "",
    email: parentLeadForm?.email || "",
    phone: parentLeadForm?.phone || "",
    partnershipType: parentLeadForm?.partnershipType || "",
    message: parentLeadForm?.message || ""
  });

  React.useEffect(() => {
    if (isOpen && parentLeadForm) {
      setLeadForm({
        fullName: parentLeadForm.fullName || "",
        companyName: parentLeadForm.companyName || "",
        email: parentLeadForm.email || "",
        phone: parentLeadForm.phone || "",
        partnershipType: parentLeadForm.partnershipType || "",
        message: parentLeadForm.message || ""
      });
    }
  }, [isOpen, parentLeadForm]);
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getGoogleCalendarLink = () => {
    if (!selectedDate || !selectedTime) return "";
    
    try {
      // Parse time slot (e.g. "09:00 - 09:30")
      const [startPart, endPart] = selectedTime.split(" - ");
      const [startHour, startMin] = startPart.split(":").map(Number);
      const [endHour, endMin] = endPart.split(":").map(Number);
      
      const startDate = new Date(selectedDate);
      startDate.setHours(startHour, startMin, 0, 0);
      
      const endDate = new Date(selectedDate);
      endDate.setHours(endHour, endMin, 0, 0);
      
      const formatToUtcIso = (date: Date) => {
        return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      };
      
      const dateRange = `${formatToUtcIso(startDate)}/${formatToUtcIso(endDate)}`;
      
      const baseUrl = "https://calendar.google.com/calendar/render";
      const params = new URLSearchParams({
        action: "TEMPLATE",
        text: "TBN Discovery Call Booking",
        details: `Preventative health discovery call with Test-Based Nutrition (TBN).\n\nDetails:\n- Client: ${leadForm.fullName}\n- Clinic/Company: ${leadForm.companyName}\n- Contact Email: ${leadForm.email}\n- Phone: ${leadForm.phone || "Not specified"}\n\nWe will contact you shortly at your scheduled time.`,
        dates: dateRange,
        location: "Phone / Google Meet (details will be emailed)"
      });
      
      return `${baseUrl}?${params.toString()}`;
    } catch (err) {
      console.warn("Failed to generate Google Calendar link:", err);
      return "";
    }
  };

  if (!isOpen) return null;

  // Always give one day until next available booking
  const getTomorrow = () => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    t.setHours(0, 0, 0, 0);
    return t;
  };
  
  const tomorrow = getTomorrow();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setLeadForm(prev => ({ ...prev, [id]: value }));
  };

  const handleClose = () => {
    onClose();
    // Reset state after a short delay so the transition finishes nicely
    setTimeout(() => {
      setLeadForm({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        partnershipType: "",
        message: ""
      });
      setSelectedDate(undefined);
      setSelectedTime("");
      setIsSubmitted(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      toast.error("Please select a booking date from the calendar.");
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a booking time slot.");
      return;
    }

    setIsSubmitting(true);

    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    
    const referrerCode = localStorage.getItem("tbn_referrer_code");
    const chosenTypeLabel = mapTypeToLabel(leadForm.partnershipType);
    const bookingDetails = `Booking: ${formattedDate} at ${selectedTime}`;
    const combinedMessage = `Business: ${leadForm.companyName}. ${bookingDetails}. Message: ${leadForm.message}`;

    try {
      const { error } = await supabase.from("partner_leads").insert([
        {
          name: leadForm.fullName,
          email: leadForm.email,
          mobile: leadForm.phone || null,
          lead_type: `${chosenTypeLabel} (Call Scheduled: ${formattedDate} at ${selectedTime})`,
          source_page: "Partner Discovery Call Booking",
          referrer_code: referrerCode || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;
      toast.success("Discovery call requested successfully!");
    } catch (err: any) {
      console.warn("Database insert failed, saving to local storage fallback:", err.message);
      try {
        const local = JSON.parse(localStorage.getItem("partner_leads") || "[]");
        local.push({
          id: `local-${Date.now()}`,
          name: leadForm.fullName,
          email: leadForm.email,
          mobile: leadForm.phone,
          lead_type: `${chosenTypeLabel} (Call Scheduled: ${formattedDate} at ${selectedTime})`,
          source_page: "Partner Discovery Call Booking",
          created_at: new Date().toISOString(),
          notes: bookingDetails
        });
        localStorage.setItem("partner_leads", JSON.stringify(local));
        toast.success("Booking saved locally.");
      } catch (lsErr) {
        toast.error("Failed to submit form. Please check your connection.");
      }
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }

    // Trigger background email notification via Next.js partner-hub API
    try {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const baseUrl = isLocal ? "http://localhost:3000" : "https://partner-hub-jade.vercel.app";
      
      const apiRes = await fetch(`${baseUrl}/api/leads/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadForm.fullName,
          email: leadForm.email,
          mobile: leadForm.phone,
          company: leadForm.companyName,
          selection: chosenTypeLabel,
          bookingDate: formattedDate,
          bookingTime: selectedTime,
          message: leadForm.message,
          sourcePage: "Partner Discovery Call Booking"
        })
      });

      if (!apiRes.ok) throw new Error("API response was not ok");
      console.log("Background email notification sent successfully via partner-hub!");
    } catch (err) {
      console.warn("Background email notification failed, launching client-side fallback mailto:", err);
      // Launch mailto option fallback
      const mailtoUrl = `mailto:thinkjsk@gmail.com?subject=${encodeURIComponent(
        `TBN Discovery Call Booking - ${chosenTypeLabel}`
      )}&body=${encodeURIComponent(
        `Hello Admin,\n\nWe have received a new partnership discovery call booking.\n\nDetails:\n- Name: ${leadForm.fullName}\n- Email: ${leadForm.email}\n- Mobile: ${leadForm.phone || "None"}\n- Business: ${leadForm.companyName}\n- Selection: ${chosenTypeLabel}\n- Booking Date: ${formattedDate}\n- Booking Time: ${selectedTime}\n- Message: ${leadForm.message || "None"}\n- Referrer Partner: ${referrerCode || "None"}\n\nDate Submitted: ${new Date().toLocaleDateString()}\n\nKind regards,\nTBN System`
      )}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 850);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal Dialog Box */}
      <div className="bg-[#faf8f5] border border-[#dbd4c9] rounded-[2.5rem] p-6 md:p-10 w-full max-w-4xl shadow-2xl relative z-10 flex flex-col gap-8 animate-in fade-in zoom-in-95 duration-250 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-700 transition-colors p-1.5 rounded-full hover:bg-zinc-100"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-16 space-y-4">
            <div className="w-20 h-20 bg-[#9f1e13]/10 rounded-full flex items-center justify-center mx-auto text-[#9f1e13]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-zinc-900 uppercase tracking-tight">Booking Confirmed!</h3>
            <p className="text-zinc-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for your Booking, we will contact you shortly.
            </p>
            {selectedDate && (
              <div className="bg-white border border-[#dbd4c9] p-4 rounded-xl max-w-md mx-auto mt-6 text-left space-y-2">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Booking summary</p>
                <p className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#9f1e13]" /> {selectedDate.toLocaleDateString("en-GB", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p className="text-sm font-semibold text-zinc-800 flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#9f1e13]" /> {selectedTime}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-zinc-200 text-zinc-700 hover:text-zinc-900 h-10 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-2 cursor-pointer transition-colors hover:bg-zinc-50"
                >
                  <a href={getGoogleCalendarLink()} target="_blank" rel="noopener noreferrer">
                    <CalendarIcon className="w-3.5 h-3.5" /> Add to Google Calendar
                  </a>
                </Button>
              </div>
            )}
            <div className="pt-8">
              <Button onClick={handleClose} className="px-8 py-3 bg-[#9f1e13] hover:bg-[#861910] text-white font-bold rounded-xl uppercase tracking-wider text-xs">
                Back to Site
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9f1e13] bg-[#9f1e13]/10 px-3 py-1 rounded-full">
                Step 1 of 2: Schedule Call
              </span>
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-zinc-950 uppercase tracking-tight mt-3">
                Book a Partner Discovery Call
              </h2>
              <p className="text-zinc-500 text-xs mt-1">
                Select your preferred date & time slot, and fill out your business details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
              
              {/* Left Column: Form Details / Info Summary */}
              {!parentLeadForm ? (
                <div className="w-full space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Full Name *</label>
                    <Input 
                      id="fullName" 
                      value={leadForm.fullName} 
                      onChange={handleInputChange} 
                      disabled={isSubmitting}
                      placeholder="Your Name" 
                      className="h-11 bg-white border-[#dbd4c9] text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-[#9f1e13] text-xs" 
                      required 
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="companyName" className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Clinic / Company Name *</label>
                    <Input 
                      id="companyName" 
                      value={leadForm.companyName} 
                      onChange={handleInputChange} 
                      disabled={isSubmitting}
                      placeholder="Your Business Name" 
                      className="h-11 bg-white border-[#dbd4c9] text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-[#9f1e13] text-xs" 
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Email Address *</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={leadForm.email} 
                        onChange={handleInputChange} 
                        disabled={isSubmitting}
                        placeholder="email@address.com" 
                        className="h-11 bg-white border-[#dbd4c9] text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-[#9f1e13] text-xs" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Phone Number</label>
                      <Input 
                        id="phone" 
                        value={leadForm.phone} 
                        onChange={handleInputChange} 
                        disabled={isSubmitting}
                        placeholder="Your Number" 
                        className="h-11 bg-white border-[#dbd4c9] text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-[#9f1e13] text-xs" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="partnershipType" className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Partnership Type *</label>
                    <select 
                      id="partnershipType" 
                      value={leadForm.partnershipType} 
                      onChange={handleInputChange} 
                      disabled={isSubmitting}
                      className="flex h-11 w-full rounded-md border border-[#dbd4c9] bg-white text-zinc-900 px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f1e13]" 
                      required
                    >
                      <option value="" disabled className="text-zinc-400">Select a category</option>
                      <option value="clinic">Clinic / Private Practice</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="healthClub">Health Club / Gym</option>
                      <option value="hub">TBN Hub</option>
                      <option value="academy">Training Academy</option>
                      <option value="retreat">Retreat / Resort</option>
                      <option value="expert">Specialist / Consultant</option>
                      <option value="ambassador">TBN Brand Ambassador</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Additional details (Optional)</label>
                    <Textarea 
                      id="message" 
                      value={leadForm.message} 
                      onChange={handleInputChange} 
                      disabled={isSubmitting}
                      placeholder="Tell us briefly about your expectations or goals..." 
                      className="bg-white border-[#dbd4c9] text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-[#9f1e13] min-h-[80px] text-xs" 
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full space-y-6 bg-[#faf8f5]/60 border border-[#dbd4c9]/60 p-6 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#9f1e13]/80 border-b border-[#dbd4c9]/45 pb-2">
                    Partner Information Summary
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider block mb-0.5">Full Name</span>
                      <p className="font-semibold text-zinc-900">{leadForm.fullName}</p>
                    </div>
                    <div>
                      <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider block mb-0.5">Company Name</span>
                      <p className="font-semibold text-zinc-900">{leadForm.companyName}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider block mb-0.5">Email Address</span>
                      <p className="font-semibold text-zinc-900 break-all">{leadForm.email}</p>
                    </div>
                    {leadForm.phone && (
                      <div className="col-span-2">
                        <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider block mb-0.5">Phone Number</span>
                        <p className="font-semibold text-zinc-900">{leadForm.phone}</p>
                      </div>
                    )}
                    <div className="col-span-2">
                      <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider block mb-0.5">Partnership Type</span>
                      <p className="font-semibold text-zinc-900">{mapTypeToLabel(leadForm.partnershipType)}</p>
                    </div>
                  </div>
                  {leadForm.message && (
                    <div className="border-t border-[#dbd4c9]/40 pt-4">
                      <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider block mb-1">Additional Details</span>
                      <p className="text-zinc-600 font-normal leading-relaxed text-xs italic bg-white p-3 rounded-lg border border-zinc-100">
                        "{leadForm.message}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Right Column: Calendar and Time Selection */}
              <div className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#9f1e13]" /> Select Booking Date *
                  </label>
                  <div className="bg-white border border-[#dbd4c9] rounded-2xl p-1 flex justify-center shadow-inner">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: tomorrow }}
                      className="rounded-xl border-none max-w-full"
                    />
                  </div>
                </div>

                {selectedDate && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9f1e13]" /> Select Time Slot *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 px-3 text-[11px] font-bold uppercase tracking-wider border rounded-xl transition-all ${
                            selectedTime === slot
                              ? "bg-[#9f1e13] border-[#9f1e13] text-white shadow-sm scale-[1.02]"
                              : "bg-white border-[#dbd4c9] text-zinc-700 hover:bg-zinc-50"
                          }`}
                        >
                          {slot.split(" ")[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form submit/footer spanning across cols */}
              <div className="col-span-2 w-full pt-4 border-t border-[#dbd4c9]/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-zinc-500 text-xs text-left w-full sm:w-auto">
                  {selectedDate && selectedTime ? (
                    <span className="font-semibold text-zinc-800 flex items-center gap-1">
                      Selected: {selectedDate.toLocaleDateString("en-GB", { day: 'numeric', month: 'short' })} at {selectedTime.split(" ")[0]}
                    </span>
                  ) : (
                    <span>* Required fields must be completed.</span>
                  )}
                </div>
                <div className="flex gap-3 w-full sm:w-auto shrink-0 justify-end">
                  <Button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    variant="outline"
                    className="border-[#dbd4c9] text-zinc-700 h-12 px-6 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                    className="bg-[#9f1e13] hover:bg-[#861910] text-white h-12 px-8 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg min-w-[180px]"
                  >
                    {isSubmitting ? "Processing..." : "CONFIRM BOOKING"}
                  </Button>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
