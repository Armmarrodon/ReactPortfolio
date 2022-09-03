import React, { useEffect, useState, useRef } from 'react';
import PolaroidImage from '../components/PolaroidImage.js';
import PolaChincheta from "../textures/chincheta.svg";
import PolaOrc from '../textures/AIinvestigation/orcs/1662129126618.png';
import PolaLand from '../textures/AIinvestigation/landScapes/tedNasmithStyle/297897884-1.png';
import PolaTemplate from "../textures/polaroidTemplate.jpg";

import '../styles/Gif.css';
import ImagesViewer from '../components/ImagesViewer.js';


function ViewerAIinvestigation(props) {
    const size = 0.3;
    const menuAiId = 2;

    return (<div >
        <div className={props.nameClass}>


        <PolaroidImage animationOut={props.animationOut} size={size} id={0} fn={props.fn} menuId={menuAiId} image={PolaOrc} template={PolaTemplate}
            chincheta={PolaChincheta} />
            <PolaroidImage animationOut={props.animationOut} size={size} id={1} fn={props.fn} menuId={menuAiId} image={PolaLand} template={PolaTemplate}
            chincheta={PolaChincheta} />
        </div>
    </div>);
}
export default ViewerAIinvestigation;