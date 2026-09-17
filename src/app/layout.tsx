import type { Metadata } from "next";
import { Archivo_Black, Hind } from "next/font/google";
import "./globals.css";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Placework | Turn map searches into qualified leads",
  description:
    "Placework is a Chrome extension that turns Google Maps search results into clean business lists. Names, phones, emails, websites, and more, exported to CSV.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hind.variable} ${archivoBlack.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[var(--bg)] font-sans text-[17px] leading-relaxed text-[var(--fg)] antialiased">
        {children}
      </body>
    </html>
  );
}
