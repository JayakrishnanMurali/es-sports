import React from "react"
import Link from "next/link"

export const SiteFooter = () => {
  return (
    <footer className="w-full mt-8 bg-foreground py-4 text-background">
      <div className="container">
        <h3>The World of ES</h3>

        <div className="sm:flex gap-x-4 ">
          <Link href="/">
            <p className="text-sm">Privacy and Policy</p>
          </Link>
          <Link href="/">
            <p className="text-sm">Cookies Policy</p>
          </Link>
          <Link href="/">
            <p className="text-sm">Terms of Use</p>
          </Link>
        </div>

        <div className="my-4 py-4 border-t">
          <p>Full Spectrum Services LLP © 2023 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
