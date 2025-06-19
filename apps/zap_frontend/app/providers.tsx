'use client';

import { ThemeProvider } from "next-themes";
import { AuthProvider } from '@/contexts/auth-context';
import Header from "@/components/header";
import Footer from "@/components/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <div className="flex flex-col w-full max-width-4xl px-4">
          <Header />
          <main >
            {children}
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
} 