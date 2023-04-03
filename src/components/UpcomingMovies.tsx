import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -3400],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

export default function UpcomingMovies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=1a205207591033df23155e8a30617c26"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-16 m-4">
        <div className="text-3xl m-4 font-bold text-white">Upcoming Movies</div>
        <Link href="/movies/upcoming">
          <button className="py-4 px-8 bg-nile-blue-500 rounded-lg">
            Veiw all
          </button>
        </Link>
      </div>
      <div className="flex overflow-x-hidden bg-gradient-to-t from-nile-blue-400 to-nile-blue-700 m-4">
        {data.map((data: any, index: any) => {
          return (
            <>
              <Link href={`/movies/${data.id}`} key={index}>
                <motion.div
                  className="m-4 p-4 text-xl cursor-pointer"
                  variants={marqueeVariants}
                  animate="animate"
                >
                  <div className="w-40">
                    <Image
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                      alt=""
                      width={300}
                      height={500}
                    />
                  </div>
                  <div className="text-base mt-2 font-bold">
                    {data.original_title}
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-xs ">{data.vote_average}</div>
                    <div className="text-xs">{data.release_date}</div>
                  </div>
                </motion.div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
