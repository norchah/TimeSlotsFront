import "./globals.css";
import Header from "@/components/ui/layout/header";
import {Providers} from "@/app/providers";
import {siteConfig} from "@/config/site.config";
import Footer from "@/components/ui/layout/footer";
import {layoutConfig} from "@/config/layout.config";
import NavSite from "../components/common/nav/nav";
import SectionWrap from "../components/ui/layout/section";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({children}) {
  return (
    <html lang="ru">
    <body
      className={`antialiased`}
    >
    <Providers>
      <Header style={{height: `${layoutConfig.headerHeight}px`}}/>
      <main style={{height: `calc(100vh - ${layoutConfig.footerHeight}px - ${layoutConfig.headerHeight}px)`}}>
        <SectionWrap>
          {children}
        </SectionWrap>
      </main>
      <Footer style={{height: `${layoutConfig.footerHeight}px`}}/>
    </Providers>
    </body>
    </html>
  );
}
