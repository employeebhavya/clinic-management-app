"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignJustify,
  Instagram,
  Linkedin,
  LucideFacebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false); // Close the sheet when a menu item is clicked
  };

  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 3,
      name: "Explore",
      link: "/explore",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger onClick={() => setIsOpen(true)}>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={180}
                height={80}
                className="max-w-fit"
              />
            </SheetTitle>
            <SheetDescription>
              <span className="flex flex-col items-baseline gap-4 mt-5">
                {Menu.map((item) => (
                  <li
                    key={item.id}
                    className="transition-all ease-in-out py-2 list-none"
                  >
                    <Link
                      href={item.link}
                      className="hover:text-primary font-medium text-lg"
                      onClick={handleMenuClick} // Close the sheet on click
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </span>
              <span className="flex flex-row items-center gap-4 mt-8">
                <Link
                  href="#"
                  className="hover:text-primary font-medium text-lg"
                >
                  <LucideFacebook />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary font-medium text-lg"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary font-medium text-lg"
                >
                  <Instagram />
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary font-medium text-lg"
                >
                  <Twitter />
                </Link>
              </span>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileMenu;
