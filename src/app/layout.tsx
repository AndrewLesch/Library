'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'Books',
  description: 'Lets read some books',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
