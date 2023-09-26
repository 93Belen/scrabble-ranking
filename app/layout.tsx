import './globals.css'

export const metadata = {
  title: 'Scrabble',
  description: 'Para toda la familia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
