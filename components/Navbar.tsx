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

  const handleNavBar = () => {
    setNavBar(!navBar);
  }

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold tracking-wide">Evan Loo</h2>
            </div>
            <div className="md:hidden">
              <button onClick={handleNavBar}>{navBar ? <IoMdClose /> : <IoMdMenu />}</button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navBar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-6 md:flex md:space-x-5 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return <Link
                key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={handleNavBar}>
                {item.label}
                </Link>;
              })}
              {currTheme === 'dark' ? (
                <button
                  onClick={handleLight}
                  className="bg-slate-100 p-1 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={handleDark}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
