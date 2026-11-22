import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadSoft® | Soluções Tecnológicas",
  description:
    "Entregamos soluções tecnológicas por meio de times que desenvolvem software. Conheça o TaaS, a Imersão Tech e a LeadSoft®.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
