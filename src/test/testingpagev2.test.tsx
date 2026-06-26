import React from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider } from "@/components/QuizContext";

beforeAll(() => {
  vi.stubGlobal("ResizeObserver", vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })));
});

import TestingPageV2 from "../pages/TestingPageV2";

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("TestingPageV2 Component", () => {
  it("renders without crashing", async () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <TestingPageV2 />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    const title = await screen.findByText("A practitioner-led approach to proactive health");
    expect(title).toBeTruthy();
    console.log("RENDERED SUCCESSFUL");
  });
});
