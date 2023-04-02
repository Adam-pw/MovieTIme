import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Similar({ data }: any) {
  return (
    <>
      <div className=" text-3xl font-bold text-white text-center m-8">
        Similar Movies Like This
      </div>
      <div className="p-8 flex flex-wrap gap-8 bg-nile-blue-700 text-white justify-center my-4 mx-1 md:m-8">
        {data?.map((data: any, index: any) => {
          return (
            <>
              <Link href={`/movies/${data.id}`}>
                <div className="w-40">
                  <div className="text-xl cursor-pointer" key={index}>
                    <div className="w-40">
                      <Image
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
                        alt=""
                        width={300}
                        height={450}
                      />
                    </div>
                    <div className="text-base mt-2 font-bold">{data.title}</div>
                    <div className="flex justify-between mt-2">
                      <div className="text-xs ">{data.vote_average}</div>
                      <div className="text-xs">{data.release_date}</div>
                    </div>
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
