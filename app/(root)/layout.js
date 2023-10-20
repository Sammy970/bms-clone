import Nav from "@/components/Nav/Nav";
import React from "react";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#F5F5F5] w-full">
      <Nav />
      {children}
    </main>
  );
};

export default layout;
