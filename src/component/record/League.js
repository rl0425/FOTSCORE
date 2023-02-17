import classes from "./League.module.css"

function League(){
    return (
        <div className={classes.box}>
            <div className={classes.img}><img src={"/image/premierL.png"}/></div>
            <div className={classes.arrow}></div>
        </div>
    )
}

export default League
