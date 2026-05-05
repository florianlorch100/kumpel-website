import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {title && (
          <div className="bg-gradient-to-r from-violet-50 to-white py-8 border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
              {description && (
                <p className="text-lg text-gray-600">{description}</p>
              )}
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
