"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <div>{children}</div>
    </div>
  );
}
