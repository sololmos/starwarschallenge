"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" container  mx-auto ">
      <div className=" absolute inset-x-0 top-0 z-50  bg-black flex row align-center justify-center py-2">
        <Link href="/pages/films">
          <button className="bg-yellow-400 hover:bg-yellow-300  text-black font-bold py-2 px-4 m-1 rounded">
            FILMS
          </button>
        </Link>

        <Link href="/">
          <h2 className="text-yellow-400 hover:text-yellow-300 font-semibold py-2 px-6 text-xl ">
            STAR WARS APP
          </h2>
        </Link>

        <Link href="/pages/characters">
          <button className="bg-yellow-400 hover:bg-yellow-300  text-black font-bold py-2 px-4 m-1 rounded">
            CHARACTERS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
