import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          </div>
          <span className="font-bold text-foreground hidden sm:inline">Brand Name</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-foreground hover:text-primary transition">
            How it Works
          </Link>
          <Link href="#features" className="text-foreground hover:text-primary transition">
            Features
          </Link>
          <Link href="#faq" className="text-foreground hover:text-primary transition">
            FAQs
          </Link>
          <Link href="#support" className="text-foreground hover:text-primary transition">
            Support
          </Link>
        </div>

        <Link href="#get-started">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}
