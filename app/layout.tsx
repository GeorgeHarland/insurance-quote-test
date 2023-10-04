import DefaultTemplate from '@/templates/DefaultTemplate';
import { GlobalStyle } from './../styles';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/components/styledComponentsRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Compare Quotes',
  description: 'Insurance Quote Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={inter.className}>
        <StyledComponentsRegistry><DefaultTemplate>{children}</DefaultTemplate></StyledComponentsRegistry>
      </body>
    </html>
  );
}
