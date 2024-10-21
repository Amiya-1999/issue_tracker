import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex border-b-2 border-sky-700 mb-5 px-7 h-14 items-center justify-between">
      <Link href="/">
        <FaBug className="text-xl" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Link href="/logout">
        <RiLogoutCircleLine title="LogOut" className="text-xl" />
      </Link>
    </nav>
  );
};

export default NavBar;
