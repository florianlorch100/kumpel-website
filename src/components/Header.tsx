import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/static/Logo.png"
              alt="Kumpel Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-bold text-lg hidden sm:inline">kumpel*</span>
          </Link>
        </div>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-violet-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/manifest"
              className="hover:text-violet-600 transition-colors"
            >
              Manifest
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-violet-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-violet-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
