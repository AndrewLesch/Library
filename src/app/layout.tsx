'use client';

import { usePathname } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { UserProvider } from '../contexts/userContext';

export const metadata = {
  title: 'Books',
  description: 'Lets read some books',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {pathname !== '/login' && <Header></Header>}
          {children}
          {pathname !== '/login' && <Footer></Footer>}
        </UserProvider>
      </body>
    </html>
  );
}
