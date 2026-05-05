import Link from 'next/link';
import { Header, Footer } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

      {/* Hero Section */}
      <section
        className="relative text-center py-24 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/static/backgrounds/1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-violet-900/70" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4">kumpel*</h1>
          <p className="text-2xl text-violet-200 mb-6 font-medium">
            Awareness collective for clubs, events &amp; collectives
          </p>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-lg">
            We are an independent awareness collective based in Berlin — supporting
            clubs, collectives, and organizers in creating safer, more respectful,
            and prejudice-free spaces, both preventively and interventively.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Book kumpel*
            </Link>
          </div>
        </div>
      </section>

      {/* Link Tree Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How can we help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/about"
            className="block p-6 border-2 border-gray-200 rounded-lg hover:border-violet-500 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              🎉 For Event Participants
            </h3>
            <p className="text-gray-600">
              Feel unsafe or uncomfortable at an event? We are approachable,
              supportive, and on your side — mentally and physically.
            </p>
            <span className="text-violet-600 font-medium mt-4 inline-block">
              Learn more →
            </span>
          </Link>

          <Link
            href="/contact"
            className="block p-6 border-2 border-gray-200 rounded-lg hover:border-violet-500 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              🏛️ For Organizers &amp; Venues
            </h3>
            <p className="text-gray-600">
              Book kumpel* for your event. We implement awareness structures,
              take on on-site shifts, and create a clear atmosphere of safety.
            </p>
            <span className="text-violet-600 font-medium mt-4 inline-block">
              Book us →
            </span>
          </Link>

          <Link
            href="/manifest"
            className="block p-6 border-2 border-gray-200 rounded-lg hover:border-violet-500 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              📄 Our Manifest
            </h3>
            <p className="text-gray-600">
              Read our principles, values, and vision for awareness work in the
              club and event scene. Available in English and German.
            </p>
            <span className="text-violet-600 font-medium mt-4 inline-block">
              Read manifest →
            </span>
          </Link>

          <Link
            href="/contact"
            className="block p-6 border-2 border-gray-200 rounded-lg hover:border-violet-500 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              🤝 Want to Join?
            </h3>
            <p className="text-gray-600">
              Interested in awareness work in the club and cultural scene? We
              share knowledge, structures, and entry points for newcomers.
            </p>
            <span className="text-violet-600 font-medium mt-4 inline-block">
              Get involved →
            </span>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
