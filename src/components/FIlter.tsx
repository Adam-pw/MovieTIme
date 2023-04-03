import { useState, useEffect } from "react";

export default function Filter() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1a205207591033df23155e8a30617c26&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.genres);
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
      <div className="m-4 text-white bg-nile-blue-700 p-4">
        <div className="font-bold text-2xl">
          Find out The best which suits for you :
        </div>
        <div className="flex md:flex-row flex-col gap-12 my-8">
          <div className="flex justify-between md:gap-12">
            <div className="text-lg text-semibold">Select Gener : </div>
            <select className="text-black py-1 px-1 md:px-4">
              {data.map((data: any, index) => {
                return (
                  <>
                    <option value="actual value 1">{data.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between md:gap-12">
            <div className="text-lg text-semibold">Adult : </div>
            <select className="text-black py-1 px-1 md:px-4">
              <option value="actual value 1">None</option>
              <option value="actual value 1">Yes</option>
              <option value="actual value 1">No</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-nile-blue-400 rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
