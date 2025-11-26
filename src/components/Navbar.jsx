import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    // nav section
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-slate-950/70">
      {/* container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* navbar */}
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* logo & branding */}
          <Link
            to="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Endo Illustrated"
              className="w-7 h-7 sm:w-9 sm:h-9"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-medium tracking-wider">
              <span className="text-white">Endo</span>
              <span className="text-pink-400">illustrated</span>
            </span>
          </Link>

          {/* nav links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#projects"
              className="text-gray-300 hover:text-pink-300 text-sm lg:text-base"
            >
              Projects
            </a>
            <a
              href="#process"
              className="text-gray-300 hover:text-pink-300 text-sm lg:text-base"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-pink-300 text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-pink-300 text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>

          {/* Menu & X icons for mobile screen */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen(prev => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* menu in mobile view */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bbackdrop-blur-lg bg-slate-950/70border-t border-b border-pink-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#projects"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-pink-200 text-sm lg:text-base"
            >
              Projects
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-pink-200 text-sm lg:text-base"
            >
              Process
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-pink-200 text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-pink-200 text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
