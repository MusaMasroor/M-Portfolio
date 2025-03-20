import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Portfolio of Musa Masroor",
    template: "%s | Musa Masroor",
  },
  description: "Full-stack developer specializing in modern web technologies. Passionate about creating efficient, scalable, and user-friendly applications.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "JavaScript", "TypeScript"],
  authors: [{ name: "Musa Masroor" }],
  creator: "Musa Masroor",
  publisher: "Musa Masroor",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Musa Masroor Portfolio",
    title: "Portfolio of Musa Masroor",
    description: "Full-stack developer specializing in modern web technologies. Passionate about creating efficient, scalable, and user-friendly applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Musa Masroor - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio of Musa Masroor",
    description: "Full-stack developer specializing in modern web technologies. Passionate about creating efficient, scalable, and user-friendly applications.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ToastContainer position="bottom-right" theme="dark" />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
