import { PageLayout } from '@/components';

const manifestSections = [
  [
    '1. Who we are',
    'An independent awareness collective based in Berlin, supporting clubs, collectives, and organizers.',
  ],
  [
    '2. Our mission',
    'Everyone at an event should feel safe, respected, and welcome — guests and team alike.',
  ],
  [
    '3. Why kumpel* matters',
    'We create awareness and protective spaces where they are needed: in clubs, at festivals, and at events of all kinds.',
  ],
  [
    '4. How we work',
    'Structured, professional teams — trained, experienced, and acting according to a shared guideline.',
  ],
  [
    '5. Drug prevention & education',
    'We see drug education as part of prevention — awareness and information, not control.',
  ],
  [
    '6. Aftercare & sustainability',
    'Awareness does not end with the last party. We offer follow-up care for those affected and for the team.',
  ],
];

const principles = [
  ['Support for those affected', 'Listening, accompanying, supporting — being present and on your side.'],
  ['Prevention', 'Visibility, education, and communication — making spaces safer before incidents occur.'],
  ['Mediation', 'Connecting individuals to counseling centers, support services, and resources as needed.'],
  ['Responsibility', 'Trained, experienced, and reflective staff — we act with care and professionalism.'],
  ['Aftercare', 'Follow-up care for those affected and for the team — sustainability is part of our work.'],
  ['Drug Education', 'Awareness and information about risks, not control — celebrating safely together.'],
];

export default function Manifest() {
  return (
    <PageLayout
      title="Our Manifest"
      description="The principles, values, and vision of kumpel*"
    >
      <main className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          This manifest describes who we are, what we stand for, and how we
          work. It outlines our approach to awareness work and the values we
          bring to every event. Available for download in English and German.
        </p>

        {/* Manifest Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Read the Manifest</h2>
          <div className="grid gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Manifest — English
                </h3>
                <a
                  href="/assets/Manifest_EN.pdf"
                  download
                  className="inline-block px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors"
                >
                  Download PDF
                </a>
              </div>
              <iframe
                src="/assets/Manifest_EN.pdf"
                title="Kumpel Manifest — English"
                className="w-full h-[800px] rounded border border-gray-200"
              />
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Manifest — Deutsch
                </h3>
                <a
                  href="/assets/Manifest_DE.pdf"
                  download
                  className="inline-block px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors"
                >
                  Download PDF
                </a>
              </div>
              <iframe
                src="/assets/Manifest_DE.pdf"
                title="Kumpel Manifest — Deutsch"
                className="w-full h-[800px] rounded border border-gray-200"
              />
            </div>
          </div>
        </section>

        {/* What the Manifest Contains */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What the Manifest Contains</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            kumpel* is an awareness collective that works both preventively and
            interventively to ensure everyone at an event feels safe. Our
            manifest outlines our commitment to creating prejudice-free spaces
            and the principles we uphold in every engagement.
          </p>
          <div className="space-y-4">
            {manifestSections.map(([title, desc]) => (
              <div key={title} className="border-l-4 border-violet-400 pl-4">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Principles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map(([title, desc]) => (
              <div key={title} className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-semibold text-violet-800 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
