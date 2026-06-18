import "./globals.css";

export const metadata = {
  title: "Tool's Access",
  description: "Direct access hub for QuickTools modules"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
