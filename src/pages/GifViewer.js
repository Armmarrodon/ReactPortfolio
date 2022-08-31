import React, { useEffect, useState,useRef } from 'react';
import ListOfGifs from '../components/ListOfGifs.js';


import '../styles/Gif.css';


function GifViewer(props) {
    const [keyword, setKeyword] = useState("");
    const inputRef = useRef(null);
    function HandleClickButton() {
        setKeyword(inputRef.current.value);
      
    };
    useEffect(function () {
        console.log("click: " + keyword);
    }, [keyword])

    return (
        <div className="test">
            
                <label >Name (4 to 8 characters):</label>
                <input ref={inputRef} type="text" id="name" name="name"/>
                <button onClick={() => HandleClickButton()} >Update Gifs</button>
           
            <ListOfGifs keyword={keyword}/>
        </div>
            );
}
export default GifViewer;