"use client";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>STRATA Dental Clinic</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&family=Tajawal:wght@300;400;500;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
