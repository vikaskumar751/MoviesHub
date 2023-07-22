import './App.css';
import Title from './component/title';
import MovieBox from './component/moviebox.jsx';
import movie from './movielist/movielist.json';
import { useState } from 'react';
import About from './component/about.jsx';
import Contact from './component/contact';


function search(usertext,movieslist){
  const searches = movieslist.filter((xyz)=> xyz.title.toLowerCase().includes(usertext.toLowerCase()));
  return searches;

}


function App() {

 const [beforefilter,setBeforefilter]= useState(movie);
 const [text, setText] = useState('');
 const[movies,setMovies]= useState(movie);
 const [defaultValue, setDefaultValue] = useState('');

 

            
  return (
    <>
      <div className='header' >
        <h1>MoviesHub</h1>
        {/* <About/>
        <Contact/> */}
        <div className='searchbar'>
          <input className='input' type='text' placeholder='search' value={text} onChange={(e) => {setText( e.target.value) }}></input>
          <button type='button' onClick={()=>{const data =search(text,beforefilter ); setMovies(data);setDefaultValue(text)}}>Enter</button>
        </div>
      </div>

      

       {movies.length===0?<h4 id='alt'>No results found for "{defaultValue}"</h4>:<> <Title /> <div className='item' >
        {
          movies.map((element) => {
            return <MovieBox title={element.title} year={element.year} poster={element.posterUrl} runtime={element.runtime} genre={element.genres} director={element.director} actor={element.actors} plot={element.plot} />
          })
        }
      </div></>}
     

    </>

  )
}

export default App;