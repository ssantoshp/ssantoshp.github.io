import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Santosh Passoubady | @ssantoshp',
  description: 'Personal website of Santosh Passoubady (@ssantoshp)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    {children}
    </html>
  )
}