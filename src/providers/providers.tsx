"use client";
import React from "react";
import ThemeProvider from "../components/layout/ThemeToggle/theme-provider";
import ReactQueryProvider from "./react-query";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ThemeProvider>
    </>
  );
}
