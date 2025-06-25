import { inter, interTight } from '@/assets/fonts';
import '@/assets/theme/globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { cn } from '@/lib/utils';

// metadata
export { DEFAULT_METADATA as metadata } from '@/constants/metadata';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body
        className={cn('font-inter antialiased', inter.variable, interTight.variable)}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
