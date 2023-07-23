/* eslint-disable react/jsx-no-useless-fragment */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animania | Авторизация'
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default AuthLayout;
