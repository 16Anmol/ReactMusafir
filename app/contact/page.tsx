"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 90AAA", "+91 90AAA"],
    description: "Call us anytime for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@musafir.com", "support@musafir.com"],
    description: "Send us an email and we&apos;ll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Amritsar, Punjab", "India - 143001"],
    description: "Visit our office for personalized travel planning",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: 10:00 AM - 4:00 PM"],
    description: "We&apos;re here to help during business hours",
  },
]

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/anmol_.16/",
    description: "Follow us for travel inspiration",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.instagram.com/himanshu._dhir/",
    description: "Join our travel community",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://www.instagram.com/danish.goswami_40613/",
    description: "Chat with us instantly",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with your backend API here
    alert("Thank you for your message! We&apos;ll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const openChatbot = () => {
    window.open("/chatbot", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Contact Hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in touch with us for personalized travel planning and support
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">We&apos;re here to help you plan your perfect journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 h-full border-2 border-amber-200 hover:border-amber-400 transition-colors bg-gradient-to-b from-white to-amber-50">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-amber-900 mb-3">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-amber-700 font-medium mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-amber-600 text-sm mt-2">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-amber-200 bg-gradient-to-b from-white to-amber-50">
                <h3 className="text-3xl font-bold text-amber-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-2 border-amber-200 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="border-2 border-amber-200 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-2 border-amber-200 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What&apos;s this about?"
                      className="border-2 border-amber-200 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your travel plans or questions..."
                      rows={5}
                      required
                      className="border-2 border-amber-200 focus:border-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-2 border-amber-500"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-amber-200 bg-gradient-to-b from-white to-amber-50 h-full">
                <h3 className="text-3xl font-bold text-amber-900 mb-6">Find Us</h3>
                <div className="h-96 rounded-lg overflow-hidden border-2 border-amber-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8160932314896!2d74.8723!3d31.6340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd9b4b6c6c6c6c!2sAmritsar%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Musafir Location - Amritsar, Punjab"
                  />
                </div>
                <div className="mt-6 p-4 bg-amber-100 rounded-lg">
                  <div className="flex items-center text-amber-800">
                    <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                    <div>
                      <p className="font-medium">Musafir Travel Office</p>
                      <p className="text-sm">Amritsar, Punjab, India</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Connect With Us</h3>
            <p className="text-xl text-amber-700">Follow us on social media for travel inspiration and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="p-6 text-center border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 bg-gradient-to-b from-white to-amber-50 hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-amber-900 mb-2">{social.name}</h4>
                        <p className="text-amber-700">{social.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Chat with Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Need Instant Help?</h3>
            <p className="text-xl text-amber-700 mb-8">
              Chat with our AI assistant for quick answers to your travel questions
            </p>
            <Button
              onClick={openChatbot}
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-2 border-amber-500 px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chat
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
