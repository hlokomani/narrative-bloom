import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Users, Sprout, Building2, MapPin, Monitor } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-accent/30">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-plum mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Therapy isn't about fixing you — it's about making space for what's
            asking to be seen, heard, or held.
          </p>
          <p className="text-lg text-gray-600">
            At Narrative Bloom, I offer support that's thoughtful,
            collaborative, and shaped by who you are.
          </p>
        </div>
      </section>

      {/* Services Grid - More Visual */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Individual Therapy */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-light rounded-t-2xl"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-plum mb-4">
                  Individual Therapy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For those doing the deep, often quiet work of becoming.
                  Support for navigating anxiety, burnout, identity
                  exploration, trauma, relationship challenges, and transitions.
                </p>
              </div>
            </div>

            {/* Couples Therapy */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-secondary/70 rounded-t-2xl"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Users className="w-10 h-10 text-plum" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-plum mb-4">
                  Couples Therapy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Couples navigating connection, conflict and everything in
                  between. A space to reconnect, communicate, and navigate
                  challenges with compassion and honesty.
                </p>
              </div>
            </div>

            {/* Group Sessions */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-light rounded-t-2xl"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Sprout className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-plum mb-4">
                  Group Sessions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Facilitated spaces where we slow down together, exploring
                  themes like burnout, self-worth, identity, mindfulness, and
                  collective healing in reflective, restorative environments.
                </p>
              </div>
            </div>

            {/* Corporate Wellness */}
            <div className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-secondary/70 rounded-t-2xl"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Building2 className="w-10 h-10 text-plum" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-plum mb-4">
                  Corporate Wellness
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Practical, grounded mental health sessions for teams and
                  organizations. Making space for real conversations about
                  stress, burnout, boundaries, and emotional wellbeing.
                </p>
              </div>
            </div>
          </div>

          {/* Areas of Interest - Flowing Text Style */}
          <div className="bg-white rounded-2xl p-12 mb-16 shadow-lg">
            <h2 className="text-4xl font-serif font-bold text-plum mb-6 text-center">
              Areas of Interest
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                I work with a diverse range of experiences and identities. My
                practice is informed by ongoing learning and experience in{" "}
                <span className="text-primary font-semibold">trauma and stress counselling</span>,{" "}
                <span className="text-primary font-semibold">life changes and transitions</span>,{" "}
                <span className="text-primary font-semibold">anxiety</span> and{" "}
                <span className="text-primary font-semibold">depression</span>. I also work with{" "}
                <span className="text-primary font-semibold">couples and families</span>,{" "}
                <span className="text-primary font-semibold">athletes and teams</span>, as well as
                supporting individuals exploring{" "}
                <span className="text-primary font-semibold">gender and sexuality</span>.
              </p>
            </div>
          </div>

          {/* Session Format - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
              <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-semibold text-plum mb-3">
                Online Sessions
              </h3>
              <p className="text-gray-700">
                Connect from the comfort of your own space via secure video
                conferencing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-plum mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-semibold text-plum mb-3">
                In-Person Sessions
              </h3>
              <p className="text-gray-700">
                Face-to-face therapy in Bryanston, Johannesburg, by
                appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl mb-8 text-accent/90 max-w-2xl mx-auto">
            Let's explore how I can support you on your journey. Reach out to
            discuss your needs or book an initial consultation.
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