import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { personalData } from "@/utils/data/personal-data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

const title = `${personalData.name} – ${personalData.designation} (React, TypeScript)`;

// Social images and icons come from the file conventions in app/:
// opengraph-image.png, twitter-image.png, icon.png, apple-icon.png, favicon.ico.
export const metadata = {
  metadataBase: new URL(personalData.siteUrl),
  title: {
    default: title,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.description,
  applicationName: personalData.name,
  authors: [{ name: personalData.name, url: personalData.siteUrl }],
  creator: personalData.name,
  keywords: [
    personalData.name,
    "UI Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: personalData.name,
    title,
    description: personalData.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: personalData.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0d1224",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
    </html>
  );
}
