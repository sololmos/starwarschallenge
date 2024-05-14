// pages/films/[id].jsx
"use client"


import React from "react";
//import { useRouter } from "next/router";
//import FilmDetail from "@/app/components/FilmDetail";


// import { useNavigation } from 'next/navigation'; // Importa useNavigation de next/navigation
// import FilmDetail from "@/app/components/FilmDetail";

// const FilmDetailPage = () => {
//   const navigation = useNavigation(); // Usa useNavigation en lugar de useRouter

//   // Obtiene el ID de la película desde la ruta dinámica
//   const { id } = navigation.route.params;

//   return (
//     <div className="mt-10 pt-8">
//       <h1 className="mt-10 pt-8">Film Detail Page</h1>
//       <h2 className="mt-5">Showing details for film with ID: {id}</h2>
//       <FilmDetail filmId={id} /> 
//     </div>
//   );
// };

// export default FilmDetailPage;











//import React from "react";

import FilmDetail from "@/app/components/FilmDetail";

const FilmDetailPage = (props) => {
  console.log(props.params.id)
  var id= props.params.id
  

  return (
    <div className="mt-10 pt-8">
      <h1 className="mt-10 pt-8">Film Detail Page</h1>
      <h2 className="mt-5">Showing details for film with ID: </h2>
      <FilmDetail filmId={id} /> 
    </div>
  );
};

export default FilmDetailPage;





// // pages/films/[id].jsx
// //"use client"

// import React from "react";
// //import { useRouter } from "next/router";
// import FilmDetail from "@/app/components/FilmDetail";

// const FilmDetailPage = (props) => {
//   console.log(props.params.id)
//   var id= props.params.id
//   // const router = useRouter();
//   // const { id } = router.query;

//   // Aquí podrías usar el ID para cargar los detalles de la película desde una API
//   // Por ejemplo, podrías hacer una solicitud a una API para obtener los detalles de la película con ese ID

//   return (
//     <div className="mt-10 pt-8">
//       <h1 className="mt-10 pt-8">Film Detail Page</h1>
//       <h2 className="mt-5">Showing details for film with ID: </h2>
//       <FilmDetail filmId={id} /> 
//     </div>
//   );
// };

// export default FilmDetailPage;



// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import FilmDetail from "../../components/FilmDetail";

// const FilmPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [film, setFilm] = useState(null);

//   useEffect(() => {
//     const fetchFilm = async () => {
//       try {
//         const response = await fetch(`https://swapi.dev/api/films/${id}/`);
//         const data = await response.json();
//         setFilm(data);
//       } catch (error) {
//         console.error("Error fetching film:", error);
//       }
//     };

//     if (id) {
//       fetchFilm();
//     }
//   }, [id]);

//   if (!film) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1 mt-10>Film Detail Page</h1>
//       <FilmDetail film={film} />
//     </div>
//   );
// };

// export default FilmPage;
