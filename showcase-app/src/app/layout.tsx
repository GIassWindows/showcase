import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "api test"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
