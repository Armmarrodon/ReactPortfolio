import './App.css';
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { useEffect, useState } from 'react';
import LeftMenuEntry from './components/LeftMenuEntry.js';
import DropDownMenu from './components/DropDownMenu.js';
import DropDownItem from './components/DropDownItem.js';
import OverviewProjects from './components/OverviewProjects.js';
import ProceduralPlanetViewer from './components/ProceduralPlanetViewer.js';


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

    useEffect(() => {

        console.log('IDViewerÙpdate: ', { viewerID });
    }, [viewerID]);

    useEffect(() => {

        console.log('changeFaderHolder: ', { actualFaderHold });
    }, [actualFaderHold]);
    useEffect(() => {

        console.log('test: ', { test });
    }, [test]);

    function HandleClickToStart(event) {


        setactualFaderHold(<div />);
        setOverViewOpen(<div />)

        setViewerFade(actualFaderHold);
        setViewerID(0);

    };
    async function  handleClickIn (event, id,ms) {

        setTest(test + 1);
        setOverViewOpen(arrayInPages[id]);
        if (id != viewerID) {
            await delay(ms);
            setViewerFade(actualFaderHold);
         
            setViewerID(id);
        }
   
        setactualFaderHold(arrayOutPages[id]);

    };
    /*pages*/

    const overView = <OverviewProjects fn={handleClickIn} nameClass={"viewer"} animationOut={"polaAnimController"} fun={this} />;

    const overViewOut = <OverviewProjects fn={handleClickIn} nameClass={"viewer"} animationOut={"polaAnimControllerOut"} />;
    const planetProjectView = <ProceduralPlanetViewer />;
    const [actualViewer, setactualViewer] = useState(<div />);
    const inicio = <div />;
    let arrayInPages = [ inicio, overView, planetProjectView ];
    let arrayOutPages = [ inicio, overViewOut, inicio ];


  
   
    /*-----------------*/
    const header = <header>
        
        <h1 className="title" onClick={event => HandleClickToStart(event, actualFaderHold)}>Juan Mart&iacute;n Rodr&iacute;guez</h1>
        
        <h1 className="title2">JMR</h1>
        <div className="menuOutline"><AiOutlineMenu color="rgba(249, 211, 180, 0.6)" size="50px" /> </div>
    </header>
    const barraMenu = <div className="barraMenu" >
        <LeftMenuEntry name="Projects" number={numberOfItemsOnMenuBar} >
            
            <DropDownMenu number={numberOfItemsOnMenuBar} >
                <div onClick={event => handleClickIn(event, 1)}>
                <DropDownItem number={numberOfItemsOnMenuBar}>
                      Overview
                    </DropDownItem>
                </div>
                <div onClick={event => handleClickIn(event, 2)}>
                <DropDownItem number={numberOfItemsOnMenuBar} >
                        ProceduralPlanet
                </DropDownItem>
                </div>
                <div onClick={event => handleClickIn(event, 3)}>
                    <DropDownItem number={numberOfItemsOnMenuBar} >
                        Modelling
                    </DropDownItem>
                </div>
                <div onClick={event => handleClickIn(event, 3)}>
                    <DropDownItem number={numberOfItemsOnMenuBar} >
                        Animation
                    </DropDownItem>
                </div>
            </DropDownMenu>
        </LeftMenuEntry>
        <LeftMenuEntry name="No projects" number={numberOfItemsOnMenuBar} >

            <DropDownMenu number={numberOfItemsOnMenuBar} >
                <DropDownItem number={numberOfItemsOnMenuBar}>
                        test1
                    </DropDownItem>
                <DropDownItem number={numberOfItemsOnMenuBar}>
                        test2
                    </DropDownItem>
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
