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
        <div className="gifViewer">
            <div className="inputBox">
                <label >Gif to search:</label>
                <input ref={inputRef} type="text" id="name" name="name"/>
                <button onClick={() => HandleClickButton()} >Search Gifs</button>
            </div>
        <div className="gifDisplay">
            <ListOfGifs keyword={keyword}/>
            </div>
            </div>
            );
}
export default GifViewer;