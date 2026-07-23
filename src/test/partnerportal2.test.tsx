import React from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "@/components/QuizContext";
import PartnerPortal2 from "../pages/PartnerPortal2";

// Mock Supabase client to prevent actual network calls during testing
vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        order: vi.fn().mockResolvedValue({ data: [], error: null })
      })
    })
  }
}));

beforeAll(() => {
  if (typeof window !== "undefined") {
    window.URL.createObjectURL = vi.fn().mockReturnValue("blob:http://localhost/mock-file");
  }
});

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("PartnerPortal2 Component", () => {
  it("renders the dashboard with all 12 main sections/folders", () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <PartnerPortal2 />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    // Verify main header
    expect(screen.getByText("TBN PARTNER BACK OFFICE")).toBeInTheDocument();

    // Verify all 12 folder titles are present
    const expectedFolders = [
      "START HERE",
      "TRAINING ACADEMY",
      "TESTING HUB",
      "PATHWAYS HUB",
      "GAIN CLIENTS / PATIENTS",
      "SCALE YOUR BUSINESS",
      "LEAD WITH PARTNERS",
      "POINT-OF-CARE SCREENING",
      "PROTOCOL HUB",
      "PARTNER ONBOARDING",
      "MARKETING HUB",
      "SUPPORT CENTRE"
    ];

    expectedFolders.forEach(folderTitle => {
      expect(screen.getByText(folderTitle)).toBeInTheDocument();
    });
  });

  it("can toggle Super Admin Mode on/off", () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <PartnerPortal2 />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    const adminToggle = screen.getByRole("button", { name: "" }); // Switch button
    expect(screen.queryByText("Add Resource Item")).not.toBeInTheDocument();

    // Toggle Admin Mode on
    fireEvent.click(adminToggle);

    // Click on the first folder to see detailed view and see if uploader controls show up
    const folderCard = screen.getByText("START HERE");
    fireEvent.click(folderCard);

    // The detail modal/page should show the "Add File / Resource" button
    expect(screen.getByText("Add File / Resource")).toBeInTheDocument();
  });

  it("allows admin to upload from computer and delete a resource", () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <PartnerPortal2 />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    // 1. Toggle Admin Mode
    const adminToggle = screen.getByRole("button", { name: "" });
    fireEvent.click(adminToggle);

    // 2. Open folder detailed view
    fireEvent.click(screen.getByText("START HERE"));

    // 3. Check for initial resource "Welcome to TBN Video Walkthrough"
    expect(screen.getByText("Welcome to TBN Video Walkthrough")).toBeInTheDocument();

    // 4. Click Delete button on it
    const deleteButtons = screen.getAllByTitle("Delete Resource");
    expect(deleteButtons.length).toBeGreaterThan(0);
    fireEvent.click(deleteButtons[0]);

    // 5. Verify the resource is deleted (no longer visible)
    expect(screen.queryByText("Welcome to TBN Video Walkthrough")).not.toBeInTheDocument();

    // 6. Click "Add File / Resource" to open uploader modal
    fireEvent.click(screen.getByText("Add File / Resource"));

    // 7. Click "Upload from Computer" source selector
    fireEvent.click(screen.getByRole("button", { name: /Upload from Computer/i }));

    // 8. Find file input and upload a dummy file
    const fileInput = document.querySelector("input[type='file']") as HTMLInputElement;
    expect(fileInput).toBeTruthy();
    
    const file = new File(["dummy content"], "test-manual.pdf", { type: "application/pdf" });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // 9. File name auto-detects and populates title. Fill description
    fireEvent.change(screen.getByPlaceholderText("Explain what this file provides to the partners..."), {
      target: { value: "A new custom document uploaded from local disk" }
    });

    // 10. Click Confirm Upload
    fireEvent.click(screen.getByRole("button", { name: /Confirm Upload/i }));

    // 11. Verify new resource card is displayed in the list
    expect(screen.getByText("test-manual")).toBeInTheDocument();
    expect(screen.getByText("A new custom document uploaded from local disk")).toBeInTheDocument();
  });

  it("reveals CRM tab in Super Admin Mode and can switch to CRM board view", async () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <PartnerPortal2 />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    // 1. CRM tab should not be present initially
    expect(screen.queryByRole("button", { name: /Manage Leads & CRM/i })).not.toBeInTheDocument();

    // 2. Toggle Admin Mode
    const adminToggle = screen.getByRole("button", { name: "" });
    fireEvent.click(adminToggle);

    // 3. CRM tab should be visible now
    const crmTab = screen.getByRole("button", { name: /Manage Leads & CRM/i });
    expect(crmTab).toBeInTheDocument();

    // 4. Click the CRM tab
    fireEvent.click(crmTab);

    // 5. CRM headers should be visible
    expect(screen.getByText("Lead Sales Pipeline & CRM")).toBeInTheDocument();
    expect(screen.getByText("Total Inquiries")).toBeInTheDocument();
    expect(screen.getByText("New Leads")).toBeInTheDocument();

    // 6. Verification of pipeline columns in Kanban view
    expect(await screen.findByText("New Inquiries")).toBeInTheDocument();
    expect(await screen.findByText("Contacted / Nurturing")).toBeInTheDocument();
  });
});
