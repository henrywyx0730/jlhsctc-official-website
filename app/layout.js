import "./globals.css";

export const metadata = {
  title: "Critical Thinking Club",
  description: "Official website of the Critical Thinking Club at JLHS ZMB.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
