"use client";
import Link from "next/link";

const Navbar = () => {
  return (


    <div className=" container  mx-auto " >
        <div className=" absolute inset-x-0 top-0 z-50  bg-black flex row align-center justify-center py-2">
           <Link href="/pages/films">
              <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">
                FILMS
              </button>
            </Link>

       
              <Link href="/">
                <h2 className="text-white font-semibold py-2 px-6 text-xl">
                  Star Wars App
                </h2>
              </Link>
              
            

            <Link href="/pages/characters">
              <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold m-1 py-2 px-4 rounded">
                CHARACTERS
              </button>
            </Link>



        </div>

    </div>
   
  );
};

export default Navbar;



