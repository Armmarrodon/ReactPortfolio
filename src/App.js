import './App.css';
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { useEffect, useState } from 'react';
import LeftMenuEntry from './components/LeftMenuEntry.js';
import DropDownMenu from './components/DropDownMenu.js';
import DropDownItem from './components/DropDownItem.js';
import OverviewProjects from './pages/OverviewProjects.js';
import ProceduralPlanetViewer from './pages/ProceduralPlanetViewer.js';
import ScaryPPViewer from './pages/ScaryPPviewer.js';
import GifViewer from './pages/GifViewer.js';
import Viewer3D from './pages/Viewer3D';


function App() {
    
    
    const numberOfItemsOnMenuBar = "2";

    /* Logic manager*/
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const [overViewOpen, setOverViewOpen] = useState(<div />);
    const [viewerFader, setViewerFade] = useState(<div />);
    const [actualFaderHold, setactualFaderHold] = useState(<div />);
    const [viewerID, setViewerID] = useState(0);
    const [test, setTest] = useState(0);



   

    function HandleClickToStart(event) {


        setactualFaderHold(<div />);
        setOverViewOpen(<div />)

        setViewerFade(actualFaderHold);
        setViewerID(0);

    };
    async function  handleClickIn (event, id,ms,menuId) {

        setTest(test + 1);

        setOverViewOpen(arrayOfArrays[menuId][id]);
    
        if (id != viewerID) {
            await delay(ms);
            setViewerFade(actualFaderHold);
         
            setViewerID(id);
        } if (id = 1) {
            setactualFaderHold(arrayOutPages[id]);
        } else { setactualFaderHold(arrayOutPages[0]); }

    };
    /*pages*/


    const overView = <OverviewProjects fn={handleClickIn} nameClass={"viewer"} animationOut={"polaAnimController"} fun={this} menuId={0} />;
    const overViewOut = <OverviewProjects fn={handleClickIn} nameClass={"viewer"} animationOut={"polaAnimControllerOut"} menuId={ 0} />;
    const planetProjectView = <ProceduralPlanetViewer />;
    const sppProjectView = <ScaryPPViewer />
    const gifView = <GifViewer />
    const view3D = <Viewer3D />
   
    const inicio = <div />;
  
    let arrayProjectPages = [inicio, overView, planetProjectView, sppProjectView, view3D];
    let arrayNoProjectsPages = [gifView];
    let arrayOfArrays = [arrayProjectPages, arrayNoProjectsPages];

    let arrayOutPages = [inicio/*, overViewOut*/];
   

    useEffect(() => {
        
        console.log('IDViewerÙpdate: ', { viewerID});
    }, [viewerID]);
    /*-----------------*/
    const header = <header>
        
        <h1 className="title" onClick={event => HandleClickToStart(event, actualFaderHold)}>Juan Mart&iacute;n Rodr&iacute;guez (UnderConstruction)</h1>
        
        <h1 className="title2">JMR (UnderConstruction)</h1>
        <div className="menuOutline"><AiOutlineMenu color="rgba(249, 211, 180, 0.6)" size="50px" /> </div>
    </header>
    const barraMenu = <div className="barraMenu" >
        <LeftMenuEntry name="Projects" number={numberOfItemsOnMenuBar} >          
            <DropDownMenu number={numberOfItemsOnMenuBar} >
                <DropDownItem number={numberOfItemsOnMenuBar} text="Overview" fn={handleClickIn} id={1} menuId={0} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="Procedural Planet" fn={handleClickIn} id={2} menuId={0}/>
                <DropDownItem number={numberOfItemsOnMenuBar} text="Lizardprint Animation" fn={handleClickIn} id={3} menuId={0} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="Viewer3D" fn={handleClickIn} id={4} menuId={0} />
              
            </DropDownMenu>
        </LeftMenuEntry>
        <LeftMenuEntry name="No projects" number={numberOfItemsOnMenuBar} >
            <DropDownMenu number={numberOfItemsOnMenuBar} >
                <DropDownItem number={numberOfItemsOnMenuBar} text="GIFTest" fn={handleClickIn} id={0} menuId={1}/>
                <DropDownItem number={numberOfItemsOnMenuBar} text="test2"/>
             </DropDownMenu>
        </LeftMenuEntry>
    </div>
    const eso = 2;
    
    
  
    
    
    return (
        <div className="app" >
            {header}
            {barraMenu}
            {overViewOpen}
            {viewerFader}
            
        
        </div>
  );
}

export default App;
