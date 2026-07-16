import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PartnerLeadForm from "./PartnerLeadForm";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mock Supabase client to trigger fallback storage path
vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: () => ({
      insert: vi.fn().mockResolvedValue({ error: new Error("Database offline fallback mock") }),
    }),
  },
}));

describe("PartnerLeadForm Component Mailto & Fallback Test", () => {
  beforeEach(() => {
    localStorage.clear();
    // Stub window.location to capture mailto redirect url
    vi.stubGlobal("location", { href: "" });
    // Mock global fetch to reject instantly so fallback triggers immediately
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network offline")));
  });

  it("should open the modal on button click, fill form, save locally, and trigger mailto to thinkjsk@gmail.com", async () => {
    render(<PartnerLeadForm sourcePage="Test Treatment Pathway" />);

    // 1. Click the "Become a Partner" trigger button
    const triggerBtn = screen.getByRole("button", { name: /Become a Partner/i });
    fireEvent.click(triggerBtn);

    // 2. Assert modal is visible
    expect(screen.getByText(/Provide your contact details below to get started/i)).toBeInTheDocument();

    // 3. Fill in form inputs
    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Dummy Tester" } });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: "dummy@tester.com" } });
    fireEvent.change(screen.getByPlaceholderText("Mobile Number"), { target: { value: "07700900077" } });

    // 4. Submit form
    const submitBtn = screen.getByRole("button", { name: /Submit Request/i });
    fireEvent.click(submitBtn);

    // 5. Verify local storage fallback contains the submitted lead data
    await waitFor(() => {
      const storedLeads = JSON.parse(localStorage.getItem("partner_leads") || "[]");
      expect(storedLeads).toHaveLength(1);
      expect(storedLeads[0]).toMatchObject({
        name: "Dummy Tester",
        email: "dummy@tester.com",
        mobile: "07700900077",
        leadType: "Become a Partner",
        sourcePage: "Test Treatment Pathway",
      });
    });

    // 6. Verify window.location.href gets set to correct mailto link for thinkjsk@gmail.com
    await waitFor(() => {
      expect(window.location.href).toContain("mailto:thinkjsk@gmail.com");
      expect(window.location.href).toContain("Dummy%20Tester");
      expect(window.location.href).toContain("dummy%40tester.com");
      expect(window.location.href).toContain("07700900077");
    }, { timeout: 1500 });
  });
});
