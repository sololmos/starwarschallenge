
"use client";
import React from "react";
import { useRouter } from "next/router";
import CharacterDetail from "@/app/components/CharacterDetail";

const CharacterPage = (props) => {
  console.log(props.params.id);
  var id = props.params.id;

  return (
    <div>
      <h1 className="mt-10 pt-10">Character Detail Page</h1>
      <h5 className="pt-10">character page</h5>
      <CharacterDetail characterId={id} />
    </div>
  );
};

export default CharacterPage;
