'use client';

import { useTheme } from 'next-themes';

import HeaderTop from './header/HeaderTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  setTheme(resolvedTheme!);

  return (
    <>
      <div className="flex h-dvh flex-col bg-bgDefault">
        <HeaderTop />
        <main className="flex-1 transition-all duration-300">{children}</main>
      </div>
    </>
  );
};

export default Layout;
