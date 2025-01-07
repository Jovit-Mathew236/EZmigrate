import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import FooterSection from "@/components/madeups/Home/modules/footer-section";
import NavBar from "@/components/madeups/Home/modules/nav-bar";
import ConnectExpertSection from "@/components/madeups/Home/modules/connect-expert-section";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-poppins",
});

const axiforma = localFont({
  src: [
    {
      path: "../public/fonts/Axiforma/Axiforma_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Axiforma/Axiforma_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts//Axiforma/Axiforma_Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-axiforma",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-zmigrate.vercel.app/"),
  title: {
    default: "EZmigrate - Study Abroad Consultants",
    template: "%s | EZmigrate",
  },
  description:
    "EZmigrate transforms dreams into global success. Expert guidance for international education, helping students find the perfect course, university, and destination worldwide.",
  keywords: [
    "study abroad",
    "international education",
    "university admissions",
    "student visa",
    "overseas education",
    "global education consultants",
    "study abroad consultants",
    "study abroad consultants in india",
    "study abroad consultants in delhi",
    "study abroad consultants in mumbai",
  ],
  authors: [{ name: "EZmigrate" }],
  creator: "EZmigrate",
  publisher: "EZmigrate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://e-zmigrate.vercel.app/",
    siteName: "EZmigrate",
    title: "EZmigrate - Your Gateway to Global Education",
    description:
      "Expert guidance for international education, helping students find the perfect course, university, and destination worldwide.",
    images: [
      {
        url: "/logowhite.png",
        width: 1200,
        height: 630,
        alt: "EZmigrate - Study Abroad Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EZmigrate - Study Abroad Consultants",
    description:
      "Expert guidance for international education, helping students find the perfect course, university, and destination worldwide.",
    images: ["/logowhite.png"],
    creator: "@ezmigrate",
    site: "@ezmigrate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`antialiased ${poppins.variable} ${axiforma.variable}`}>
        <NavBar />
        {children}
        <ConnectExpertSection />
        <FooterSection />
      </body>
    </html>
  );
}
