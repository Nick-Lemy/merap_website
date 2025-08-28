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
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName = "font-bold text-blue-500", // Default active styles
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "transition-colors hover:underline", // smooth hover effect
        className,
        { [activeClassName]: isActive }
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

// Navigation bar
const NavBar: React.FC = () => {
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

  return (
    <header className="container mx-auto flex justify-between items-center px-6 py-6">
      <h1 className="text-2xl font-semibold">Construction Company Landing</h1>
      <nav>
        <ul className="flex gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <NavLink className="font-medium" href={href}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
