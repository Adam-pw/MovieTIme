import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Trending() {
  const router = useRouter();
  const pid = router.query.id;

  const [data, setData] = useState<any>([]);

  const [number, setNumber] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=1a205207591033df23155e8a30617c26&page=${number}`
    )
      .then((res) => res.json())
      .then((target) => {
        setData([...data, ...target.results]);
      })
      .catch((err) => {
        console.log(err);
      });
    const handleScroll = (event: any) => {
      setNumber(number + 1);
    };

    window.addEventListener("scroll", handleScroll);
  }, [number, pid]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl m-auto">
        <div className="flex gap-8 flex-wrap p-4 text-white">
          {data.map((data: any, index: any) => {
            return (
              <>
                <Link href={`/tvshows/${data.id}`}>
                  <div className="w-40">
                    <div className="m-4 p-4 text-xl cursor-pointer" key={index}>
                      <div className="w-40">
                        <Image
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                          alt=""
                          width={300}
                          height={500}
                        />
                      </div>
                      <div className="text-base mt-2 font-bold">
                        {data.name}
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="text-xs ">{data.vote_average}</div>
                        <div className="text-xs">{data.first_air_date}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
