
import PolaTemplate from "../textures/polaroidTemplate.jpg";
import PolaPlanet from "../textures/polaplanet.jpg";
import PolaChincheta from "../textures/chincheta.svg";
import PolaroidImage from '../components/PolaroidImage.js';
import PolaGargola from '../textures/gargola.jpg';
import PolaScary from '../textures/spiderSPP.jpg';
import { useEffect, useState } from 'react';
import React from 'react';


function OverviewProjects(props) {
    const [nameTest, setNameTest] = useState("pop");
    const size=0.3;
    const blockSizeW = (size * 40.7) + "vw";
    const blockSizeH = (size * 49.1) + "vw";
    const marginSize = (size * 1) + "vw";
    
    useEffect(() => {

        console.log('nameTest?: ', { nameTest });
    }, [nameTest]);
    return (<div >
        <div className={props.nameClass}>
            
            <div onClick={event => { props.fn(event, 2, 1000) }}
                style={{
                    "width": blockSizeW, "height": blockSizeH, "margin": marginSize
                    , transform: `scale(${size})`
                }}>
                
                <PolaroidImage animationOut={props.animationOut}  image={PolaPlanet} template={PolaTemplate} chincheta={PolaChincheta} />
            </div>
            <div style={{
                "width": blockSizeW, "height": blockSizeH, "margin": marginSize
                , transform: `scale(${size})`
            }}>
                <PolaroidImage animationOut={props.animationOut} rotation={0} size={size} image={PolaGargola} template={PolaTemplate} chincheta={PolaChincheta} />
            </div>
            <div style={{
                "width": blockSizeW, "height": blockSizeH, "margin": marginSize
                , transform: `scale(${size})`
            }}>
                <PolaroidImage animationOut={props.animationOut} rotation={0} size={size} image={PolaScary} template={PolaTemplate} chincheta={PolaChincheta} />
            </div>
        </div>
    </div>);
}
export default OverviewProjects;