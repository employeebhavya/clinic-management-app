import React from "react";

function Container({ children, className, hpad = "px-5" }) {
  return (
    <section className={`max-w-[1280px] mx-auto ${hpad} ${className || ""}`}>
      {children}
    </section>
  );
}

export default Container;
