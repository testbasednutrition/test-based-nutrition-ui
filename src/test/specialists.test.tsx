import React from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "@/components/QuizContext";
import SpecialistsDirectory from "../pages/SpecialistsDirectory";
import { specialists as mockSpecialists } from "../data/specialists";

const mockFetchSpecialists = vi.fn();
vi.mock("@/lib/api", () => ({
  fetchSpecialists: () => mockFetchSpecialists(),
}));

beforeAll(() => {
  if (typeof window !== "undefined") {
    window.scrollTo = vi.fn();
  }
});

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("SpecialistsDirectory Pagination", () => {
  it("renders specialists on page 1, 2, and 3 dynamically", async () => {
    const testSpecialists = Array.from({ length: 50 }, (_, i) => ({
      ...mockSpecialists[0],
      slug: `specialist-${i}`,
      name: `Specialist-${i}`,
    }));
    mockFetchSpecialists.mockResolvedValue(testSpecialists);
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <SpecialistsDirectory />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    // Verify first page is active and shows first specialist (Specialist-0)
    const specialistOnPage1 = await screen.findByText("Specialist-0");
    expect(specialistOnPage1).toBeInTheDocument();

    // Verify page numbers are rendered
    const page2Button = screen.getByRole("button", { name: "2" });
    const page3Button = screen.getByRole("button", { name: "3" });
    expect(page2Button).toBeInTheDocument();
    expect(page3Button).toBeInTheDocument();

    // Click page 2 button
    fireEvent.click(page2Button);

    // Specialist-0 is on page 1, so they should not be displayed on page 2
    expect(screen.queryByText("Specialist-0")).not.toBeInTheDocument();

    // Click page 3 button
    fireEvent.click(page3Button);

    // Verify we are on page 3
    expect(screen.queryByText("Specialist-0")).not.toBeInTheDocument();
  });
});
