import { FC, ReactNode } from 'react';
import { Footer, Navbar } from '../ui';

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
