import React from 'react';
import { Link } from "react-router-dom";
import './css/style.css'
export default function Btn(){
  return (
  <div>
  <div>
    <button>
    <Link to="/desarrolladores">Home</Link>
    </button>
  </div>
  <div>
    <button>
    <CustomLink to="/juego">Juego</CustomLink>
    </button>
  </div>
  <div>
    <button>
    <CustomLink to="/">Desarrolladores</CustomLink>
    </button>
  </div>
  </div>
  )
}

function CustomLink ({ to, children, ...props}){
    const path = window.location.pathname
    return (
    <div className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
     </div>
   )
 }