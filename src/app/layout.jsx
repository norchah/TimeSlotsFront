import "./globals.css";
import Header from "@/components/ui/header";
import {Providers} from "@/app/providers";
import {siteConfig} from "@/config/site.config";
import Footer from "@/components/ui/footer";
import {layoutConfig} from "@/config/layout.config";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body
      className={`antialiased`}
    >
    <Providers>
      <Header style={{ height: `${layoutConfig.headerHeight}px`}}/>
      <main style={{ height: `calc(100vh - ${layoutConfig.footerHeight}px - ${layoutConfig.headerHeight}px)` }}>
        {children}
      </main>
      <Footer />
    </Providers>
    </body>
    </html>
  );
}
