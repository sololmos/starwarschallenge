// FilmDetail.js
// FilmDetail.js
"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const FilmDetail = ({ filmId }) => {
  const [film, setFilm] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${filmId}/`);
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error("Error fetching film:", error);
      }
    };

    fetchFilm();
  }, [filmId]);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!film || !film.characters) return;
      const characterData = await Promise.all(
        film.characters.map(async (characterUrl) => {
          const characterId = characterUrl.split("/").slice(-2)[0];
          const response = await fetch(characterUrl);
          return response.json();
        })
      );
      setCharacters(characterData);
    };

    fetchCharacters();
  }, [film]);

  if (!film) {
    return <p>Loading...</p>;
  }

  const { title, episode_id, director } = film;

  return (
    <div className="max-w-md mx-auto pt-8 my-8 bg-white rounded-md p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">Episode: {episode_id}</p>
      <p className="text-gray-600">Director: {director}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Characters:</h3>
        <ul>
          {characters.map((character, index) => (
            <li key={index} className="mb-2">
              <Link href={`/pages/characters/${character.url.split("/").slice(-2)[0]}`}>
                <div className="block bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
                  <Image
                    height={20}
                    width={20}
                    src="/iconcharacter.svg"
                    alt="icon character"
                    className="w-full h-40 object-cover"
                  />
                  <h2 className="font-semibold">name: {character.name}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilmDetail;





