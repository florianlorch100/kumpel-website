import Link from 'next/link';
import { PageLayout } from '@/components';

export default function About() {
  return (
    <PageLayout
      title="About kumpel*"
      description="An independent awareness collective based in Berlin"
    >
      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            kumpel* is an independent awareness collective based in Berlin. We
            support clubs, collectives, and organizers in creating safer, more
            respectful, and prejudice-free spaces — both preventively and
            interventively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We bring trained, experienced, and responsible people to your event
            who act as first points of contact, provide support and
            accompaniment, and connect individuals to counseling services. We
            bring competent awareness work into the club and event scene and
            create structures in which both guests and awareness teams can feel
            comfortable.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We want everyone at an event to feel safe, respected, and welcome.
            It is important to us that everyone present — guests and team alike
            — is emotionally and physically well.
          </p>
          <p className="text-lg font-semibold text-violet-700 mb-4">
            We take responsibility where others celebrate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With kumpel* by your side, you show a clear stance for respectful
            coexistence and against any form of harassment or exclusion.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our work spans three core areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-100">
              <h3 className="text-lg font-semibold mb-2">Prevention</h3>
              <p className="text-gray-600">
                Visibility, education, and communication — making events safer
                before anything happens.
              </p>
            </div>
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-100">
              <h3 className="text-lg font-semibold mb-2">Intervention</h3>
              <p className="text-gray-600">
                Listening, accompanying, supporting. On-site, approachable,
                and acting as your first point of contact.
              </p>
            </div>
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-100">
              <h3 className="text-lg font-semibold mb-2">Aftercare</h3>
              <p className="text-gray-600">
                Follow-up care for those affected and for the team. Awareness
                does not end with the last party.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our teams are trained, experienced, and act according to a shared
            guideline. An awareness team consists of awareness persons and an
            awareness lead who keeps an overview and serves as the point of
            contact for organizers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We plan one awareness person per 200 guests and aim for a 50%
            FLINTA* quota per team. Shifts last 3–4 hours to maintain attention
            and quality. We pay close attention to fair shift distribution and
            team aftercare to prevent overload.
          </p>
        </section>

        {/* Our Stance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Stance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="text-lg font-semibold mb-3 text-red-700">
                We stand against:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span> Violence of
                  any kind
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span> Sexism
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  Discrimination
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span> Racism
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span> Hostility
                  toward queer people
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-lg font-semibold mb-3 text-green-700">
                We stand for:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span> Support
                  for those affected: listening, accompanying, supporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Prevention: visibility, education, and communication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Mediation: connecting to counseling centers and resources
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span> A
                  prejudice-free space where everyone feels safe
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-violet-50 p-8 rounded-lg text-center border border-violet-100">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-6">
            Want to book kumpel* for your event, or get involved as a team
            member?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </PageLayout>
  );
}
