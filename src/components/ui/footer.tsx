import React from 'react';
import {siteConfig} from "@/config/site.config";
import {layoutConfig} from "@/config/layout.config";

export default function Footer() {
  return (
    <footer className={`flex justify-center items-center`}
    style={{ height: `${layoutConfig.footerHeight}px` }}
    >
      <p>{siteConfig.description}</p>
    </footer>
  );
}