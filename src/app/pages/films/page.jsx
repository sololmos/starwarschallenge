"use client";
import Link from "next/link";
import FilmCard from "@/app/components/FilmCard";
import { useEffect, useState } from "react";

const Films = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(
          "https://swapi.dev/api/films/?format=json"
        );
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <h1 className="text-3xl text-yellow-400 text-center pt-10 font-bold mb-4">FILMS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {films.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default Films;
