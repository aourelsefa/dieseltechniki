import type { Metadata } from "next";
import { Inter_Tight, Oswald, Roboto } from "next/font/google";

import "styles/globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-tight",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diesel Techniki | Συνεργείο αυτοκινήτων — Service & επισκευή (εξειδίκευση diesel)",
  description:
    "Diesel Techniki, Ηλιούπολη: πλήρες συνεργείο αυτοκινήτων — service, διαγνωστικός έλεγχος, συντήρηση και επισκευή. Ισχυρή τεχνογνωσία σε κινητήρες diesel, turbo και συστήματα υψηλής πίεσης.",
  keywords: [
    "συνεργείο αυτοκινήτων",
    "ηλιούπολη",
    "service",
    "επισκευή αυτοκινήτων",
    "diesel",
    "turbo",
    "μπεκ",
    "διαγνωστικός έλεγχος",
  ],
  openGraph: {
    title: "Diesel Techniki | Συνεργείο αυτοκινήτων",
    description:
      "Πλήρες service και επισκευή στην Ηλιούπολη — με εξειδίκευση σε diesel όπου η τεχνική μετράει.",
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${roboto.variable} ${interTight.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-white font-sans text-navy-900 antialiased">{children}</body>
    </html>
  );
}
