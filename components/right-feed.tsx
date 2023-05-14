import React from "react"

import { RssItem } from "@/types/rss"

import { Feedcard } from "./feed-card"

interface RightfeedProps {
  rss: RssItem[]
}

export const Rightfeed = ({ rss }: RightfeedProps) => {
  return (
    <div className="flex gap-y-4 flex-col">
      {rss.map((data) => (
        <Feedcard news={data} imgTop smallText key={data.title} />
      ))}
    </div>
  )
}
