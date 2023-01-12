import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MovieSlide({ title, path }) {
  return (
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${path}`}
        className="object-contain z-[1] mx-auto"
      />
      <h3 className="absolute z-[2] w-[100%] text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl bottom-10 mx-auto font-outline-2">
        {title}
      </h3>
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
    console.log(promise);
    setPopularMovies(promise);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center py-3">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="z-[1]"
        containerClass="container"
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
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {popularMovies.map((movie) => (
          <MovieSlide
            key={movie.id}
            title={movie.title}
            path={movie.backdrop_path}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Popular;
