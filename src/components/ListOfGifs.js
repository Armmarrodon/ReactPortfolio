import React, { useEffect, useState } from 'react';
import Gif from './Gif.js'
import getGifs from '../services/getGifs.js';


export default function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([]);
    useEffect(function () {
        console.log('actualizando gifs');
        getGifs({ keyword }).then(gifs => setGifs(gifs));
    }, [keyword])
    return gifs.map(({ id, title, url }) =>
        <Gif 
            key={id}
            title={title}
            url={url}
            id={id}
        />
    )
}