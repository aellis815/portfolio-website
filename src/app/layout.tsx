import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Ellis Portfolio",
  description: "Portfolio of projects by Alex Ellis - both completed & in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-secondary-200 absolute top-[-1rem] left-[-31rem] h-[32rem] w-full rounded-full blur-[140rem] overflow-hidden"></div>
        {children}
      </body>
    </html>
  );
}
