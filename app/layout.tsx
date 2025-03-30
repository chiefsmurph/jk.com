import { QueryProvider } from "@/components/QueryProvider";
import "./globals.css";

export const metadata = {
  title: "Modern Orange Pineapple",
  description: "Inspired by the future",
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
      </body>
    </html>
  );
}
