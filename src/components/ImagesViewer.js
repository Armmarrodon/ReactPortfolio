import React, { useEffect, useState } from 'react';



import '../styles/Gif.css';
import ImportImages from '../services/ImportImages.js';
import ForOnImages from '../services/ForOnImages.js';


function ImagesViewer(props) {

    const [images, setImages] = useState(ImportImages(require.context('../textures/' + 'Model3DImages', false, /\.(png|jpe?g|svg|JPG)$/)));

    useEffect(() => {

        console.log('path: ', props.folder);
        if (props.folder == "Model3DImages") {
            setImages(ImportImages(require.context('../textures/Model3DImages', false, /\.(png|jpe?g|svg|JPG)$/)));
        } else
            if (props.folder == "orcs")
        {
                setImages(ImportImages(require.context('../textures/AIinvestigation/orcs', false, /\.(png|jpe?g|svg|JPG)$/)));
            } if (props.folder == "landScapes") {
                setImages(ImportImages(require.context('../textures/AIinvestigation/landScapes/tedNasmithStyle', false, /\.(png|jpe?g|svg|JPG)$/)));
        }
    }, []);
   
   
    return (
        <div className="gifDisplay">

            {
                ForOnImages(images)
            }

        </div>
    );
}
export default ImagesViewer;