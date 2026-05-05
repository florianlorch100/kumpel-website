import Link from 'next/link';
import { PageLayout } from '@/components';

export default function Contact() {
  return (
    <PageLayout
      title="Contact kumpel*"
      description="Book us for your event or get in touch about collaboration"
    >
      <main className="max-w-4xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="bg-violet-50 p-4 rounded-lg border border-violet-100">
                <p className="text-gray-700 leading-relaxed">
                  We are based in <strong>Berlin, Germany</strong>. Use the
                  contact form to reach us — whether you want to book kumpel*
                  for an event, ask about our work, or get involved as a team
                  member.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Berlin, Germany</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Who We Work With</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 font-bold mt-0.5">→</span>
                    <span>
                      <strong>Organizers &amp; Venues</strong> — book awareness
                      teams for your event
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 font-bold mt-0.5">→</span>
                    <span>
                      <strong>Event Participants</strong> — reach out if you
                      need support or want to learn more
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500 font-bold mt-0.5">→</span>
                    <span>
                      <strong>Interested Helpers</strong> — join the kumpel*
                      team and get involved in awareness work
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Social Media
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-violet-600 hover:text-violet-700">
                    Instagram
                  </a>
                  <a href="#" className="text-violet-600 hover:text-violet-700">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              We aim to respond within 1–2 business days.
            </p>
          </section>
        </div>

        {/* Additional Info */}
        <section className="mt-12 p-8 bg-violet-50 rounded-lg border border-violet-100">
          <h2 className="text-2xl font-bold mb-4">Booking kumpel*</h2>
          <p className="text-gray-700 mb-4">
            When inquiring about a booking, please include: <strong>date</strong>,{' '}
            <strong>location</strong>, and <strong>expected number of guests</strong>. We will
            coordinate the schedule, responsibilities, and communication
            channels together and provide you with a tailored proposal.
          </p>
          <p className="text-gray-600">
            We work exclusively with partners who reject discrimination and
            promote diversity. All guests should feel welcome and protected.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
