import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TrendTvshows() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=1a205207591033df23155e8a30617c26"
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
      <div className="text-3xl m-4 font-bold text-white">Trending Tv Shows</div>
      <div className="flex p-4 overflow-x-scroll bg-gradient-to-t from-nile-blue-400 to-nile-blue-700 m-4">
        {data.map((data: any, index: any) => {
          return (
            <>
              <Link href={`/tvshows/${data.id}`}>
                <div className="m-4 p-4 text-xl cursor-pointer" key={index}>
                  <div className="w-40">
                    <Image
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                      alt=""
                      width={300}
                      height={500}
                    />
                  </div>
                  <div className="text-base mt-2 font-bold">{data.name}</div>
                  <div className="flex justify-between mt-2">
                    <div className="text-xs ">{data.vote_average}</div>
                    <div className="text-xs">{data.first_air_date}</div>
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
