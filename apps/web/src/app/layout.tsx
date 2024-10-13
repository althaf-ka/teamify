import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans as plusJakartaSans } from "next/font/google";
import { QueryProvider } from "@repo/query/provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "../components/theme";

const jakarta = plusJakartaSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teamify",
  description: "Join as Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${jakarta.className} bg-black`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
