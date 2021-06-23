import React from 'react';
import Navbar from '../components/Navbar';


export default function layout(props){
  //const children = props.children;
  return(
    <React.Fragment>
     <Navbar/>
     {props.children}
    </React.Fragment>
  );
}