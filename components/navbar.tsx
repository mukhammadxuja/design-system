import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Switch from "@/components/ui/switch  ";

function Navbar() {
  const pathname = usePathname();
  const navData = [
    {
      id: 1,
      title: "Components",
      path: "/components",
    },
  ];

  return (
    <nav className="nav w-full px-4 md:px-0 left-1/2 -translate-x-1/2 py-2 md:py-4 fixed top-0 z-50 bg-background backdrop-blur-sm bg-opacity-50">
      <div className="mx-auto max-w-[896px] flex items-center justify-between">
        <div className="space-y-4 md:space-y-6">
          <Link href="/">
            <Image
              title="Home"
              width={60}
              height={60}
              className="block dark:hidden w-8 cursor-pointer hover:opacity-80 duration-500 hover:rotate-180"
              src="/logo-light.svg"
              alt="Anvarov Mukhammad logo"
            />
            <Image
              title="Home"
              width={60}
              height={60}
              className="hidden dark:block w-8 cursor-pointer hover:opacity-80 duration-500 hover:rotate-180"
              src="/logo-dark.svg"
              alt="Anvarov Mukhammad logo"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          <ul className="flex items-center space-x-2 md:space-x-3">
            {navData.map((nav) => (
              <li
                key={nav.id}
                className={`link ${pathname === nav.path && "active"}`}
              >
                <Link href={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <Switch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
