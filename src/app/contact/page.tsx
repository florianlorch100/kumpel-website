'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PageLayout } from '@/components';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SendState = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sendState, setSendState] = useState<SendState>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSendState('sending');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setSendState('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      const ejsErr = err as { status?: number; text?: string };
      console.error('[EmailJS] send failed:', ejsErr.status, ejsErr.text, err);
      setSendState('error');
    }
  }

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
                <h3 className="font-semibold text-gray-900 mb-3">
                  Who We Work With
                </h3>
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
                  <a
                    href="https://www.instagram.com/kumpel.kollektiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://chat.whatsapp.com/GjY7QbUFLKFJI32T765YwZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 hover:text-violet-700"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {sendState === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold text-lg mb-2">
                  Message sent!
                </p>
                <p className="text-green-700 text-sm mb-4">
                  We aim to respond within 1–2 business days.
                </p>
                <button
                  onClick={() => setSendState('idle')}
                  className="text-violet-600 hover:text-violet-700 text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {sendState === 'error' && (
                  <p className="text-red-600 text-sm">
                    Something went wrong — please try again or reach us on{' '}
                    <a
                      href="https://www.instagram.com/kumpel.kollektiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Instagram
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sendState === 'sending'}
                  className="w-full px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sendState === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}

            {sendState !== 'success' && (
              <p className="text-sm text-gray-500 mt-4">
                We aim to respond within 1–2 business days.
              </p>
            )}
          </section>
        </div>

        {/* Additional Info */}
        <section className="mt-12 p-8 bg-violet-50 rounded-lg border border-violet-100">
          <h2 className="text-2xl font-bold mb-4">Booking kumpel*</h2>
          <p className="text-gray-700 mb-4">
            When inquiring about a booking, please include:{' '}
            <strong>date</strong>, <strong>location</strong>, and{' '}
            <strong>expected number of guests</strong>. We will coordinate the
            schedule, responsibilities, and communication channels together and
            provide you with a tailored proposal.
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
