
import PlanetFranja from '../textures/franjaPla.jpg';
import Pola_planet from '../textures/polaplanet.jpg';
import Pola_planet2 from '../textures/image_001_0065.jpg';
import Pola_planet3 from '../textures/Captura.JPG';
import Pola_planet4 from '../textures/planetUV.jpg';

function ProceduralPlanetViewer(props) {
    return (
        <div>
            <div className= "projectPlanet">
                <img src={PlanetFranja} className="franjaProject" alt="wepale" />
                <div className="bodyProject">
                    <div className="file">
                        <div className="textPa">
                            
                                 <div className="titleProject"> Procedural Planet</div>
                                 <div className="bodyp"> &emsp; In the development of video games, procedural construction has been used since the first
                                virtual scenarios,  this is my attempt to build my own world.
                                <br/>
                                &emsp; The main goal of this project was to build a procedural world with land, sea generation
                                and different biomes, the world is divided in tiles with different values for height, temperature, moisture, wind, etc.
                                This was built as a personal project and I was thinking of using it as a starting point
                                to build a game like civilization or europa universalis, so this is my first approach to world generation.
                            </div>
                           
                        
                        </div>
                        <div className="titleProject">
                            <img src={Pola_planet2} className="columnImage1920" alt="pop" />
                        </div>
                        </div>
             
                   


                    <div className="file">
                     
                        <div className="textPa">

                            <div className="titleProject2"> Functional approach</div>
                            <p className="bodyp">
                                &emsp; In previous versions I used Unity gameObject as tiles
                                and that turned out to be a very bad idea from a perform point of view.
                                <br/>
                                  &emsp; So in this version I used an ichosaedran mesh to build the sphere and make
                                the UVs on a way were distortion is minimal. Then use a database with an
                                array of tiles to store the tile data, this database starts empty
                                and its filled through the use of different algorithms.     <br />
                                &emsp; At first i started using some layers of 3D perlin noise to build the height map
                                then the coast line is generated having in count the percentage of land and sea desired.
                                <br /> &emsp; Then we build winds using random vortex on sea for ocean currents propagation and some atmospheric
                                air vortex for temperature and moisture propagation.
                                <br /> &emsp; Then having all that values we initialize tiles and pass the temperature and moisture
                                propagation algorithm multiple times until we have a good approach of values on all the tiles, then
                                this data is used to generate different textures, for moisture, temperature, snow, etc,
                                Finally this different textures are used on a shader to build the final material that show the biomas.
                                
                            </p>

                        </div>
                       

                    </div>
                    <div className="file">
                    <div className="titleProject">
                        <img src={Pola_planet4} className="columnImage1920full" alt="pop" />
                        </div>
                        <div className="titleProject">
                            <img src={Pola_planet3} className="columnImage1920full" alt="pop" />
                        </div>
                        </div>
                </div>
               
            </div>
            </div>
        

        )

}
export default ProceduralPlanetViewer;