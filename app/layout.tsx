/* eslint-disable import/no-extraneous-dependencies */
import type { Metadata } from 'next';
import Head from 'next/head';

import ToastProvider from './provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Animania | Главная',
  description: 'The best anime site'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='ru'>
    <Head>
      <meta charSet='UTF-8' />
      <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
      <meta content='width=device-width, initial-scale=1.0' name='viewport' />
      <link rel='icon' href='/favicon.ico' sizes='32x32' />
    </Head>
    <body>
      <ToastProvider>{children}</ToastProvider>
    </body>
  </html>
);

export default RootLayout;
