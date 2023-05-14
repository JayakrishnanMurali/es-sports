import { rssToJson } from "@/utils/rss-parser"

import { siteConfig } from "@/config/site"
import { Homefeed } from "@/components/home-feed"

export default async function IndexPage() {
  const rss = await rssToJson(siteConfig.rssLink)

  return (
    <section className="container">
      <Homefeed rss={rss} />
    </section>
  )
}
