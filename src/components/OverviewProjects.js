
import PolaTemplate from "../textures/polaroidTemplate.jpg";
import PolaPlanet from "../textures/_pola_planet.jpg";
import PolaChincheta from "../textures/chincheta.svg";
import PolaroidImage from '../components/PolaroidImage.js';
import PolaGargola from '../textures/gargola.jpg';
import { useEffect, useState } from 'react';
import React from 'react';


function OverviewProjects(props) {
    const [nameTest, setNameTest] = useState("pop");
  
    
    useEffect(() => {

        console.log('nameTest?: ', { nameTest });
    }, [nameTest]);
    return (<div ><div className={props.nameClass}>
        <div onClick={event => { props.fn(event, 2,1000)}}> <PolaroidImage animationOut={props.animationOut} rotation={4} size={0.6} image={PolaPlanet} template={PolaTemplate} chincheta={PolaChincheta} /></div>
        <div><PolaroidImage animationOut={props.animationOut} rotation={-4} size={0.6} image={PolaGargola} template={PolaTemplate} chincheta={PolaChincheta} /></div>
    </div></div>);
}
export default OverviewProjects;