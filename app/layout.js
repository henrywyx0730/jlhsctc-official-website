import "./globals.css";

export const metadata = {
  title: "CTC Online Archive",
  description: "Critical Thinking Club Online Archive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
