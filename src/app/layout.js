import React from 'react';
import {
  Work_Sans,
  Spline_Sans_Mono,
} from 'next/font/google';
import clsx from 'clsx';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';
import {cookies} from "next/headers"

export const metadata = {
  title: 'Bits & Bytes',
  description:"A wonderful blog about JavaScript"
};

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});


function RootLayout({ children }) {
  // TODO: Dynamic theme depending on user preference
  // const theme = 'light';
  const savedTheme = cookies().get("color-theme");
  const initialTheme = savedTheme?.value ?? "light";
 

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={savedTheme}
      style={initialTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <Header initialTheme={initialTheme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
