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

import TBNMethod from "../pages/TBNMethod";

const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("TBNMethod Component", () => {
  it("renders without crashing", async () => {
    const queryClient = createQueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <QuizProvider>
          <BrowserRouter>
            <TBNMethod />
          </BrowserRouter>
        </QuizProvider>
      </QueryClientProvider>
    );

    const title = await screen.findByText("How the TBN Method Works");
    expect(title).toBeTruthy();
    console.log("RENDERED SUCCESSFUL");
  });
});
