import React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

interface BannerNavProps {
  items?: NavItem[]
}

export const BannerNav = ({ items }: BannerNavProps) => {
  return (
    <nav className="flex gap-x-2">
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "font-medium text-sm hover:bg-card py-1 px-2 rounded-md transition-all duration-300 ease-in-out"
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  )
}
