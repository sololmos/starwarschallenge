 "use client"

//import CharacterCard from "@/app/components/CharacterCard";
import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { lazy } from "react";
 const CharacterCard = lazy(()=>import("@/app/components/CharacterCard"))

const CharactersPage = () => {
  const [charactersToFilter, setCharactersToFilter] = useState([]);
  const [charactersByEyeColor, setCharactersByEyeColor] = useState([]);
  const [charactersByGender, setCharactersByGender] = useState([]);
  const [eyeColorFilter, setEyeColorFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const charactersPerPage = 10;

  const fetchAllCharacters = async () => {
    let allCharacters = [];
    let page = 1;

    while (true) {
      const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      const data = await response.json();
      allCharacters = [...allCharacters, ...data.results];
      page++;

      if (allCharacters.length >= data.count) {
        break;
      }
    }

    return allCharacters;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCharacters = await fetchAllCharacters();
        setCharactersToFilter(allCharacters);
        setTotalCharacters(allCharacters.length);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let eyeColorFilteredCharacters = [...charactersToFilter];
    if (eyeColorFilter) {
      eyeColorFilteredCharacters = eyeColorFilteredCharacters.filter(character => character.eye_color === eyeColorFilter);
    }
    setCharactersByEyeColor(eyeColorFilteredCharacters);

    let genderFilteredCharacters = [...charactersToFilter];
    if (genderFilter) {
      genderFilteredCharacters = genderFilteredCharacters.filter(character => character.gender === genderFilter);
    }
    setCharactersByGender(genderFilteredCharacters);
  }, [charactersToFilter, eyeColorFilter, genderFilter]);

  const applyFilters = () => {
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setEyeColorFilter("");
    setGenderFilter("");
    setCurrentPage(1);
  };

  const getFilteredCharacters = () => {
    const genderFilteredCharacters = charactersByGender;
    let eyeColorFilteredCharacters = charactersToFilter;
    if (eyeColorFilter) {
      eyeColorFilteredCharacters = eyeColorFilteredCharacters.filter(character => character.eye_color === eyeColorFilter);
    }
    const filteredCharacters = genderFilteredCharacters.filter(character =>
      eyeColorFilteredCharacters.some(filteredCharacter => filteredCharacter.name === character.name)
    );
    return filteredCharacters;
  };

  const firstCharacterIndex = (currentPage - 1) * charactersPerPage + 1;
  const lastCharacterIndex = Math.min(currentPage * charactersPerPage, totalCharacters);

  return (
    <div className="container my-10 mx-auto">
      <h1 className="text-3xl text-yellow-400 text-center pt-10 font-bold mb-4">CHARACTERS</h1>
    
        <div className="flex flex-row justify-center mt-8">
          <div className="bg-yellow-400  text-black  rounded py-2 px-4 m-1" >
            <label className="font-bold px-1" htmlFor="gender">Filter by Gender:</label>
            <select
              className="hover:cursor-pointer rounded"
              id="gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="bg-yellow-400  text-black  rounded py-2 px-4 m-1">
            <label className="font-bold px-1" htmlFor="eye_color">Filter by Eye Color:</label>
            <select
              className="hover:cursor-pointer rounded"
              id="eye_color"
              value={eyeColorFilter}
              onChange={(e) => setEyeColorFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="blue">Blue</option>
              <option value="brown">Brown</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
            </select>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-300  text-black font-bold py-2 px-4 m-1 rounded" onClick={resetFilters}>Reset Filters</button>
        </div>
      <p className="mb-4">
        Showing {firstCharacterIndex} - {lastCharacterIndex} of {totalCharacters} characters
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Suspense fallback={<h1 className="text-yellow-400 font-bold ">LOADING CHARACTERS...</h1>}>

        {getFilteredCharacters().slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage).map((character, index) => (
         
         <CharacterCard key={index} character={character} />
         
        ))}
        </Suspense>

      </div>
      <div className="flex flex-row mt-8">
        <button
          className="bg-yellow-400 hover:bg-yellow-300  text-black font-bold py-2 px-4 m-1 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>

        <p className="font-semibold text-yellow-400 py-2 mx-auto ">
          Showing {firstCharacterIndex} - {lastCharacterIndex} of {totalCharacters} characters
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-300  text-black font-bold py-2 px-4 m-1 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={lastCharacterIndex === totalCharacters}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default CharactersPage;




