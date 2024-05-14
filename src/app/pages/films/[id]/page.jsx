"use client";
import React from "react";
import FilmDetail from "@/app/components/FilmDetail";

const FilmDetailPage = (props) => {
  console.log(props.params.id);
  var id = props.params.id;

  return (
    <div className="mt-10 pt-8">
      <h1 className="mt-10 pt-8">Film Detail Page</h1>
      <h2 className="mt-5">Showing details for film with ID: </h2>
      <FilmDetail filmId={id} />
    </div>
  );
};

export default FilmDetailPage;
