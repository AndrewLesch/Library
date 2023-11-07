'use client';

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
      <body>{children}</body>
    </html>
  );
}
