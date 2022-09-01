import { useState } from 'react';
function DropDownItem(props) {
    const valuewidth = (60 / props.number) + "vw";
    return (
        <div onClick={event => { props.fn(event, props.id, 0, props.menuId) }}>
        <a className="menu-item" style={{ "width": valuewidth }}>
            {props.children}
            {props.text}
            </a>
         </div>
    );
}
export default DropDownItem;