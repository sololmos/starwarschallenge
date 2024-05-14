
"use client"
import CharacterCard from "@/app/components/CharacterCard"

import React, { useState, useEffect } from "react";



const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const charactersPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
        const data = await response.json();
        setCharacters(data.results);
        setTotalCharacters(data.count);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const firstCharacterIndex = (currentPage - 1) * charactersPerPage + 1;
  const lastCharacterIndex = Math.min(currentPage * charactersPerPage, totalCharacters);

  return (
    <div className="container my-10 mx-auto">
      <h1 className="text-3xl  pt-10 font-bold mb-4">Star Wars Characters</h1>
      
      <p className="mb-4">
        Showing {firstCharacterIndex} - {lastCharacterIndex} of {totalCharacters} characters
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
      <div className=" flex flex-row mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>

                <p className=" font-semibold  mx-auto  mb-4">
                Showing {firstCharacterIndex} - {lastCharacterIndex} of {totalCharacters} characters
                </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default CharactersPage;





// "use client"
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import CharacterCard from "@/app/components/CharacterCard";

// const Characters = () => {
//     const [characters, setCharacters] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const charactersPerPage = 10;

//     useEffect(() => {
//         const fetchCharacters = async () => {
//           try {
//             const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
//             const data = await response.json();
//             setCharacters(data.results);
//           } catch (error) {
//             console.error("Error fetching characters:", error);
//           }
//         };
    
//         fetchCharacters();
//       }, [currentPage]);


//   return (
//     <div className="container mx-auto">
//       <div className="my-10">
//         <h1 className="text-3xl font-bold mt-20">Characters</h1>
//       </div>

//         <div className="container mx-auto">
//             <h1 className="text-3xl font-bold mb-4">Star Wars Characters</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {characters.map((character, index) => (
//                 <CharacterCard key={index} character={character} />
//             ))}
//             </div>
//             <div className="mt-8">
//             <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//             >
//                 Previous Page
//             </button>
//             <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
//                 onClick={() => setCurrentPage(currentPage + 1)}
//             >
//                 Next Page
//             </button>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Characters;
