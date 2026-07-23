import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-down"; // wait, fix import react-router-dom!
import { FileText, AlertTriangle, Scale, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Terms of Service | Test-Based Nutrition"
        description="Review the legal terms and conditions governing the use of Test-Based Nutrition services, website, testing protocols, and partner consultation features."
        canonical="https://testbasednutrition.com/terms"
      />
      <Navbar alwaysSolid />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full space-y-8">
          
          {/* Header */}
          <div className="border-b border-border/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
                <RouterLink to="/" className="hover:text-foreground transition-colors">Home</RouterLink>
                <span>/</span>
                <span className="text-foreground">Terms of Service</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Terms of Service & Disclaimer
              </h1>
              <p className="text-xs text-muted-foreground mt-2">
                Last Updated: July 2026 • Please read carefully before using our services or test kits
              </p>
            </div>
            
            <RouterLink to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9f1e13] hover:underline shrink-0">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </RouterLink>
          </div>

          {/* Clinical Alert Box */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-700 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-sm text-amber-950">Important Medical Disclaimer</h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                Test-Based Nutrition provides wellness screening and educational insights to optimize nutritional health. Our services, tests, and recommendations do not diagnose, prevent, or cure medical conditions, nor do they replace professional medical advice, clinical diagnosis, or treatment by a licensed physician.
              </p>
            </div>
          </div>

          {/* Terms Main Content */}
          <div className="bg-card border border-border/80 rounded-2xl p-6 md:p-8 space-y-8 text-xs md:text-sm text-muted-foreground leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">1.</span> Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Test-Based Nutrition website, completing screening quizzes, purchasing blood spot testing kits, or accessing our partner directory, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of our website and services immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">2.</span> Services & Scope
              </h2>
              <p>
                Test-Based Nutrition facilitates laboratory-based nutritional screening, dietary protocol recommendations, and connections to independent healthcare and wellness practitioners. 
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Testing kits are intended solely for personal baseline screening and educational tracking.</li>
                <li>Custom protocol suggestions are intended as nutritional support and should be reviewed with your primary care provider if you are taking prescription medication or have chronic medical conditions.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">3.</span> User Responsibilities & Kit Submissions
              </h2>
              <p>When purchasing or registering a dry blood spot (DBS) kit:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You agree to follow all provided collection instructions carefully to prevent sample hemolysis or contamination.</li>
                <li>You confirm that all information provided during registration and quiz assessments is accurate and truthful.</li>
                <li>You are responsible for mailing samples to our accredited lab partner within specified timeframe windows.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">4.</span> Intellectual Property
              </h2>
              <p>
                All content, branding, logos, trademarks (&quot;Test. Target. Transform.™&quot;, &quot;The TBN Method&quot;), proprietary quiz algorithms, text, and visual designs are the exclusive intellectual property of Test-Based Nutrition. You may not reproduce, distribute, modify, or create derivative works without prior express written authorization.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">5.</span> Independent Practitioner Directory
              </h2>
              <p>
                Specialists, clinics, and ambassadors listed in our directory operate as independent entities. While we verify credentials, Test-Based Nutrition is not responsible for the independent clinical decisions, diagnoses, or treatments provided by third-party clinics or external practitioners.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">6.</span> Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Test-Based Nutrition and its directors, employees, and laboratory partners shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your reliance on screening reports, delay in postal sample delivery, or use of nutritional protocols.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 border-t border-border/60 pt-6">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">7.</span> Contact Information
              </h2>
              <p>
                If you have questions or legal inquiries regarding these Terms of Service, please reach out to our legal support team:
              </p>
              <div className="bg-muted/30 border border-border/80 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-foreground">Test-Based Nutrition — Legal Desk</p>
                  <p>Email: legal@testbasednutrition.com</p>
                </div>
                <RouterLink 
                  to="/support" 
                  className="inline-flex items-center gap-1.5 bg-[#9f1e13] hover:bg-[#861910] text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer w-fit text-xs border-none"
                >
                  <FileText className="w-3.5 h-3.5" /> Support Desk
                </RouterLink>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
