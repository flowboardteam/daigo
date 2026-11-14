import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daigo Deploy | AI Applications for Enterprise Mission",
  description:
    "Mission-specific AI software and forward-deployed engineering teams purpose-built for operational excellence across enterprise platforms and reasoning architectures.",
  keywords: [
    "Daigo Deploy",
    "Forward Deployed Engineers",
    "Enterprise AI",
    "Operational Intelligence",
    "Mission-Critical AI",
    "Autonomous Operations",
    "Enterprise Ontologies",
    "Daigo Platform",
    "Databricks",
  ],
  authors: [{ name: "Daigo Deploy Technologies" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Daigo Deploy | AI Applications for Enterprise Mission",
    description:
      "The generational companies of the next century will run on mission-specific AI software that compounds their competitive advantage.",
    url: "https://daigodeploy.com",
    siteName: "Daigo Deploy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daigo Deploy | AI Applications for Enterprise Mission",
    description: "Intelligence Behind Every Mission-Critical Operation.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060709" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var theme = localStorage.getItem('daigo-theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-950 dark:bg-[#060709] dark:text-[#e6e8eb] antialiased selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-black dark:selection:text-white transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
