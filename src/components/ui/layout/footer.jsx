import React from 'react';
import {siteConfig} from "@/config/site.config";
import {layoutConfig} from "@/config/layout.config";

export default function Footer({style}) {
  return (
    <footer className={`flex justify-center items-center`}
    style={style}>
      <p>{siteConfig.description}</p>
    </footer>
  );
}