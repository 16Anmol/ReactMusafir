"use client"
import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Palette, Heart, Globe, Leaf, Scale, BookOpen, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"

import Image from "next/image"
import Link from "next/link"

const participantTypes = [
  "Students & young artists",
  "Professional artists",
  "Art enthusiasts from anywhere in India",
  "All age groups are welcome",
]

const themeOptions = [
  { icon: Heart, label: "Mental health", color: "text-pink-600" },
  { icon: Leaf, label: "Environmental protection", color: "text-green-600" },
  { icon: Scale, label: "Gender equality", color: "text-purple-600" },
  { icon: BookOpen, label: "Education for all", color: "text-blue-600" },
  { icon: Lightbulb, label: "Social justice", color: "text-amber-600" },
]

const benefits = [
  "Showcase your talent on a national platform",
  "Be a part of a social impact initiative",
  "Gain recognition and certificates",
  "Let your art make a difference",
]

export default function KalaYatraPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-900/85 to-orange-900/80" />
          <Image src="/image.png" alt="Kala Yatra Background" fill className="object-cover opacity-30" priority />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <Palette className="h-20 w-20 mx-auto text-orange-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Kala Yatra 2.0
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-4 text-gray-100 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A Nationwide Online Art Movement for Social Change
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Kala Yatra 2.0 is a pan-India online art competition that brings together artists, students, and creative
            minds from across the country to express, reflect, and raise awareness about pressing social issues through
            art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-10 py-6 text-lg border-2 border-orange-400"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Art Quote Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-purple-900 italic">
            &quot;Art has always been a powerful voice of change. Kala Yatra 2.0 aims to transform creativity into
            conversation — and conversation into action.&quot;
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Globe className="h-16 w-16 mx-auto mb-4 text-orange-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Our Mission</h2>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed">
              To highlight critical social issues and inspire awareness, empathy, and responsibility through artistic
              expression. We believe that every artwork tells a story, and every story has the power to influence minds
              and spark change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="h-16 w-16 mx-auto mb-4 text-pink-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Who Can Participate?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            {participantTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-2 border-pink-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                    <p className="text-lg text-purple-800 font-medium">{type}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-2xl font-semibold text-purple-900 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            No physical boundaries. No restrictions. Just creativity with purpose.
          </motion.p>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="h-16 w-16 mx-auto mb-4 text-orange-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Theme</h2>
            <p className="text-xl text-purple-700 mb-8">
              Participants are invited to create artwork based on social issues affecting society, such as:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {themeOptions.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 border-2 border-purple-200 bg-white shadow-lg hover:shadow-xl transition-all">
                  <div className="text-center">
                    <theme.icon className={`h-12 w-12 mx-auto mb-4 ${theme.color}`} />
                    <p className="text-lg font-semibold text-purple-900">{theme.label}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-purple-700 italic">(Exact theme to be announced)</p>
          </motion.div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Competition Format</h2>
            <p className="text-xl text-purple-700 mb-8">100% Online Competition</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Digital submission of artworks",
              "Easy registration and upload process",
              "Fair and transparent evaluation",
              "No geographical constraints",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg text-purple-900 font-medium pt-1">{feature}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Award className="h-16 w-16 mx-auto mb-4 text-pink-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Why Participate?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50 shadow-lg hover:shadow-2xl transition-all h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg text-purple-900 font-semibold">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Globe className="h-20 w-20 mx-auto mb-6 text-orange-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Movement</h2>
            <p className="text-2xl mb-4 text-gray-100">
              Kala Yatra 2.0 is not just a competition — it is a journey of creativity, awareness, and social
              responsibility.
            </p>
            <p className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
              Let your art speak. Let your voice be seen.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 px-12 py-6 text-xl border-2 border-orange-400"
            >
              Register Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-900 hover:bg-purple-100 px-8 bg-transparent"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

     
    </div>
  )
}
