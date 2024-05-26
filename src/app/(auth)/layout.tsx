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
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href} style={pathname.startsWith(link.href) ? {color:"greenyellow",fontWeight:"bold"}:{}}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
