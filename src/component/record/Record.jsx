import League from "./League";
import Schedule from "./Schedule";
import Contents from "./contents/Contents"

function Record(){
    return (
        <div style={{height:"112px", position:"absolute", width:"100%"}}>
            <League type={"record"}/>
            <Schedule />
        </div>
    )
}

export default Record
