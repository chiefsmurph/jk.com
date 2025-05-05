import { QueryProvider } from "@/components/QueryProvider";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata = {
  title: "Modern Orange Pineapple",
  description: "Inspired by the future",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
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
      </body>
    </html>
  );
}
