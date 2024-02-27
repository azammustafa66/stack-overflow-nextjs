import React from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { Providers } from '@/redux/provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'Get help with your coding problems. Find answers, ask questions, and connect with other developers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: 'primary-gradient',
            footerActionLink: 'primary-text-gradient hover:text-primary-500',
          },
        }}
      >
        <html lang='en'>
          <body>{children}</body>
        </html>
      </ClerkProvider>
    </Providers>
  );
}
