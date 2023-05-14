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
    <div
      className={cn(
        "flex gap-4 items-center p-2 transition-all duration-300 ease-in-out rounded-md hover:shadow-md flex-col sm:flex-row ",
        imgTop && "flex-col md:flex-row lg:flex-col"
      )}
    >
      <div className={cn("order-1", (imgLeft || imgTop) && "lg:order-2")}>
        <Link href={news.link ?? "/"} target="_blank">
          <h2 className={cn("line-clamp-3", smallText && "lg:text-xl")}>
            {news.title}
          </h2>
        </Link>
        <p
          className={cn(
            "my-2 line-clamp-4",
            smallText && "lg:text-sm lg:line-clamp-3"
          )}
        >
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
      <Link href={news.link ?? "/"} target="_blank">
        <div
          className={cn(
            "order-2 overflow-hidden rounded-md ",
            (imgLeft || imgTop) && "order-1"
          )}
        >
          <Image
            className={cn(
              "object-cover hover:scale-125 transition-all duration-500 min-w-[300px] min-h-[300px]",
              smallText && " lg:min-w-[200px] lg:max-h-[200px]"
            )}
            src={news.image ?? ""}
            alt={news.title ?? "Unknown"}
            width={smallText ? 600 : 400}
            height={smallText ? 50 : 400}
          />
        </div>
      </Link>
    </div>
  )
}
