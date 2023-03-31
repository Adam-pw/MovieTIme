import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function TvShows() {
  const router = useRouter();
  const pid = router.query.id;

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  1;
  1;
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/tv/${pid}?api_key=1a205207591033df23155e8a30617c26&language=en-US`
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
  }, [pid]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <p>Tv Shows: {data?.name}</p>
    </>
  );
}
