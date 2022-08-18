import { useState } from 'react';


function DropDownMenu(props) {
    const valuewidth = (99 / props.number) + "vw";
   
   
   
    return (
        <div className="dropdown" style={{ "width":valuewidth }}>
            { props.children}
        </div>
       );
}
export default DropDownMenu;