"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Install with `npm install clsx`

// Reusable NavLink Component
export interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
  activeClassName?: string;
  className?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName = "font-bold text-[#FFB400]", // Updated to match brand color
  onClick,
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "transition-colors hover:text-[#FFB400]", // smooth hover effect with brand color
        className,
        { [activeClassName]: isActive }
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

// Navigation bar
const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { href: "/service", label: "Services" },
    { href: "/references", label: "References" },
    { href: "/mission", label: "Missions" },
    { href: "/temoignages", label: "Temoignages" },
    { href: "/clients", label: "Clients" },
    { href: "/partenaire", label: "Partenaires" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/nous-joindre", label: "Nous Joindre" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 relative">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 truncate pr-4">
        Construction Company Landing
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-4 xl:gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                className="font-medium text-sm xl:text-base whitespace-nowrap"
                href={href}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <ul className="flex flex-col py-4">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  className="font-medium px-4 sm:px-6 py-3 block hover:bg-gray-50 text-sm"
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
