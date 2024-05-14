
"use client";
import React from "react";
import { useRouter } from "next/router";
import CharacterDetail from "@/app/components/CharacterDetail";

const CharacterPage = (props) => {
  console.log(props.params.id);
  var id = props.params.id;

  return (
    <div className="pt-10">
       
      <h5 >character page</h5>
      <h1 className="text-3xl text-yellow-400 text-center pt-10 font-bold mb-4">CHARACTER DETAIL</h1>
      <CharacterDetail characterId={id} />
    </div>
  );
};

export default CharacterPage;
