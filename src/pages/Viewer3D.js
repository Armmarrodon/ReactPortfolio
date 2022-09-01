import React, { useEffect, useState, useRef } from 'react';



import '../styles/Gif.css';
import ImportImages from '../services/ImportImages.js';


function Viewer3D(props) {
    const [keyword, setKeyword] = useState("");
    const inputRef = useRef(null);
    function HandleClickButton() {
        setKeyword(inputRef.current.value);

    };
    function ForImages(images)
    {
        var rows = [];
        for (let i = 0; i < images.length; i++) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push(<img className="gif" src={images[i]} key={i} />);
        }
        return rows;
    }

    useEffect(function () {
        console.log("click: " + keyword);
    }, [keyword])

    const images = ImportImages(require.context('../textures/Model3DImages', false, /\.(png|jpe?g|svg|JPG)$/));
    return (
         <div className="gifDisplay">
           
            {
                ForImages(images)
            }

         </div>
         
        
     

  
    );
}
export default Viewer3D;