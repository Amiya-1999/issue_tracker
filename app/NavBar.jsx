'use client';

import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex border-b-2 border-sky-700 mb-5 px-7 h-14 items-center justify-between">
      <div className="flex space-x-10">
        <Link href="/" className="mt-1">
          <FaBug className="text-xl" />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              className={classNames({
                'text-zinc-900 border-b-2 border-sky-700': currentPath === link.href,
                'text-zinc-500': currentPath !== link.href,
                'hover:text-zinc-900 transition-colors text-lg': true
              })}
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Link href="/logout">
          <RiLogoutCircleLine title="LogOut" className="text-xl" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
