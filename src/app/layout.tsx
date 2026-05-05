import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'kumpel* — Awareness Collective Berlin',
  description:
    'kumpel* is an independent awareness collective based in Berlin, supporting clubs, collectives, and organizers in creating safer, respectful, and prejudice-free spaces.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
