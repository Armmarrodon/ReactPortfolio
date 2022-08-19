import { useState } from 'react';
function DropDownItem(props) {
    const valuewidth = (60 / props.number) + "vw";
    return (<a  className="menu-item" style={{ "width": valuewidth }}>
        {props.children}
    </a>
    );
}
export default DropDownItem;