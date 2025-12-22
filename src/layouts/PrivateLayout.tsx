import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const PrivateLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 px-6 py-8 bg-black/60">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
