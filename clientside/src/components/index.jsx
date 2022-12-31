import './index.css';

import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Gallery from "./gallery";
import Login from "./login"
import Signup from "./signup"

import { useState } from 'react';


function Render() {

  const [isLogin, setIsLogin] = useState(false)




  return (

    <div className="App">
      
      {
        (isLogin) ?
          <ul>
            <li> <Link to={'/'}>Home</Link></li>
            <li> <Link to={'/gallery'}>Gallery</Link></li>
            <li> <Link to={'/about'}>About</Link></li>
            <li> <Link to={'/profile'}>Profile</Link></li>
          </ul>
          :
          <ul>
            {/* <li> <Link to={'/'}>Login</Link></li>
            <li> <Link to={'/signup'}>Signup</Link></li> */}
          </ul>
      }


      {(isLogin) ?

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={
            <Navigate to="/" replace={true} />
          } />
        </Routes>
        : 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      }
    </div>
  );
}

export default Render;





















