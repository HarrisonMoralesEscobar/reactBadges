import React from 'react';
import error from '../images/404.jpg'

import {Link} from 'react-router-dom'

import './styles/NotFound.css'

export default function NotFound(){
  return(
    <div className="contenedor"> 182633
      <div className="con__text">
        <h1>404</h1>
        <h2>Pagé Not Found</h2>
        <p className="parrafo_NotFound">Parece que estas perdido...</p>
        <Link to="/" className="button btn btn-primary">
          Regresar al inicio
        </Link>  
      </div>
      
      <img className="img__NotFound" src={error} alt="404" />
    </div>
  );
}