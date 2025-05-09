import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced SEO metadata configuration
export const metadata = {
  // Basic metadata
  title: "Mejdi Haddad | Data Scientist | Generative AI Enthusiast",
  description:
    "Portfolio of Mejdi Haddad, Data Scientist, Generative AI Enthusiast, and Full-Stack Developer specializing in AI-powered applications and modern web development.",
  keywords: [
    "Mejdi Haddad",
    "Data Scientist Tunisia",
    "Generative AI",
    "FastAPI Developer",
    "React Developer",
    "Machine Learning",
    "AI Engineer Tunisia",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Mejdi Haddad" }],
  creator: "Mejdi Haddad",
  publisher: "Mejdi Haddad",

  // Open Graph / Facebook metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mejdihaddad.me/",
    siteName: "Mejdi Haddad Portfolio",
    title: "Mejdi Haddad | Data Scientist & AI Engineer",
    description:
      "Portfolio of Mejdi Haddad, Data Scientist and AI Engineer building innovative solutions with FastAPI, React, and Machine Learning.",
    images: [
      {
        url: "https://mejdihaddad.me/mejdi.png",
        width: 1200,
        height: 630,
        alt: "Mejdi Haddad - Data Scientist & AI Engineer",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Mejdi Haddad | Data Scientist & AI Engineer",
    description:
      "Portfolio of Mejdi Haddad, Data Scientist and AI Engineer building innovative solutions with FastAPI, React, and Machine Learning.",
    creator: "@mejdi_haddad",
    images: ["https://mejdihaddad.me/mejdi.png"],
  },

  // Verification for Google Search Console
  verification: {
    google: "ocdMjuxCJlRyxPNmNZ4hLMIiBOJglInYlEBNCtvsYqs",
  },

  // Canonical URL
  alternates: {
    canonical: "https://mejdihaddad.me/",
  },

  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon and app icons
  icons: {
    icon: "/logo.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mejdi Haddad",
              jobTitle:
                "Data Scientist | Generative AI Enthusiast | Backend & Frontend Developer",
              url: "https://mejdihaddad.me",
              sameAs: [
                "https://www.linkedin.com/in/mejdihaddad",
                "https://github.com/mejdihaddad",
                "https://haddadmejdi.medium.com",
                "https://x.com/mejdi_haddad",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Tunisia",
              },
              description:
                "Data Scientist & Full-Stack Developer driven by a passion for AI and innovative web solutions. I craft scalable apps using FastAPI, React, LangChain, and more.",
              image: "https://mejdihaddad.me/mejdi.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
