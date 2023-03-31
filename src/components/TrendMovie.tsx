import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TrendMovie() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1a205207591033df23155e8a30617c26"
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
      <div className="text-3xl m-4">Trending Movies</div>
      <div className="flex p-4 overflow-x-scroll border border-black m-4">
        {data.map((data: any, index: any) => {
          return (
            <>
              <Link href={`/movies/${data.id}`}>
                <div
                  className="m-4 p-4 border border-black text-center text-xl cursor-pointer"
                  key={index}
                >
                  <div className="w-60">
                    <Image
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                      alt=""
                      width={600}
                      height={900}
                    />
                  </div>
                  {data.title}
                  <div className="text-xs">
                    Movie Rating: {data.vote_average}
                  </div>
                  <div className="text-xs">
                    Release Date {data.release_date}
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
