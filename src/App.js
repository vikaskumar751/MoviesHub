
import Home from './component/home.jsx';
import { useState, useRef, useEffect } from 'react';
import myImage from './img/bgimage.jpg'



// import SignUp from './component/SignUp';



function App() {

  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]); // State to hold the fetched movie data


  

  const name = useRef();
  const email = useRef();
  const password = useRef();

  useEffect(() => {
    if (localStorage.getItem('signup')) {
      setShowHome(true)
    };
    if (localStorage.getItem('email')) {
      setShow(true)
    }
  })

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.setItem('signup', email.current.value);
      alert('Congratulations! Account created');
      window.location.reload();
    } else {
      alert('You missed something');
      window.location.reload();
    }

  }

  const handleLogin = () => {
       if(password.current.value === localStorage.getItem('password') && email.current.value === localStorage.getItem('email') ){
        localStorage.setItem('signup', email.current.value);
        window.location.reload();
       }
       else{
        alert("Please enter valid Email and Password.")
        window.location.reload();
       }
  }


  return (
    <>
      {
        showHome ? <Home /> : show ? (
          <div className="relative bg-[url('./img/bgimage.jpg')] bg-opacity-75 filter transition-all duration-500 flex justify-center items-center flex-col h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black"></div>
            <h1 className="z-10 text-4xl font-extrabold text-white text-center mb-10">Welcome to MoviesHub</h1>
            <div className="z-10 rounded-lg shadow-lg p-8 w-80 border mb-6">
            <h2 className='text-2xl font-semibold mb-4 text-center text-white'>Welcome back, {localStorage.getItem('name')}</h2>
            <input id="emailInput" className="transition-color duration-250 ease-in cubic-bezier(0.5, 0, 0.1, 1) w-full bg-transparent text-white line-height[1.5rem] py-2 px-4 border border-white rounded mb-4" type="email" placeholder="Email" ref={email} />
            <input id="passwordInput" className="transition-color duration-250 ease-in cubic-bezier(0.5, 0, 0.1, 1) w-full bg-transparent text-white line-height[1.5rem] py-2 px-4 border border-white rounded mb-4" type="password" placeholder="Password" ref={password}/>

            <button className='bg-red-700 text-fuchsia-50  hover:bg-blue-600 text-white  font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-1' type="button" onClick={handleLogin}>Login</button>
            </div>
          </div>
        ) : (<>
          <div className="relative bg-[url('./img/bgimage.jpg')] bg-opacity-75 filter transition-all duration-500 flex justify-center items-center flex-col h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black"></div>
            <h1 className="z-10 text-4xl font-extrabold text-white text-center mb-10">Welcome to MoviesHub</h1>
            <div className="z-10 rounded-lg shadow-lg p-8 w-80 border mb-6">
              <h2 className="text-3xl font-bold mb-4 text-center text-white">Sign Up</h2>
              <input id="nameInput" className="transition-color duration-250 ease-in cubic-bezier(0.5, 0, 0.1, 1) w-full bg-transparent text-white line-height[1.5rem] py-2 px-4 border border-white rounded mb-4" type="text" placeholder="Name" ref={name}/>
              <input id="emailInput" className="transition-color duration-250 ease-in cubic-bezier(0.5, 0, 0.1, 1) w-full bg-transparent text-white line-height[1.5rem] py-2 px-4 border border-white rounded mb-4" type="email" placeholder="Email" ref={email} />
              <input id="passwordInput" className="transition-color duration-250 ease-in cubic-bezier(0.5, 0, 0.1, 1) w-full bg-transparent text-white line-height[1.5rem] py-2 px-4 border border-white rounded mb-4" type="password" placeholder="Password" ref={password}/>
              <button className="bg-red-700 text-fuchsia-50 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-1" type="button" onClick={handleClick}>Get started</button>
            </div>
          </div>
        </>
        
        
       )}
    </>
  );
}

export default App;
