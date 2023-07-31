import React, { useState, useEffect } from 'react';
import Title from './title';
import MovieBox from './moviebox';
import { Link } from 'react-router-dom';
import fetch from 'node-fetch';

function search(usertext, movieslist) {
  const searches = movieslist.filter((xyz) => xyz.title.toLowerCase().includes(usertext.toLowerCase()));
  return searches;
}

const Home = () => {
  const [text, setText] = useState('');
  const [movies, setMovies] = useState([]); // Initialize movies state with an empty array
  const [defaultValue, setDefaultValue] = useState('');
  const [beforeFilter,setBeforeFilter] = useState([])

  // Your RapidAPI endpoint and headers
  const fetch = require('node-fetch');

const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd8da927882mshc963fd7218547aep165aa4jsn45dc2ed52eec',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

  useEffect(() => {
    const fetchRapidAPIData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        
        setMovies(data); // Save the fetched movie data in the state
        setBeforeFilter(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRapidAPIData();
  }, []); // Empty array means this effect runs only once when the component mounts

  const handleLogOut = () => {
    localStorage.removeItem('signup');
    window.location.reload();
  };
  

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 fixed w-full z-100">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-white mr-96 ">MoviesHub</h1>
          
          <Link to="/about" className="text-white hover:text-gray-200">
            About us
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200 ">
            Contact
          </Link>
          <div className="searchbar flex items-center ">
            <input
              className="px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none w-96"
              type="text"
              placeholder="What are you looking for?"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-500"
              type="button"
              onClick={() => {
                const datas = search(text, beforeFilter); // Use the 'movies' state for filtering
                setMovies(datas);
                setDefaultValue(text);
                setText(" ");
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="px-4 py-2 text-white bg-red-700 rounded-lg focus:outline-none hover:bg-red-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>

      {movies.length === 0 ? (
        <h4 id='alt'>No results found for "{defaultValue}"</h4>
      ) : (
        <>
          <Title />
          <div className='item'>
            {movies.map((element) => (
              <MovieBox
                key={element.id}
                title={element.title}
                year={element.year}
                poster={element.image}
                genre={element.genre}
                rating = {element.rating}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
