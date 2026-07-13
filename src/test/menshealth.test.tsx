import React from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "@/components/QuizContext";
import { specialists as mockSpecialists } from "../data/specialists";

const mockFetchSpecialists = vi.fn();
vi.mock("@/lib/api", () => ({
  fetchSpecialists: () => mockFetchSpecialists(),
}));

beforeAll(() => {
  vi.stubGlobal("ResizeObserver", vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })));
});

import MensHealth from "../pages/treatments/MensHealth";

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("MensHealth Component", () => {
  it("renders when fetch fails without crashing", async () => {
    mockFetchSpecialists.mockRejectedValue(new Error("Supabase connection failed"));
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <MensHealth />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    const heading = await screen.findByText("MEN’S HEALTH.");
    expect(heading).toBeTruthy();
  });

  it("renders when fetch succeeds with mock specialists data", async () => {
    mockFetchSpecialists.mockResolvedValue(mockSpecialists.map(s => ({ ...s, is_approved: true })));
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <MensHealth />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    const heading = await screen.findByText("MEN’S HEALTH.");
    expect(heading).toBeTruthy();

    // Verify FocusRail rendered items from specialists
    const specialistName = await screen.findByText("Dr. Ishtiaq Rehman");
    expect(specialistName).toBeTruthy();
  });
});
