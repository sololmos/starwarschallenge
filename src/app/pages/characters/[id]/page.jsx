// characters/[id]/page.js
"use client"
import React from "react";
import { useRouter } from "next/router";
import CharacterDetail from "@/app/components/CharacterDetail";

const CharacterPage = (props) => {

  console.log(props.params.id)
  var id= props.params.id
    
  // const router = useRouter();
  // const { id } = router.query;
  // //console.log(router.query.id )


  // useEffect(() => {
  //   console.log(router.query.id);
  // }, [router.query.id]);

  // if (!id) {
  //   return <div>Loading...</div>;
  // }

 

  return (
    <div>
      <h1 className="mt-10 pt-10" >Character Detail Page</h1>
      <h5 className="pt-10">character page</h5>
       <CharacterDetail characterId={id} /> 
    </div>
  );
};

export default CharacterPage;


// import React from "react";
// import { useRouter } from "next/router";
// import CharacterDetail from "@/app/components/CharacterDetail";

// const CharacterPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   if (!id) {
//     return <p>Loading...</p>;
//   }

//   const characterUrl = `https://swapi.dev/api/people/${id}/`;

//   return (
//     <div>
//       <h1>Character Detail Page</h1>
//       <CharacterDetail characterUrl={characterUrl} />
//     </div>
//   );
// };

// export default CharacterPage;
