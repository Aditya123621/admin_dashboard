"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { IoSearch } from "react-icons/io5";
import styles from "../navbar/navbar.module.css";

const Navbar = () => {
  // Just a comment for a test
  const pathname = usePathname();
  const getNavBarTitle = (e) => {
    return e[0].toUpperCase() + e.slice(1);
  };
  return (
    <div className="">
      <div className="">{getNavBarTitle(pathname.split("/").pop())}</div>
      <div>
        <IoSearch />
      </div>
    </div>
  );
};

export default Navbar;
