import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Santosh Passoubady',
  description: 'Personal website of Santosh Passoubady (@ssantoshp)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html>
      <Script 
        src="https://code.iconify.design/3/3.1.0/iconify.min.js"
      />
      <body>{children}</body>
    </html>
    </>
  )
}