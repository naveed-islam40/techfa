import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation().pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const pages = ["Home", "Services", "About us"];

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <div className="bg-[#F5F8F9]">
      <nav className="max-w-8xl mx-auto h-[80px] md:h-[110px] flex items-center justify-between px-4 sm:px-14 relative">
        {/* Desktop Menu */}
        <ul className="items-center gap-4 hidden sm:flex">
          {pages.map((page) => {
            const isActive =
              (path === "/" && page === "Home") ||
              path?.trim() === `/${page.toLowerCase()?.trim()}`;
            return (
              <li
                key={page}
                className={
                  isActive
                    ? "text-[#0B363C] font-bold text-lg"
                    : "text-[#0B363C] font-medium text-lg"
                }
              >
                <Link to={`/${page.toLowerCase()}`}>{page}</Link>
              </li>
            );
          })}
        </ul>

        {/* Logo */}
        <img
          src="/img/logo.png"
          alt="Logo"
          className="w-[100px] sm:w-[200px]"
        />

        {/* Desktop Button */}
        <button className="hidden sm:block bg-[#0B363C] text-[#F5F8F9] px-10 py-3 cursor-pointer">
          Get started
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="block sm:hidden z-20">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="absolute top-[110px] left-0 w-full bg-[#F5F8F9] px-4 py-6 flex flex-col gap-4 sm:hidden shadow-md z-50">
            {pages.map((page) => {
              const isActive =
                (path === "/" && page === "Home") ||
                path?.trim() === `/${page.toLowerCase()?.trim()}`;
              return (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  className={`${
                    isActive ? "font-bold" : "font-medium"
                  } text-[#0B363C] text-lg`}
                  onClick={() => setMobileOpen(false)}
                >
                  {page}
                </Link>
              );
            })}
            <button className="bg-[#0B363C] text-[#F5F8F9] px-6 py-2 mt-4 rounded">
              Get started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
