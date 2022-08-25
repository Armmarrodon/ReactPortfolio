import Franja from '../textures/franjaSPP.jpg';

import gif1 from '../textures/esc35-3846-3869.gif';
import gif2 from '../textures/gif_walkCycle_007.gif';
import Pola_planet4 from '../textures/planetUV.jpg';
import Pola_planetHeight from '../textures/image_004_0000.jpg';
import Pola_planetMoisture from '../textures/image_003_0000.jpg';
import Pola_planetTemperature from '../textures/image_002_0000.jpg';
import Pola_planetBioma from '../textures/image_001_0000.jpg';

function ScaryPPviewer(props) {
    return (
        <div>
            <div className="projectPlanet">
                <img src={Franja} className="franjaProject" alt="wepale" />
                <div className="bodyProject">
                    <div className="file">
                        <div className="textPa">

                            <div className="titleProject"> LizardPrint animation</div>
                            <div className="bodyp"> &emsp;

                                During 2021 the animator <a href="https://mocaran.com/">Mocaran</a> asked me to do some 3D animations for Alejandro Aranda's (<a href="https://www.youtube.com/c/scarypoolparty">Scarypoolparty</a>) song lizardprint.
                                <br />&emsp; He asked me to make a 3D spider monster, animate it and do some tentacles animations coming from it.
                                I rendered everything in Unity using custom shaders. I built some tools specifally for it,like all the tentacles rigging
                             around the monster or the ones that follow the character during the song
                            </div>


                        </div>
                        <div className="titleProject">
                            <div className="youtubeBox">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S9bahVxUr6Y"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                                </div>
                        </div>
                    </div>




                    
                    <div className="file">
                        <div className="titleProject">
                            <img src={gif1} className="columnImage1920full" alt="pop" />
                        </div>
                        <div className="titleProject">
                            <img src={gif2} className="columnImage1920full" alt="pop" />
                        </div>
                    </div>
           
                </div>
            </div>

        </div>



    )

}
export default ScaryPPviewer;