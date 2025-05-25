"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  [key: string]: React.ReactNode | string | boolean | undefined;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        enableSystem={false}
      >
        {children}
      </NextThemesProvider>
    </>
  );
}
