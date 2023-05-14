import axios from "axios"
import { DOMParser } from "xmldom"

import { RssItem } from "@/types/rss"

export const rssToJson = async (url: string) => {
  const response = await axios.get(url)
  const xmlText = response.data
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlText, "text/xml")
  const items = xmlDoc.getElementsByTagName("item")
  const parsedItems: RssItem[] = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const title = item.getElementsByTagName("title")[0]?.textContent
    const desc = item.getElementsByTagName("description")[0]?.textContent
    const descriptionDoc = parser.parseFromString(desc || "", "text/html")
    const description = descriptionDoc.documentElement.textContent
    const link = item.getElementsByTagName("link")[0]?.textContent
    const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent
    const content = item.getElementsByTagName("content:encoded")[0]?.textContent
    const categoryElements = item.getElementsByTagName("category")
    const categories = Array.from(categoryElements).map((el) => {
      const cdata = el.firstChild
      return cdata ? cdata?.nodeValue?.trim() : el?.textContent?.trim()
    })
    const imageElement = item.getElementsByTagName("media:content")[0]
    const image = imageElement ? imageElement.getAttribute("url") : null
    const parsedItem = {
      title,
      description,
      link,
      pubDate,
      content,
      categories,
      image,
    }
    parsedItems.push(parsedItem)
  }
  return parsedItems
}
