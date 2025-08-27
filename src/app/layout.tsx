import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import {Providers} from "@/app/providers";
import {siteConfig} from "@/config/site.config";
import Footer from "@/components/ui/footer";
import {layoutConfig} from "@/config/layout.config";


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
  }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`antialiased`}
    >
    <Providers>
      <Header style={{ height: `${layoutConfig.headerHeight}px`}}/>
      <main className={`flex flex-col justify-center items-center`}
      style={{ height: `calc(100vh - ${layoutConfig.footerHeight}px - ${layoutConfig.headerHeight}px)` }}>
      {/*// style={{ height: `calc(100vh - ${layoutConfig.footerHeight}px)` }}>*/}
        {children}
      </main>
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}
