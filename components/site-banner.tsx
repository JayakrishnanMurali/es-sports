import Link from "next/link"

import { siteConfig } from "@/config/site"

import { BannerNav } from "./banner-nav"
import { Icons } from "./icons"

export const SiteBanner = () => {
  return (
    <div className=" hidden w-full border-b sm:block sticky top-0 z-40 bg-accent">
      <div className="container flex  justify-between h-8 items-center space-x-0">
        <Icons.search />
        <BannerNav items={siteConfig.bannerNav} />
        <div></div>
      </div>
    </div>
  )
}
