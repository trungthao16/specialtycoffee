import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Specialty Coffee Space - Cà Phê Specialty Thượng Hạng",
  description: "Specialty coffee hạt đặc sản tinh khiết từ các vùng trồng Ethiopia, Kenya, Colombia và Robusta Honey Gia Lai rang mộc thủ công thượng hạng tại Specialty Coffee Space.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://specialtycoffee-five.vercel.app'),
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"; // Default placeholder that user can override in Vercel env

  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
