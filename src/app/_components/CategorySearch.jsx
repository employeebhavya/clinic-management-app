"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

function CategorySearch() {
  const [categoriesList, setCategoriesList] = useState([]);

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
    <Container className="pt-16 pb-10">
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Explore Our Specialties
        </h2>
        <h4 className="font-medium text-gray-700">
          Find expert doctors across various medical fields and book your
          appointment in just one click.
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
          {categoriesList.length > 0
            ? categoriesList.map(
                (category, index) =>
                  index < 6 && (
                    <Link
                      href={`/search/${category.name}`}
                      key={index}
                      className="flex flex-col items-center justify-center gap-2 bg-primary/10 p-4 rounded-lg hover:bg-primary/20 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    >
                      <Image
                        src={category.Icon.url}
                        width={40}
                        height={40}
                        alt={category.name}
                      />
                      <p className="text-gray-900">{category.name}</p>
                    </Link>
                  )
              )
            : Array.from({ length: 8 }).map((_, index) => (
                <div
                  className="h-[128px] w-[193.333px] bg-slate-200 rounded-lg animate-pulse border-[1px] border-gray-200"
                  key={index}
                ></div>
              ))}
        </div>
      </div>
    </Container>
  );
}

export default CategorySearch;
