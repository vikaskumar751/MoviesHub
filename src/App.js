import './App.css';
import Title from './component/title';
import MovieBox from './component/moviebox.jsx';
import movie from './movielist/movielist.json';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import SignUp from './component/SignUp';

function search(usertext, movieslist) {
  const searches = movieslist.filter((xyz) => xyz.title.toLowerCase().includes(usertext.toLowerCase()));
  return searches;
}

function App() {
  const [beforefilter, setBeforefilter] = useState(movie);
  const [text, setText] = useState('');
  const [movies, setMovies] = useState(movie);
  const [defaultValue, setDefaultValue] = useState('');
  const [showHome,setShowHome] = useState(true);
 
  const name = useRef();
       const email = useRef();
       const password = useRef();

       const handleClick=()=>{
        if(name.current.value && email.current.value && password.current.value ){
            setShowHome(false)
            localStorage.setItem('name',name.current.value);
            localStorage.setItem('email',email.current.value);
            localStorage.setItem('password',password.current.value);
            localStorage.setItem('signup',email.current.value)
            alert('Congratulations! Account created')
        }else{
           alert('You missed something');
           window.location.reload();
        }
        
       }
  

  return (
    <>
      {
      showHome ? (
        <div className="signup">
        <input type="text" placeholder="Name" ref={name} />
        <input type="email" placeholder="Email" ref={email} />
        <input type="password" placeholder="Password" ref={password}/>
        <button type="button" onClick={handleClick}>Get started</button>
        </div>
      ) : (
        <>
          <div className='header'>
            <h1>MoviesHub</h1>
            <Link to='/about'>
              <h6>About us</h6>
            </Link>
            <Link to='/contact'>
              <h6>Contact</h6>
            </Link>
            <div className='searchbar'>
              <input
                className='input'
                type='text'
                placeholder='search'
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button
                type='button'
                onClick={() => {
                  const data = search(text, beforefilter);
                  setMovies(data);
                  setDefaultValue(text);
                }}
              >
                Enter
              </button>
            </div>
          </div>

          {movies.length === 0 ? (
            <h4 id='alt'>No results found for "{defaultValue}"</h4>
          ) : (
            <>
              <Title />
              <div className='item'>
                {movies.map((element) => {
                  return (
                    <MovieBox
                      key={element.id} // Add a unique 'key' prop for each movie
                      title={element.title}
                      year={element.year}
                      poster={element.posterUrl}
                      runtime={element.runtime}
                      genre={element.genres}
                      director={element.director}
                      actor={element.actors}
                      plot={element.plot}
                    />
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
