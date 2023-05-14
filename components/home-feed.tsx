import { RssItem } from "@/types/rss"

import { Leftfeed } from "./left-feed"
import { Rightfeed } from "./right-feed"

interface HomefeedProps {
  rss: RssItem[]
}

export const Homefeed = ({ rss }: HomefeedProps) => {
  const leftRss = rss.slice(0, 7)
  const rightRss = rss.slice(7)

  return (
    <div className="my-4 grid grid-cols-7 gap-4">
      <section className="col-span-5 border-r-2 pr-4">
        <Leftfeed rss={leftRss} />
      </section>
      <section className="col-span-2">
        <Rightfeed rss={rightRss} />
      </section>
    </div>
  )
}
