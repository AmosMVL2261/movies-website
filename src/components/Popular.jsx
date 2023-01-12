import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MovieSlide({ title, overview, path }) {
  return (
    <div className="relative">
      {/* Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w1280/${path}`}
        className="z-[1] mx-auto w-[100%] h-[100%]"
      />
      {/* Movie Info */}
      <h3 className="absolute sm:hidden z-[2] w-[100%] text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl bottom-10 mx-auto font-outline-2">
        {title}
      </h3>
      <div className="absolute top-[-1000px] sm:top-[5%] sm:left-[5%] z-[2] bg-black bg-opacity-50 w-[45%] h-[50%] md:h-[60%] rounded-xl">
        <div className="flex flex-col justify-start items-center w-[100%] h-[100%] p-5 ">
          <h3 className="pb-2 text-center text-white font-bold text-xl md:text-4xl bottom-10 mx-auto font-outline-2">
            {title}
          </h3>
          <div className="text-white text-sm sm:text-md md:text-xl text-center overflow-hidden">
            {overview}
          </div>
        </div>
      </div>
    </div>
  );
}

function Popular() {
  const TMDB = import.meta.env.VITE_TMDB_API_KEY;
  const [popularMovies, setPopularMovies] = useState([]);

  const getData = async () => {
    const requestLink = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB}&language=en-US&page=1`;
    const promise = await axios
      .get(requestLink)
      .then((response) => response.data.results);
    setPopularMovies(promise);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="popular" className="">
      {/* Carousel with popular movies within */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="z-[1]"
        containerClass="react-multi-carousel-list"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {popularMovies.map((movie) => (
          <MovieSlide
            key={movie.id}
            title={movie.title}
            path={movie.backdrop_path}
            overview={movie.overview}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Popular;
