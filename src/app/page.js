import Image from "next/image";
import Loader from "@/app/components/Load";
import World from "@/app/components/World";

export default function Home() {
  return (
    <div className="container  mx-auto">
      <div className="my-10 justify-center items-center">
        <h1 className="text-3xl text-yellow-400 py-5 uppercase text-center font-bold mt-20">
          welcome to Movie App!
        </h1>
        <Image
          height={300}
          width={400}
          className="flex mx-auto "
          src="/logo.svg"
          alt="star wars logo"
        ></Image>
      </div>
      <Loader></Loader>
      <World></World>
    </div>
  );
}
