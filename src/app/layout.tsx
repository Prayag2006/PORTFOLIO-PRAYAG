import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { IntroOverlay } from "@/components/IntroOverlay";

export const metadata: Metadata = {
  title: "Prayag Kansara — Web Designer & Full-Stack Developer",
  description:
    "Editorial portfolio of Prayag Kansara, a Web Designer & Full-Stack Developer crafting clean, modern digital experiences, thoughtful interactions, and reliable technology.",
  keywords: [
    "Prayag Kansara",
    "Web Designer",
    "Full-Stack Developer",
    "Portfolio",
    "UI/UX Design",
    "Digital Creative",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Prayag Kansara" }],
  openGraph: {
    title: "Prayag Kansara — Web Designer & Full-Stack Developer",
    description:
      "Crafting clean, modern digital experiences that combine strong visual design, thoughtful interaction, and reliable technology.",
    url: "https://prayagkansara.design",
    siteName: "Prayag Kansara Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayag Kansara — Web Designer & Full-Stack Developer",
    description:
      "Portfolio of Prayag Kansara, Web Designer & Full-Stack Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* suppressHydrationWarning: the inline script below stamps class="js" on
       this element before React hydrates, so server and client markup differ
       here by design. It is scoped to this one element only. */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks the document as scripted before first paint, so the reveal
            styles only ever hide content that JavaScript can reveal again. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              "try{if(!sessionStorage.getItem('intro-seen')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('intro-pending')}}catch(e){}",
          }}
        />
      </head>
      <body className="bg-[#F5F1E8] text-[#171717] antialiased selection:bg-[#B85C3A] selection:text-white">
        <IntroOverlay />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
