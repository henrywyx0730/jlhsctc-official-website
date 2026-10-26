import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/metadata";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Jinling High School ZMB`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Jinling High School ZMB`,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Jinling High School ZMB`,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main
            id="main-content"
            tabIndex={-1}
            className="scroll-mt-20 flex-1 bg-white text-[#17130d]"
          >
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
