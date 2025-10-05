import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <div className="bg-accent/30 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-plum mb-4">
            About Me
          </h1>
          <p className="text-2xl font-serif text-secondary italic">
            Holding space for healing, honesty, and the becoming.
          </p>
        </div>

        {/* Photo and Intro Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="relative bg-accent rounded-2xl shadow-lg p-2">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/mbali-about.jpg"
                    alt="Mbalentle Feliti - Counselling Psychologist"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative corner accent */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-secondary/40 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hi! My name is <strong>Mbalentle Feliti</strong> (Mbali for short
                x). I am a qualified Counselling Psychologist who works with
                people navigating real-life complexity — grief that lingers,
                burnout that sneaks in, relationships that feel more distant than
                they used to, and identities that are shifting quietly (or not so
                quietly).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether it's in one-on-one therapy, couples work, or group and
                corporate wellness spaces, I show up with curiosity & care. My
                work is deeply human. I don't believe in quick fixes or
                performative self-care. I believe in sitting with what's hard,
                gently, and walking with people as they do the slow, sacred work
                of becoming.
              </p>
            </div>
          </div>

          {/* Rest of bio */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I also believe humour helps — so yes, therapy can involve deep
              work and moments of lightness along the way.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Faith shapes the way I hold space, not with pressure or
              performance, but with presence, gentleness, and a sense of the
              sacred. I meet each person where they are, honouring the courage
              it takes to let someone into your story.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I founded Narrative Bloom as a space where your healing can unfold
              with gentleness and dignity — a space where all parts of your
              story are welcome.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              So whether you're an individual trying to find your way, a couple
              navigating disconnection, or a team that's ready for meaningful
              wellness work — I'd love to connect.
            </p>

            <p className="text-xl text-plum font-medium italic text-center my-8">
              Because healing doesn't have to be heavy, but it does have to be
              honest. 🪴
            </p>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-plum">
                  Qualifications
                </h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>
                    MA Community-based Counselling Psychology (WITS)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>BA (Hon) Psychology (UJ)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span>BA Psychology & International Relations (UP)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-plum">
                  Registration
                </h2>
              </div>
              <div className="text-gray-700">
                <p className="font-semibold text-plum mb-2">
                  HPCSA Registration
                </p>
                <p className="text-lg">PS 016 4445</p>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Practice number pending
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}