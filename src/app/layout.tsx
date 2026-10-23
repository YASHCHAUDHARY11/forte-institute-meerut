import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forte Institute of Technology (FIT) Meerut | Approved by AICTE & NCTE",
  description: "Official portal for Forte Institute of Technology (FIT Group of Institutions), Meerut. Offering B.Tech, BCA, MCA, BBA, MBA, B.Ed & M.Ed affiliated with AKTU & CCSU.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-gold-500 selection:text-navy-900">
        {children}
      </body>
    </html>
  );
}
