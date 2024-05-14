
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CharacterCard = ({ character }) => {
  const { name, eye_color, gender, url } = character;

  const characterId = url && url.split("/").slice(-2)[0];

  return (
    <Link href={`/pages/characters/${characterId}`}>
      <div className="block bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
        <Image
          height={20}
          width={20}
          src="/iconcharacter.svg"
          alt="icon character"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl text-center font-semibold">{name}</h3>
          <p className="text-gray-600">{`Eye Color: ${eye_color}`}</p>
          <p className="text-gray-600">{`Gender: ${gender}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;


