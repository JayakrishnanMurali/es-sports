import React from "react"

import { RssItem } from "@/types/rss"

import { Feedcard } from "./feed-card"

interface LeftfeedProps {
  rss: RssItem[]
}

export const Leftfeed = ({ rss }: LeftfeedProps) => {
  return (
    <div className="flex gap-y-4 flex-col">
      {rss.map((data) => (
        <Feedcard news={data} key={data.title} />
      ))}
    </div>
  )
}
