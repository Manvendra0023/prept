import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";




const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prept",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/7 py-10  mx-auto px-6 flex flex-wrap items-center justify-center text-stone-400">
              <p className="text-stone-500 text-sm text-center">
                  © {new Date().getFullYear()} Prept. All rights reserved. 
                  <br/>{" "}Made with <span className="text-red-500">❤️</span> by 
                  <span className="ml-1 font-medium hover:text-white transition-colors duration-300">
                    Manvendra
                  </span>
                </p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
