import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogOut } from "lucide-react";
import MobileMenu from "./MobileMenu";

async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
    <div className="shadow-md bg-white">
      <Container className="flex justify-between items-center py-3 ">
        <div className="flex gap-10 items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={180}
              height={80}
              className="max-w-fit"
            />
          </Link>
          <ul className="hidden gap-8 md:flex">
            {Menu.map((item) => (
              <li
                key={item.id}
                className="hover:scale-105 transition-all ease-in-out py-2"
              >
                <Link
                  href={item.link}
                  className="hover:text-primary font-medium "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 items-center">
          <MobileMenu />
          {user ? (
            <Popover>
              <PopoverTrigger>
                <Image
                  src={user.picture}
                  alt={user.given_name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <ul className="flex flex-col gap-4">
                  <li className="text-gray-900 hover:text-primary cursor-pointer font-semibold transition-all ease-in-out">
                    <Link href={`/my-booking`}> My Bookings</Link>
                  </li>
                  <li className="text-gray-900 hover:text-primary cursor-pointer font-semibold transition-all ease-in-out">
                    <LogoutLink>
                      <button className="flex items-center gap-2">
                        Log out <LogOut size={15} className="font-semibold" />
                      </button>
                    </LogoutLink>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          ) : (
            <LoginLink>
              <Button>Sign In</Button>
            </LoginLink>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
