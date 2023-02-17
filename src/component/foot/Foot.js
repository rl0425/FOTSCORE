import classes from "./Foot.module.css"

function Foot(){
    return(
        <div className={classes.box}>
            <div className={classes.contents}>기록</div>
            <div className={classes.contents}>뉴스</div>
            <div className={classes.contents}>팀 정보</div>
        </div>
    )
}

export default Foot
