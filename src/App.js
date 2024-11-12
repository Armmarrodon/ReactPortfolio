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
import StatisticExercises from './pages/StatisticExercises';
import ViewerAIinvestigation from './pages/ViewerAIinvestigation';
import ImagesViewer from './components/ImagesViewer.js';
import XLSXImport from './pages/XLSXImport.js';
import VRShower from './pages/VRShower.js';

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
    const [menuID, setMenuID] = useState(0);
    const [test, setTest] = useState(0);

    function HandleClickToStart(event) {
        setactualFaderHold(<div />);
        setOverViewOpen(<div />)
        setViewerFade(actualFaderHold);
        setViewerID(0);
    };
    async function  handleClickIn (event, id,ms,menuId) {
        setTest(test + 1);
        setOverViewOpen(arrayOfMenus[menuId][id]);
        if (id != viewerID) {
            await delay(ms);
            setViewerFade(actualFaderHold);
            setMenuID(menuId);
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
    const statisticsEx = <StatisticExercises />
    const AiView = <ViewerAIinvestigation fn={handleClickIn} menuId={1} nameClass={"viewer"} />
    const XLImport = <XLSXImport />
    const VRshow = <VRShower/>
    const orcAI = <ImagesViewer folder='orcs' />
    const landScapesAI = <ImagesViewer folder='landScapes' />

    const inicio = <div />;
  
    let arrayProjectPages = [inicio, overView, planetProjectView, sppProjectView, view3D, statisticsEx, VRshow];
    let arrayNoProjectsPages = [gifView, AiView];
    /*pagesAI*/
    let arraAiInv = [orcAI,landScapesAI];


    let arrayOfMenus = [arrayProjectPages, arrayNoProjectsPages,arraAiInv];

    let arrayOutPages = [inicio/*, overViewOut*/];
   

    useEffect(() => {
        
        console.log('IDViewerUpdate: ', { viewerID });
        console.log('menuUpdate: ', { menuID });

    }, [viewerID, menuID]);
    /*-----------------*/
    const header = <header>  
        <h1 className="title" onClick={event => HandleClickToStart(event, actualFaderHold)}>Juan Mart&iacute;n Rodr&iacute;guez (UnderConstruction 12/01/2024)</h1>
        <h1 className="title2">JMR (UnderConstruction)</h1>
        <div className="menuOutline"><AiOutlineMenu color="rgba(249, 211, 180, 0.6)" size="50px" /> </div>
    </header>
    const barraMenu = <div className="barraMenu" >
        <LeftMenuEntry name="Projects" number={numberOfItemsOnMenuBar} >          
            <DropDownMenu number={numberOfItemsOnMenuBar} >
               
                <DropDownItem number={numberOfItemsOnMenuBar} text="Procedural Planet" fn={handleClickIn} id={2} menuId={0}/>
                <DropDownItem number={numberOfItemsOnMenuBar} text="Lizardprint Animation" fn={handleClickIn} id={3} menuId={0} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="VR" fn={handleClickIn} id={6} menuId={0} />
            </DropDownMenu>
        </LeftMenuEntry>
        <LeftMenuEntry name="Tests" number={numberOfItemsOnMenuBar} >
            <DropDownMenu number={numberOfItemsOnMenuBar} >
                <DropDownItem number={numberOfItemsOnMenuBar} text="GIFTest" fn={handleClickIn} id={0} menuId={1} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="AiInvestigation" fn={handleClickIn} id={1} menuId={1} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="test2"/>
                <DropDownItem number={numberOfItemsOnMenuBar} text="Viewer3D" fn={handleClickIn} id={4} menuId={0} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="Overview" fn={handleClickIn} id={1} menuId={0} />
                <DropDownItem number={numberOfItemsOnMenuBar} text="Statistic Overview" fn={handleClickIn} id={5} menuId={0} />
             </DropDownMenu>
        </LeftMenuEntry>
    </div>
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
