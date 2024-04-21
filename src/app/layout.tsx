import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Plate Post",
  description: "A simple Restaurant Menu Gnerator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
      <div>Top Nav</div>

      <div>Sign in</div>
    </nav>

  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
