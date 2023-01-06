import React from 'react'
import Footer from './components/Footer'
import Genre from './components/Genre'
import Navbar from './components/Navbar'
import Popular from './components/Popular'
import UpcomingMovies from './components/UpcomingMovies'

function App() {
  return (
    <div className='bg-gradient-2 w-full'>
      <Navbar />
      <Popular />
      {/*  */}
      <UpcomingMovies />
      <Genre title="Action" genreID={28} />
      <Genre title="Animation" genreID={16} />
      <Genre title="Drama" genreID={18} />
      <Genre title="Science Fiction" genreID={878} />
      <Footer />
    </div>
  )
}

export default App