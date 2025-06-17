"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, User, Search, Globe, Phone, Mail, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from 'next/image';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Trips", href: "/trips" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/trips?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
  <div className="relative h-10 w-10">
    <Image
      src="/musafir-logo.jpg"
      alt="Musafir Logo"
      fill
      className="object-contain"
    />
  </div>
  <span className={`text-xl font-bold ${isScrolled ? "text-amber-900" : "text-white"}`}>
    Musaffir
  </span>
</Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? "text-amber-800" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSearch(!showSearch)}
              className={`${
                isScrolled
                  ? "text-amber-700 hover:text-amber-500 hover:bg-amber-100"
                  : "text-white hover:text-amber-300 hover:bg-white/10"
              }`}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Language Selector */}
            <Button
              variant="ghost"
              size="sm"
              className={`${
                isScrolled
                  ? "text-amber-700 hover:text-amber-500 hover:bg-amber-100"
                  : "text-white hover:text-amber-300 hover:bg-white/10"
              }`}
            >
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>

            {/* Sign In Button */}
            <Link href="/auth/signin">
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-2 border-amber-500"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className={`md:hidden ${isScrolled ? "text-amber-700" : "text-white"}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-to-b from-amber-50 to-orange-50">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Plane className="h-6 w-6 text-amber-600" />
                    <span className="text-xl font-bold text-amber-900">Musaffir</span>
                  </div>
                </div>

                {/* Mobile Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-4 w-4" />
                    <Input
                      placeholder="Search destinations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      className="pl-10 border-2 border-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                <nav className="flex flex-col space-y-4 mb-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-amber-800 hover:text-amber-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto space-y-4">
                  <Link href="/auth/signin">
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-2 border-amber-500">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>

                  <div className="flex flex-col space-y-2 text-sm text-amber-700">
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +91 98551 48127
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      musafir30824@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Search Bar */}
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pb-4"
          >
            <div className="flex gap-2 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-4 w-4" />
                <Input
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 bg-white border-2 border-amber-200 focus:border-amber-500"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              >
                Search
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
