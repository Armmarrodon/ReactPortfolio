import React from 'react';

function Gif(props)
{
    return <div>
        <h4>{props.title}</h4>
        <small>{props.id}</small>
        <img alt={props.title} src={props.url} />
    </div>
}
export default Gif;