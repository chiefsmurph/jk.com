import { QueryProvider } from "@/components/QueryProvider";
import { Analytics } from "@/components/Analytics";
import "./globals.css";
import SmartBackground from "@/components/SmartBackground";

export const metadata = {
  title: "Modern Orange Pineapple",
  description: "Escape the Ordinary—Own a Collectible Piece of Paradise.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
        <SmartBackground/>
        <div className="overlay" />
      </body>
    </html>
  );
}
