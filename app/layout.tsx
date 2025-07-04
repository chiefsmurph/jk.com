import { QueryProvider } from "@/components/QueryProvider";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata = {
  title: "Johnny Keeys - actor, model, musician",
  description: "Dynamic, screen-tested performer with leading-role experience in TV and film.",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon.png",
  },
  manifest: "/favicon/manifest.json",
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
