import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
    {children}
    </html>
  )
}