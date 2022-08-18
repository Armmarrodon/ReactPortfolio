import { useState } from 'react';


function LeftMenuEntry(props) {
    const valuewidth = (99 / props.number) + "vw";
    const valueMargins = (0.5 / props.number) + "vw";

    const [open, setOpen] = useState(false);

    


    return (
        <li className="menuEntry"
            style={{
                "width": valuewidth, "marginInline": valueMargins,
            }}
            onClick={() => setOpen(!open)}
            onMouseLeave={()=> setOpen(false)}>
            <div className="menuEntryText" >{props.name}</div>
            {open && props.children }
        </li>);
}
export default LeftMenuEntry;