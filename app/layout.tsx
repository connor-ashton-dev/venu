import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'Venu',
  description: 'Find your dream wedding venu, today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-row w-full px-4 lg:px-16 py-4 shadow-md fixed bg-white items-center z-40 justify-between">
          <p className="text-2xl">Venu</p>

          <div className="flex flex-row gap-4 lg:gap-8">
            <a href="#about">About</a>
            <a href="#form">Sign up</a>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
