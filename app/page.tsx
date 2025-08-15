"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Star, ArrowRight, MapPin, Calendar, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent } from "@/components/ui/dialog";

const featuredDestinations = [
  {
    id: 1,
    name: "Hidden Gems of Shimla",
    image: "/home_t1.jpg",
    price: "₹12,999",
    originalPrice: "₹15,999",
    duration: "5 Days",
    rating: 4.8,
    reviews: 124,
    description: "Discover the untouched beauty of Shimla secret locations",
    highlights: ["Kempty Falls", "Mall Road", "Christ Church", "Jakhoo Temple"],
  },
  {
    id: 2,
    name: "Kashmir Valley Paradise",
    image: "/home_t2.jpg",
    price: "₹18,999",
    originalPrice: "₹22,999",
    duration: "7 Days",
    rating: 4.9,
    reviews: 89,
    description: "Experience the breathtaking lakes and mountains of Kashmir",
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Srinagar Gardens"],
  },
  {
    id: 3,
    name: "Kedarnath Spiritual Journey",
    image: "/home_t3.jpg",
    price: "₹15,999",
    originalPrice: "₹18,999",
    duration: "6 Days",
    rating: 4.7,
    reviews: 156,
    description: "Spiritual haven in heart of Himalayas",
    highlights: ["Tungnath", "Chopta", "Kedarnath Temple", "Chandrashila"],
  },
  {
    id: 4,
    name: "Golden Temple Serenity",
    image: "/home_t4.jpeg",
    price: "₹8,999",
    originalPrice: "₹10,999",
    duration: "3 Days",
    rating: 4.9,
    reviews: 203,
    description: "Find peace and spirituality at the Golden Temple",
    highlights: ["Golden Temple", "Jallianwala Bagh"],
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Technovista 2025",
    date: "June 18-19, 2025",
    location: "GNDU Campus",
    image: "/card_3.jpg?height=200&width=200",
    description: "Code, collaborate, create, innovate.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfcejiwAc-IPRyYM89LIDoXe-ZCTj8gWvoHj1KYLHaxukx14w/viewform?usp=sharing&ouid=100832964902746238927",
  },
 {
  id: 2,
  title: "Trip to Wonderland",
  date: "August 30, 2025",
  location: "Wonderland Water & Theme Park, Jalandhar",
  image: "/wonderland.jpg",
  description: "Only ₹1399/- for unlimited fun!",
  details: `📍 Location: Wonderland Water & Theme Park, Jalandhar
📅 Date: 30th August 2025 (Saturday)
🕖 Timing: 7:00 AM Pick up – 8:00 PM Drop off
🚐 Pickup & Drop Point: AGEC, Amritsar

🎟️ All This Fun at Just ₹1399/- Only !!
🔥 Early Spot Booking: Pay just ₹450 now

✅ Includes:
• AC Bus Ride
• Full-Day Access to Waterpark + Themepark
• Unlimited Rides & Slides
• Haunted House Thrill
• Rain Dance Party with Live DJ
• Club-Style DJ Bash
• Buffet Lunch (Veg & Non-Veg)
• On-Trip Coordinators
• ₹200 Trip Coupon for Next Adventure

💬 Book Now on WhatsApp: +91 60068 18177`,
  whatsappLink: "https://wa.me/916006818177?text=Hi%20I%20came%20here%20via%20Musaffir's%20website%20and,%20I%20want%20to%20book%20my%20seat%20for%20the%20Wonderland%20trip"
}
]

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Absolutely amazing experience! The Kashmir trip was beyond my expectations.",
    image: "/priya.jpg",
  },
  {
    name: "Rahul Gupta",
    location: "Delhi",
    rating: 5,
    comment: "Professional service and incredible destinations. Highly recommended!",
    image: "/rahul.jpg",
  },
  {
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 5,
    comment: "The Kedarnath journey was life-changing. Thank you Musaffir!",
    image: "/anjali.jpg",
  },
]

type EventType = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  registerLink?: string;
  details?: string;
  whatsappLink?: string;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/trips?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home_bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-orange-900/70 to-yellow-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore the World
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Embark on a journey where every destination tells a story. Let the world be your guide
          </motion.p>

          {/* Enhanced Search Bar */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-5 w-5" />
              <Input
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10 h-12 bg-white/90 backdrop-blur-sm border-2 border-amber-200 text-gray-800 focus:border-amber-500"
              />
            </div>
            <Button
              size="lg"
              onClick={handleSearch}
              className="h-12 px-8 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-2 border-amber-500"
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link href="/trips">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg border-2 border-amber-500"
              >
                <Plane className="mr-2 h-5 w-5" />
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

{/* Upcoming Events */}
      <section className="px-3 py-7 bg-gradient-to-b from-orange-50 to-yellow-50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
        Current Happenings and Updates
      </h2>
      <p className="text-xl text-amber-700 max-w-2xl mx-auto">
        Join exciting events and stay connected with the vibrant community
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {upcomingEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <Card className="overflow-hidden border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-amber-400">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
            </div>

            <CardContent className="p-6 bg-gradient-to-b from-white to-amber-50">
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                {event.title}
              </h3>
              <p className="text-amber-700 mb-4">{event.description}</p>

              <div className="flex gap-2">
                {/* WhatsApp Button - only show if whatsappLink exists */}
                {event.whatsappLink && (
                  <a
                    href={event.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      WhatsApp Now
                    </Button>
                  </a>
                )}

                {/* Register Button - only show if registerLink exists */}
                {event.registerLink && (
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Register Now
                    </Button>
                  </a>
                )}

                {/* View More Button - only show if there are details to show */}
                {event.details && (
                  <Button
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => setSelectedEvent(event)}
                  >
                    View More
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* Modal for View More */}
    {selectedEvent && (
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

            {/* Right Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {selectedEvent.title}
              </h2>
              <p className="whitespace-pre-line">{selectedEvent.details}</p>
              {selectedEvent.whatsappLink && (
                <a
                  href={selectedEvent.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
                    Book via WhatsApp
                  </Button>
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )}
  </div>
</section>
<div className="flex justify-center mb-6">
              <Image
                src="/home_event_bg.png"
                alt="Event illustration"
                width={350}
                height={350}
                className="opacity-60"
              />
            </div>
      {/* Featured Destinations */}
      <section className="py-10 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Handpicked Collections for You</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Discover our carefully curated travel experiences designed to create unforgettable memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-amber-400">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />

                    <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700 text-white">
                      {destination.duration}
                    </Badge>

                  {/*  {destination.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white">
                        {Math.round(
                          ((Number.parseInt(destination.originalPrice.replace(/[₹,]/g, "")) -
                            Number.parseInt(destination.price.replace(/[₹,]/g, ""))) /
                            Number.parseInt(destination.originalPrice.replace(/[₹,]/g, ""))) *
                            100,
                        )}
                        % OFF
                      </Badge> 
                    )}*/}

                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                        <span className="text-sm text-gray-300">({destination.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 bg-gradient-to-b from-white to-amber-50">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{destination.name}</h3>
                    <p className="text-amber-700 mb-4 text-sm">{destination.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {destination.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                          +{destination.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                       {/*   <span className="text-2xl font-bold text-amber-600">{destination.price}</span>
                          {destination.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{destination.originalPrice}</span>
                          )}*/}
                        </div>
                        <span className="text-lg text-amber-600">Coming Soon</span>
                      </div>
                  {/*    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfuaVHKTPrVyDdzykMZVL6jTPD1xdgiMDmlSRoq2sGi1mcACg/viewform?usp=sharing&ouid=100832964902746238927" target="_blank" rel="noopener noreferrer"> */}
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                        >
                          Book Now
                        </Button>
                      
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/trips">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              >
                Explore More Trips
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Calendar Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <Image
                src="/card_2.jpg"
                alt="Calendar illustration"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Plan Your Next Adventure Today!</h2>
              <p className="text-xl text-amber-700 mb-8">Explore more; life is an adventure.</p>

              <div className="space-y-4">
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-amber-700">Real experiences from real travelers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border-2 border-amber-200 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-amber-50">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-amber-300"
                    />
                    <div>
                      <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
                      <p className="text-amber-700">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-amber-800 italic">`&quot;`{testimonial.comment}`&quot;`</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of travelers who have discovered amazing destinations with us
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trips">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-8 py-4 text-lg border-2 border-amber-500"
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Explore Trips
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-amber-900 hover:bg-white hover:text-amber-900 px-8 py-4 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
