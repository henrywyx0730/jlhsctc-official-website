import "./globals.css";

export const metadata = {
  title: "Critical Thinking Club",
  description: "Official website of the Critical Thinking Club at Jinling High School ZMB.",
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
