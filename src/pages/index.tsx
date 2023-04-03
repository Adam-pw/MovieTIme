import Head from "next/head";
import { Inter } from "next/font/google";
import TrendMovie from "@/components/TrendMovie";
import TrendTvshows from "@/components/TrendTvshows";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import UpcomingMovies from "@/components/UpcomingMovies";
import Filter from "@/components/FIlter";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = useSelector((state: any) => {
    console.log(state.search);
    return state.search;
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Movie Time</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="max-w-screen-xl m-auto">
        <Hero />
        <Filter />
        <TrendMovie />
        <TrendTvshows />
        <UpcomingMovies />
      </div>
      <Footer />
    </>
  );
}
