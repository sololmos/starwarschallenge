"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/${characterId}/`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <p>Loading...</p>;
  }

  const { name, eye_color, birth_year, hair_color, height, skin_color, mass } =
    character;

  return (
    <div className="max-w-md my-10 mx-auto bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <Image
        height={20}
        width={20}
        src="/iconcharacter.svg"
        alt="icon character"
        className="w-full h-40 object-cover"
      />

      <div>
        <p>
          <span className="font-bold">Eye Color:</span> {eye_color}
        </p>
        <p>
          <span className="font-bold">Birth Year:</span> {birth_year}
        </p>
        <p>
          <span className="font-bold">Hair Color:</span> {hair_color}
        </p>
        <p>
          <span className="font-bold">Height:</span> {height}
        </p>
        <p>
          <span className="font-bold">Skin Color:</span> {skin_color}
        </p>
        <p>
          <span className="font-bold">Mass:</span> {mass}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
