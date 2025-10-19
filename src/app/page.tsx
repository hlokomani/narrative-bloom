"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Building2, Sprout } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-accent/30">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-accent/30 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div 
              className={`text-center lg:text-left order-2 lg:order-1 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-plum mb-6 leading-tight">
                Supporting Emotional Health in People, Communities & Teams
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Welcome to <strong className="text-plum">Narrative Bloom Psychology</strong> — a space
                where your story is seen, heard, and honoured. Whether you're
                navigating transition, processing emotional wounds, or simply trying
                to make sense of it all.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Grounded in empathy, presence, and professional integrity, I offer
                therapeutic support that holds space for your becoming — one
                conversation at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 transform hover:scale-105 transition-transform duration-200"
                >
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Photo Card */}
            <div 
              className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Floating card with shadow */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-2 transform hover:scale-105 transition-transform duration-500">
                  <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-xl overflow-hidden">
                    <Image
                      src="/mbali-hero.jpg"
                      alt="Mbalentle Feliti - Counselling Psychologist"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl -z-10 animate-pulse"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-sage/20 rounded-full blur-2xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-plum mb-4">
              How I Can Support You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtful, collaborative support shaped by who you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-primary group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-plum mb-3">
                  Individual Therapy
                </h3>
                <p className="text-gray-600 text-sm">
                  Support for anxiety, burnout, identity exploration, trauma,
                  and life transitions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-secondary group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Users className="w-6 h-6 text-plum" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-plum mb-3">
                  Couples Therapy
                </h3>
                <p className="text-gray-600 text-sm">
                  Navigate connection, conflict, and communication with
                  compassion and honesty.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-primary group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-plum mb-3">
                  Group Sessions
                </h3>
                <p className="text-gray-600 text-sm">
                  Facilitated spaces exploring burnout, self-worth, identity,
                  and collective healing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 border-t-4 border-secondary group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Building2 className="w-6 h-6 text-plum" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-plum mb-3">
                  Corporate Wellness
                </h3>
                <p className="text-gray-600 text-sm">
                  Mental health workshops and sessions designed for teams and
                  organizations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl mb-8 text-accent/90">
            Taking the first step can feel daunting — I honour that. Let's
            connect and explore how I can support you.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 py-6"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}