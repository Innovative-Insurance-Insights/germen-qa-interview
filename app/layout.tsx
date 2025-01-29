import './globals.css';

import { GeistSans } from 'geist/font/sans';
import {ReactNode} from "react";

let title = 'Germen QA Test';

export const metadata = {
  title,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
