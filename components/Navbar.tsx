"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures that the component is mounted client-side
  }, []);

  if (!mounted) {
    return null; // Return null if rendering server-side to prevent router access
  }

  // const router = useRouter();

  const currentPath = "/about";
  const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
      icon: "",
    },

    {
      id: 2,
      path: "/about",
      text: "About",
      icon: "",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
      icon: "",
    },
    {
      id: 4,
      path: "/testimonials",
      text: "Testimonials",
      icon: "",
    },
    {
      id: 5,
      path: "/contact",
      text: "Contact",
      icon: "",
    },
    {
      id: 6,
      path: "/team",
      text: "Team",
      icon: "",
    },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent text-white font-semibold ">
      <span className="">
        <Image
          src="/images/logo.png"
          className=""
          height={300}
          width={300}
          alt="logo"
        />
      </span>
      <ul className="flex gap-4 text-lg">
        {navList.map((item) => (
          <li
            key={item.id}
            className={
              currentPath === item.path
                ? "text-blue-500 cursor-pointer font-semibold"
                : "hover:text-blue-500 cursor-pointer font-semibold"
            }
          >
            {item?.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}
