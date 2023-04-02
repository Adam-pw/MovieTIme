import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Similar from "@/components/Similar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Movie() {
  const router = useRouter();
  const pid = router.query.id;

  const [data, setData] = useState<any>([]);
  const [datasimilar, setDatasimilar] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${pid}?api_key=1a205207591033df23155e8a30617c26&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${pid}/similar?api_key=1a205207591033df23155e8a30617c26&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setDatasimilar(data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pid]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-nile-blue-700 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                  className="w-full relative z-10"
                  alt=""
                  height={900}
                  width={600}
                ></Image>
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-5">
                <h1 className="font-bold uppercase text-2xl">{data?.title}</h1>
                <h3 className="text-lg mb-5">{data.tagline}</h3>
                <p className="text-sm">{data.overview}</p>
              </div>
              {data.budget ? (
                <div className="my-4 p-4 border-nile-blue-500 border-4 text-white">
                  <div className="flex justify-between ">
                    <div className="">Budget</div>
                    <div className="">Revenue</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">$ {data.budget}</div>
                    <div className="">$ {data.revenue}</div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="flex flex-wrap gap-4 mb-4">
                {data.genres?.map((data: any, index: any) => {
                  return (
                    <>
                      <div className="px-4 py-2 rounded-xl bg-nile-blue-500 font-semibold">
                        {data.name}
                      </div>
                    </>
                  );
                })}
              </div>
              <div>
                <div className="inline-block align-bottom">
                  <button className="bg-nile-blue-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <Similar data={datasimilar} />
      </div>
      <Footer />
    </>
  );
}
