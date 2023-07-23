/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { Toaster } from 'react-hot-toast';

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => (
  <>
    {children}
    <Toaster position='bottom-right' reverseOrder={false} />
  </>
);

export default ToastProvider;
