import React from 'react';
import {Link} from 'react-router-dom'
import stars from '../images/stars.svg';
import astro from '../images/astronauts.svg';

import './styles/Home.css'

export default function Home(){
  return(
    
    <div style={{ backgroundImage: `url(${stars})` }} className="conten">

      <div className="content__text">
        <p className="parrafo">Bienvenidos</p>
        <Link to="/badges" className="button btn btn-primary">
          New Start
        </Link>   
      </div>

      <div className="conten__start">
        <img className="Image_astro" src={astro} alt="logo" />
      </div>

    </div>
  );
}