import Link from "next/link";
import Image from "next/image";

const FilmCard = ({ film }) => {
  const { title,episode_id,  url } = film;
  const filmId = url.split("/").slice(-2)[0];

  return (
    <Link href={`/pages/films/${filmId}`}>
      <div className="block bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
        <Image
        height={20} width={20} src="/iconmovie.svg" 
        alt="icon movie" className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{`Episode ${episode_id}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
