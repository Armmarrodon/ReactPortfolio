
function PolaroidImage(props)
{
    const blockSizeW = (props.size * 40.7) + "vw";
    const blockSizeH = (props.size * 49.1) + "vw";
    const marginSize = (props.size * 0) + "vw";
        
    const rotation = props.rotation;
    
    var sizeExp =  props.size;
   

    return (
        
        <div className="polaParent"
       >
            <div className={props.animationOut}>
                <div className="polaAnimController2">
        <img src={props.template} className="polaImage0" alt="wepale"
        
        />
        <img src={props.image} className="polaImage1" alt="wops"
       
          />
    
            </div>
                </div>
    </div>
    );
}
export default PolaroidImage;