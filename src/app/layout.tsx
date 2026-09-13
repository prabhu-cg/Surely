import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Surely — There must be a better way.",
  description:
    "Surely brings together different perspectives to explore problems, uncover possibilities and build things that matter.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sourceSerif4.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cloud-50 text-midnight-800 font-sans">
        {children}
      </body>
    </html>
  );
}
