import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Team", path: "/team" }
  ]

  const isActivePath = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-charcoal shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="proActive_.png"
              alt="PredictivePro Logo" 
              className="h-8 lg:h-10 w-auto"
            />
            <div className="font-headline text-xl lg:text-2xl font-bold text-deep-green">
              PREDICTIVEPRO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "font-label text-sm uppercase tracking-wider transition-colors duration-200",
                  isActivePath(item.path)
                    ? "text-deep-green border-b-2 border-deep-green pb-1"
                    : "text-foreground hover:text-deep-green"
                )}
              >
                {item.name}
              </Link>
            ))}
            <BrutalistButton size="sm" asChild>
              <Link to="/team#contact">Get Started</Link>
            </BrutalistButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-deep-green transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "font-label text-sm uppercase tracking-wider py-2 transition-colors duration-200",
                    isActivePath(item.path)
                      ? "text-deep-green font-bold"
                      : "text-foreground hover:text-deep-green"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <BrutalistButton fullWidth asChild>
                  <Link to="/team#contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </BrutalistButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}