import { ReactNode } from "react";
import { QueryProvider } from "./QueryContext";

// Wrapper component to provide React Query context
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      {/* Provides React Query functionality to all children */}
      {children}
    </QueryProvider>
  );
}
