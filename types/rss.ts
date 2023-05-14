export interface RssItem {
  title: string | null
  description: string | null
  link: string | null
  pubDate: string | null
  content: string | null
  image: string | null
  categories: (string | undefined)[] | null
}
