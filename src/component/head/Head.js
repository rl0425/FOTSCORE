import classes from "./Head.module.css"

function Head(){
    return (
        <div className={classes.title}>
            <span>FOTSCORE</span>
            <img src={"/image/logo_ball.png"}/>
        </div>
    )
}

export default Head
