'use client';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
];
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === 'system' ? systemTheme : theme;
  const [navBar, setNavBar] = useState(false);

  const handleDark = () => {
    setTheme('dark');
  };

  const handleLight = () => {
    setTheme('light');
  };

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-3 md:block">
            <h2 className="text-2xl font-bold">Evan Loo</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-5">
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>;
          })}
          {currTheme === 'dark' ? (
            <button
              onClick={handleLight}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine />
            </button>
          ) : (
            <button
              onClick={handleDark}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
