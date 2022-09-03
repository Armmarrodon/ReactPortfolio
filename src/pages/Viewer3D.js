import React, { useEffect, useState, useRef } from 'react';



import '../styles/Gif.css';
import ImagesViewer from '../components/ImagesViewer.js';


function Viewer3D(props) {
  
   
    return (

        <ImagesViewer folder='Model3DImages'/>
    );
}
export default Viewer3D;