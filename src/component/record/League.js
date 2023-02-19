import classes from "./League.module.css"

function League(props){


    function clickEvt(){

    }

    return (
        <div>
            <div className={classes.box}>
                <div className={classes.img}><img src={"/image/premierL.png"}/></div>
                <div className={classes.arrow}></div>
            </div>
            <div className={classes.box}>
                <div className={classes.img}><img src={"/image/premierL.png"}/></div>
                <div className={classes.img}><img src={"/image/premierL.png"}/></div>
                <div className={classes.img}><img src={"/image/premierL.png"}/></div>
                <div className={classes.img}><img src={"/image/premierL.png"}/></div>
            </div>
        </div>
    )
}

export default League
