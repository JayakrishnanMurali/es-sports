import React from "react"
import Image from "next/image"
import Link from "next/link"
import { calculateReadingTime } from "@/utils/reading-time"
import { timeAgo } from "@/utils/time-ago"

import { RssItem } from "@/types/rss"
import { cn } from "@/lib/utils"

interface FeedcardProps {
  news: RssItem
  imgLeft?: boolean
  imgTop?: boolean
  smallText?: boolean
}

export const Feedcard = ({
  news,
  imgLeft = false,
  imgTop = false,
  smallText = false,
}: FeedcardProps) => {
  return (
    <div className={cn("flex  gap-4 items-center", imgTop && "flex-col ")}>
      <div className={cn("order-1", (imgLeft || imgTop) && "order-2")}>
        <Link href={news.link ?? "/"}>
          <h2 className={cn(smallText && "text-xl")}>{news.title}</h2>
        </Link>
        <p className={cn("my-2", smallText && "text-sm line-clamp-3")}>
          {news.description}
        </p>

        <div className="flex justify-between ">
          <p className={cn("text-xs")}>
            {calculateReadingTime(news.content?.length)}
          </p>
          {!smallText && (
            <p className="text-xs">Published {timeAgo(news.pubDate || "")}</p>
          )}
        </div>
      </div>
      <div className={cn("order-2", (imgLeft || imgTop) && "order-1")}>
        <Image
          className={cn(
            "object-cover min-w-[300px] min-h-[300px]",
            smallText && " min-w-[200px] max-h-[50px]"
          )}
          src={news.image ?? ""}
          alt={news.title ?? "Unknown"}
          width={smallText ? 600 : 400}
          height={smallText ? 50 : 400}
        />
      </div>
    </div>
  )
}
