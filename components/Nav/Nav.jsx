import React from "react";
import Logo from "../Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LocationModal from "./LocationModal";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="w-full flex flex-col bg-[#333545] p-3.5">
        <div className="w-[85%] max-md:w-[95%] m-auto flex items-center justify-between">
          <div className="flex items-center justify-between gap-4 w-[50%]">
            <div className="flex items-center justify-start">
              <Logo />
            </div>
            <div className="flex items-center justify-start p-1.5 w-full rounded-[4px] bg-white gap-4">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-[#777777] ml-3"
              />
              <input
                type="text"
                className="w-full truncate text-black/90 outline-none"
                placeholder="Search for Movies, Events, Plays, Sports and Activites"
              />
            </div>
          </div>
          <div className="flex items-center justify-evenly gap-5">
            <LocationModal />
            <Button
              radius="none"
              className="bg-[#F84464] flex items-center rounded-[4px] text-white h-[30px]"
            >
              Sign In
            </Button>
            <Button isIconOnly className="bg-transparent">
              <img
                src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
                alt="menu"
              />
            </Button>
          </div>
        </div>
      </nav>
      <nav className="w-full flex flex-col items-center bg-[#222539] p-2.5 px-3">
        <div className="w-[85%] max-md:w-[95%] m-auto flex max-sm:flex-col max-sm:gap-2 items-center justify-between">
          <div className="flex w-full flex-1 items-center justify-start leading-normal gap-5 text-sm font-semibold text-[#cccccc]">
            <Link href="#" className="hover:text-white">
              Movies
            </Link>
            <Link href="#" className="hover:text-white">
              Stream
            </Link>
            <Link href="#" className="hover:text-white">
              Events
            </Link>
            <Link href="#" className="hover:text-white">
              Plays
            </Link>
            <Link href="#" className="hover:text-white">
              Sports
            </Link>
            <Link href="#" className="hover:text-white">
              Activities
            </Link>
            <Link href="#" className="hover:text-white">
              Buzz
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-5 text-sm text-white">
            <Link href="#">ListYourShow</Link>
            <Link href="#">Corporates</Link>
            <Link href="#">Offers</Link>
            <Link href="#">Gift Cards</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
