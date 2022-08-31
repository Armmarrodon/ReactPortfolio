import React from 'react';

function Gif(props)
{/*<h4>{props.title}</h4>
        <small>{props.id}</small>*/
    return <img className="gif" alt={props.title} src={props.url} />
        
      
  
}
export default Gif;