"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"

interface SiteHeaderProps {
  transparent?: boolean
}

export function SiteHeader({ transparent = true }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : transparent ? "bg-transparent" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20no%20background-mhVH8nYdjmphhp9EDB2z8bui7jD6ut.png"
              alt="Future Digit Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <SiteNavigation />
          <Link href="/#contact">
            <Button>Demander un devis</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
