import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Mail, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO 
        title="Privacy Policy | Test-Based Nutrition"
        description="Learn how Test-Based Nutrition collects, protects, and handles your personal and health screening data in full compliance with GDPR regulations."
        canonical="https://www.test-basednutrition.com/privacy-policy"
      />
      <Navbar alwaysSolid />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full space-y-8">
          
          {/* Header */}
          <div className="border-b border-border/60 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">Privacy Policy</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Privacy Policy & Data Protection
              </h1>
              <p className="text-xs text-muted-foreground mt-2">
                Last Updated: July 2026 • Compliant with UK GDPR, EU GDPR, and Data Protection Act 2018
              </p>
            </div>
            
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9f1e13] hover:underline shrink-0">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs">
              <Shield className="w-5 h-5 text-[#9f1e13] mb-2" />
              <h3 className="font-serif text-sm font-bold mb-1">GDPR Compliant</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your data is processed strictly under lawful GDPR grounds with robust encryption and access controls.
              </p>
            </div>
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs">
              <Lock className="w-5 h-5 text-[#9f1e13] mb-2" />
              <h3 className="font-serif text-sm font-bold mb-1">Anonymised Lab Data</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Blood spot samples sent to accredited partner labs are pseudonymised and tagged by code, never full names.
              </p>
            </div>
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs">
              <Eye className="w-5 h-5 text-[#9f1e13] mb-2" />
              <h3 className="font-serif text-sm font-bold mb-1">Zero Third-Party Sale</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We never sell or lease your personal contact or clinical information to external advertising brokers.
              </p>
            </div>
          </div>

          {/* Policy Main Content */}
          <div className="bg-card border border-border/80 rounded-2xl p-6 md:p-8 space-y-8 text-xs md:text-sm text-muted-foreground leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">1.</span> Introduction & Data Controller
              </h2>
              <p>
                Test-Based Nutrition (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy and ensuring the security of your personal and health screening information. This Privacy Policy explains how we collect, store, process, and safeguard your data when you interact with our website, complete screening quizzes, purchase testing kits, or consult with our partner network.
              </p>
              <p>
                For the purpose of data protection laws, Test-Based Nutrition acts as the Data Controller for personal information collected directly through our online platforms.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">2.</span> Information We Collect
              </h2>
              <p>We may collect and process the following categories of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-foreground">Contact & Identity Data:</strong> Full name, email address, telephone number, mailing address, and referral code when you fill out contact forms, request test kits, or submit partner inquiries.</li>
                <li><strong className="text-foreground">Health & Lifestyle Screening Data:</strong> Dietary habits, symptom responses, health goals, and screening answers submitted voluntarily via our interactive assessment quizzes.</li>
                <li><strong className="text-foreground">Laboratory & Biomarker Data:</strong> Pseudonymised biomarker test results (e.g., fatty acid profiles, Vitamin D status, gut microbiome metrics) analyzed by accredited partner laboratories.</li>
                <li><strong className="text-foreground">Technical & Usage Data:</strong> IP address, browser type, device information, operating system, and interaction logs collected automatically via essential and analytical cookies.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">3.</span> Legal Basis for Data Processing
              </h2>
              <p>Under UK and EU GDPR, we process your personal data under the following legal bases:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-foreground">Explicit Consent:</strong> For processing health-related screening responses and sending optional educational newsletter communications.</li>
                <li><strong className="text-foreground">Contractual Performance:</strong> To process kit orders, deliver lab screening results, and connect you with qualified partner specialists.</li>
                <li><strong className="text-foreground">Legitimate Interests:</strong> To maintain website security, prevent fraud, analyze platform usage, and refine our clinical pathways.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">4.</span> Health Data Confidentiality & Lab Processing
              </h2>
              <p>
                We treat all health and biomarker data with the highest confidentiality standard. When dry blood spot (DBS) test kits are dispatched to independent accredited laboratories (such as Vitas Analytical Services), samples are identified solely by a unique alphanumeric barcode ID.
              </p>
              <p>
                Laboratory staff analyzing blood spots do not receive your name, contact details, or street address. Test results are linked back to your secure dashboard only via encrypted code matching.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">5.</span> Sharing & Third-Party Disclosures
              </h2>
              <p>We do not sell your personal data. We only share information with trusted service providers who assist in operating our platform:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-foreground">Accredited Laboratories:</strong> For processing blood spot analysis kits under strict confidentiality agreements.</li>
                <li><strong className="text-foreground">Affiliated Healthcare Practitioners:</strong> Only when you explicitly request a consultation or clinic referral.</li>
                <li><strong className="text-foreground">Secure Infrastructure Providers:</strong> Encrypted cloud databases (e.g., Supabase) and transactional email routing systems.</li>
                <li><strong className="text-foreground">Legal Authorities:</strong> If required by law, regulation, or formal court order.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">6.</span> Data Retention & Security
              </h2>
              <p>
                We maintain appropriate technical and organizational measures to prevent unauthorized access, disclosure, or accidental destruction of data. All communication between your browser and our servers is secured using SSL/TLS encryption.
              </p>
              <p>
                Personal contact data is retained only as long as necessary to fulfill the purposes for which it was collected or to comply with statutory legal, accounting, and reporting obligations.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">7.</span> Your GDPR Data Rights
              </h2>
              <p>Under GDPR, you have the following rights regarding your personal data:</p>
              <div className="grid gap-3 md:grid-cols-2 pt-2">
                <div className="p-3 bg-muted/20 border border-border/60 rounded-xl">
                  <h4 className="font-bold text-foreground mb-1">Right of Access</h4>
                  <p className="text-xs">Request a copy of the personal data we hold about you.</p>
                </div>
                <div className="p-3 bg-muted/20 border border-border/60 rounded-xl">
                  <h4 className="font-bold text-foreground mb-1">Right to Rectification</h4>
                  <p className="text-xs">Request correction of inaccurate or incomplete personal records.</p>
                </div>
                <div className="p-3 bg-muted/20 border border-border/60 rounded-xl">
                  <h4 className="font-bold text-foreground mb-1">Right to Erasure (&quot;To Be Forgotten&quot;)</h4>
                  <p className="text-xs">Request deletion of your data when retention is no longer justified.</p>
                </div>
                <div className="p-3 bg-muted/20 border border-border/60 rounded-xl">
                  <h4 className="font-bold text-foreground mb-1">Right to Withdraw Consent</h4>
                  <p className="text-xs">Revoke consent for optional data processing or marketing emails at any time.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 border-t border-border/60 pt-6">
              <h2 className="text-lg font-serif font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-[#9f1e13]">8.</span> Contact Us & Data Protection Inquiries
              </h2>
              <p>
                If you have questions regarding this Privacy Policy, wish to exercise any of your data rights, or want to make a privacy request, please contact our Data Protection Team:
              </p>
              <div className="bg-muted/30 border border-border/80 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-foreground">Test-Based Nutrition — Data Protection Officer</p>
                  <p>Email: privacy@testbasednutrition.com</p>
                </div>
                <Link 
                  to="/support" 
                  className="inline-flex items-center gap-1.5 bg-[#9f1e13] hover:bg-[#861910] text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer w-fit text-xs border-none"
                >
                  <Mail className="w-3.5 h-3.5" /> Submit Data Request
                </Link>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
