import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MovieCard({ title, vote_average, poster_path }) {
  return (
    <div className="flex flex-col items-center h-[388px] w-[190px] p-2">
      {/* <div className='flex flex-col items-center h-[388px] w-[190px] p-2 border rounded-xl bg-white'> */}
      <div className="">
        <img
          className="h-[278px] object-fill rounded-md"
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          alt="movie"
        />
      </div>
      <div className="h-[110px] max-w-[185px] flex flex-col justify-between items-center">
        <h3 className="font-roboto text-center w-[100%] overflow-hidden font-bold text-base text-white pt-2">
          {title}
        </h3>
        {/*<p><span className='font-bold'>User Score:</span> {vote_average}/10</p> */}
      </div>
    </div>
  );
}

function Genre({ title, genreID }) {
  const TMDB = import.meta.env.VITE_TMDB_API_KEY;
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const requestLink = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}&with_watch_monetization_types=flatrate`;
    const data = await axios
      .get(requestLink)
      .then((response) => response.data.results);
    setMovies(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const responsive = {
    extraLarge: {
      breakpoint: { max: 1700, min: 1200 },
      items: 5,
    },
    large: {
      breakpoint: { max: 1200, min: 1060 },
      items: 4,
    },
    medium: {
      breakpoint: { max: 1060, min: 768 },
      items: 3,
    },
    smallMedium: {
      breakpoint: { max: 768, min: 620 },
      items: 2,
    },
    smallSmall: {
      breakpoint: { max: 620, min: 480 },
      items: 1,
    },
    extraSmall: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="mt-3">
      <div className="ml-10 mb-4">
        <h2 className="text-white text-4xl font-bold">{title}</h2>
      </div>

      <div className="flex justify-center items-center h-[400px] w-[100%]">
        <div className="w-full">
          <Carousel
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            draggable={false}
            centerMode={true}
            infinite
          >
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Genre;
