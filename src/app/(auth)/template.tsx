"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AllAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
    { name: "forgot password", href: "/forgot-password" },
  ];

  const pathname = usePathname();
  const [value,setValue]=useState("")

  return (
    <div>
      <nav>
        <ul className=" flex justify-between mx-3 my-2 p-2">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href} className={pathname.startsWith(link.href) ? " text-green-600 font-bold underline text-lg":" text-blue-400"}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className=" text-end">
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="border-2 rounded-md py-[6px] mx-2 border-blue-700 px-2 outline-none focus-visible:border-green-600" />
      </div>
      <div>{children}</div>
    </div>
  );
}
