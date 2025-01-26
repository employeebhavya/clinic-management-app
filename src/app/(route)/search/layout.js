import Container from "@/components/Container";
import React from "react";
import CategoriesInner from "./_components/CategoriesInner";

function layout({ children }) {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-4 py-12 md:gap-10">
      <div>
        <CategoriesInner />
      </div>
      <div className="col-span-3 -mt-10 md:-mt-0">{children}</div>
    </Container>
  );
}

export default layout;
