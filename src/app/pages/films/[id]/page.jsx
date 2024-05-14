"use client";
import React from "react";
import FilmDetail from "@/app/components/FilmDetail";

const FilmDetailPage = (props) => {
  console.log(props.params.id);
  var id = props.params.id;

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h1 className="text-3xl text-yellow-400 text-center pt-10 font-bold mb-4">FILM DETAIL</h1>
      </div>
      
      <FilmDetail filmId={id} />
    </div>
  );
};

export default FilmDetailPage;
