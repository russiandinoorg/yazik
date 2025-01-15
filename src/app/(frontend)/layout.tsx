import classnames from 'classnames';

import { jost, actayWide } from '@/styles/fonts';
import '../../styles/globals.scss';

export const metadata = {
  title: 'Издательство Язык',
  openGraph: {
    images: ['/images/og-image.png'],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html suppressHydrationWarning lang='ru'>
    <head>
      <link href='/favicon.ico' rel='icon' sizes='32x32' />
      <link href='/favicon.svg' rel='icon' type='image/svg+xml' />
    </head>
    <body className={classnames(jost.variable, actayWide.variable)}>{children}</body>
  </html>
);

export default RootLayout;
