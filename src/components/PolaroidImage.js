
function PolaroidImage(props)
{
    const blockSizeW = (props.size * 40.7) + "vw";
    const blockSizeH = (props.size * 49.1) + "vw";
    const marginSize = (props.size * 1) + "vw";
        
  
   

    return (
        <div onClick={event => { props.fn(event, props.id, 1000, props.menuId) }}
            style={{
                "width": blockSizeW, "height": blockSizeH, "margin": marginSize
                , transform: `scale(${props.size})`
            }}>
        <div className="polaParent">
            <div className={props.animationOut}>
                <div className="polaAnimController2">
                    <img src={props.template} className="polaImage0" alt="wepale"/>
                    <img src={props.image} className="polaImage1" alt="wops" />
                </div>
            </div>
            </div>
            </div>
    );
}
export default PolaroidImage;