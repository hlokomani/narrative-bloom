import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Users, Sprout, Building2, MapPin, Monitor } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-accent/30 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Therapy isn't about fixing you — it's about making space for what's
            asking to be seen, heard, or held.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            At Narrative Bloom, I offer support that's thoughtful,
            collaborative, and shaped by who you are. Whether you're looking for
            a space to process something specific or wanting to deepen your
            self-understanding over time, we'll find a pace and approach that
            feels right for you.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8 mb-16">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                    Individual Therapy
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    For those doing the deep, often quiet work of becoming.
                    Support for those navigating anxiety, burnout, identity
                    exploration, trauma, relationship challenges, or
                    transitions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                    Couples Therapy
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Couples navigating connection, conflict and everything in
                    between. A space to reconnect, communicate, and navigate
                    challenges with compassion and honesty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Sprout className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                    Group Sessions
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Facilitated spaces (in-person or online) where we slow down
                    together, exploring themes like burnout, self-worth,
                    identity, mindfulness, and collective healing. These spaces
                    are reflective, restorative, and rooted in the realities
                    we're holding — whether it's work stress, intergenerational
                    pain, or just the overwhelm of life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                    Corporate Wellness & Psycho-educational Workshops
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    For organisations wanting to put people first. Practical,
                    grounded mental health sessions designed for teams, leaders,
                    and staff wellness initiatives (in person or online).
                    Whether it's a webinar, talk, or group session, these
                    offerings make space for real conversations about stress,
                    burnout, boundaries, and emotional wellbeing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Session Format Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
            Session Format
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Online Sessions
                </h3>
                <p className="text-gray-600">
                  Connect from the comfort of your own space via secure video
                  conferencing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  In-Person Sessions
                </h3>
                <p className="text-gray-600">
                  Face-to-face therapy in Bryanston, Johannesburg, by
                  appointment.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 italic">
            Flexible options available depending on your needs.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's explore how I can support you on your journey. Reach out to
            discuss your needs or book an initial consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}