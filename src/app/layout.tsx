import type { Metadata } from "next";
import { Poppins, PT_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "Luqman - UI/UX Designer",
  description:
    "Portfolio of Muhammad Luqman, a professional UI/UX designer crafting seamless digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${ptSans.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <div className="flex flex-col min-h-dvh bg-background">
              <Header />
              <main className="flex-1 w-full overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
