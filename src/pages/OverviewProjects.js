
import PolaTemplate from "../textures/polaroidTemplate.jpg";
import PolaPlanet from "../textures/polaplanet.jpg";
import PolaChincheta from "../textures/chincheta.svg";
import PolaroidImage from '../components/PolaroidImage.js';
import PolaGargola from '../textures/gargola.jpg';
import PolaScary from '../textures/spiderSPP.jpg';
import { useEffect, useState } from 'react';
import React from 'react';


function OverviewProjects(props) {
  
    const size=0.3;    
    useEffect(() => {

        console.log('overview?:');
    }, []);
    return (<div >
        <div className={props.nameClass}>

        

            <PolaroidImage animationOut={props.animationOut} size={size} id={2} fn={props.fn} menuId={props.menuId} image={PolaPlanet} template={PolaTemplate}
                chincheta={PolaChincheta} />
            
         
            <PolaroidImage animationOut={props.animationOut} size={size} id={4} fn={props.fn} menuId={props.menuId} image={PolaGargola} template={PolaTemplate}
                chincheta={PolaChincheta} />
           
            
            <PolaroidImage animationOut={props.animationOut} size={size} id={3} fn={props.fn} menuId={props.menuId} image={PolaScary} template={PolaTemplate}
                chincheta={PolaChincheta} />
           
        </div>
    </div>);
}
export default OverviewProjects;