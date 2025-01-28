import React from 'react';
import { NavbarMenu } from '../../mockdata/data';
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <FaDumbbell />
            <p>Fit</p>
            <p className="text-secondary">Nation</p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex gap-8 text-lg font-medium items-center text-slate-800">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-secondary font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icon Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" aria-label="Toggle Menu" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;

