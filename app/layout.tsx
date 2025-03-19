import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import FooterSection from "@/components/madeups/Home/modules/footer-section";
import NavBar from "@/components/madeups/Home/modules/nav-bar";
import { ConditionalConnectExpert } from "./ConditionalConnectExpert";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/sonner";
// import { GoogleAnalytics } from '@next/third-parties/google'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`antialiased ${poppins.variable} ${axiforma.variable} absolute w-screen`}
      >
        {/* <GoogleAnalytics gaId="G-XYZ" /> */}
        <Suspense fallback={<Loading />}>
          <Loading />
          <NavBar />
          {children}
          <ConditionalConnectExpert />
          <FooterSection />
        </Suspense>
        <Toaster
          position="top-center"
          expand={false}
          // closeButton
          className="z-[100]"
          toastOptions={{
            className: "z-[100] border-2 border-stone-200",
            style: {
              background: "white",
              color: "black",
            },
          }}
        />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ezmigrate.co.nz/"),
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
    url: "https://www.ezmigrate.co.nz/",
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
    google:
      "google-site-verification=pdlinnoRKr0_mGib3SY5YJgGkeEvGoFAcP91IN3nHCY",
    yandex: "your-actual-yandex-verification-code",
    yahoo: "your-actual-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://www.ezmigrate.co.nz",
    types: {
      "application/xml": [
        {
          url: "sitemap.xml",
          title: "Sitemap",
        },
      ],
    },
  },
};
