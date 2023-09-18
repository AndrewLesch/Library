import Header from "@/components/Header/Header"

export const metadata = {
  title: 'Books',
  description: 'Lets read some books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
