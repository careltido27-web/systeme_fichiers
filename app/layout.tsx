import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIDO Solutions",
  description: "Solutions numériques modernes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}