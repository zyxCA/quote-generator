import "./globals.css";

export const metadata = {
  title: "Junye Quote Generator with AWS",
  description: "Junye personal project: Quote auto generating website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
