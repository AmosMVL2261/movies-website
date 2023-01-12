import axios from "axios";
import React, { useState, useEffect } from "react";

function UpcomingCard({ title, backdrop_path, release_date }) {
  return (
    <div className="w-[330px] h-[250px] py-1 flex flex-col justify-center items-center ">
      {/* Movie Image */}
      <img
        className="rounded-md"
        src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
        alt=""
      />
      {/* Movie info */}
      <h3 className="font-roboto font-bold text-white">{title}</h3>
      <p className="text-white font-bold">Release Date: {release_date}</p>
    </div>
  );
}

function UpcomingMovies() {
  const TMDB = import.meta.env.VITE_TMDB_API_KEY;
  const [data, setData] = useState([]);

  /**
   * This specific request can get movies that have already been released, depends entirely on the api
   */
  const getData = async () => {
    const requestLink = `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB}&language=en-US&page=1`;
    let request = await axios
      .get(requestLink)
      .then((response) => response.data.results);
    let finalData = request.slice(0, 4);
    setData(finalData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-5 w-[100%]" id="movies">
      <h2 className="text-white text-4xl font-bold ml-10 mb-4">
        Upcoming Movies
      </h2>
      {/* Upcoming Movies */}
      <div className="flex flex-col justify-center items-center flex-wrap sm:flex-row ">
        {data.map((movie) => (
          <UpcomingCard
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovies;
