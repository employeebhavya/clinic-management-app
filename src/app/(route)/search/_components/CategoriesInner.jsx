"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function CategoriesInner() {
  const [categoriesList, setCategoriesList] = useState([]);
  const params = usePathname();
  const currentCategory = decodeURIComponent(params.split("/").pop());

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    // API call to get categories
    GlobalApi.getCategories().then((res) => {
      setCategoriesList(res.data.data);
    });
  };
  return (
    <div className="md:h-screen mb-4 md:mb-0">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible max-h-max">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoriesList.length > 0 ? (
              categoriesList.map((category) => (
                <CommandItem key={category.id}>
                  <Link
                    href={`/search/${category.name}`}
                    className={`p-2 rounded-md flex gap-2 items-center text-primary cursor-pointer w-full ${
                      currentCategory === category.name
                        ? "bg-primary/10 text-primary"
                        : ""
                    }`}
                  >
                    <Image
                      src={category.Icon.url}
                      width={20}
                      height={20}
                      alt={category.name}
                    />
                    <label className="cursor-pointer">{category.name}</label>
                  </Link>
                </CommandItem>
              ))
            ) : (
              <CommandItem className="w-full h-screen animate-pulse bg-gray-200"></CommandItem>
            )}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoriesInner;
