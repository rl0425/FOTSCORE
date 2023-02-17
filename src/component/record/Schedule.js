import classes from "./Schedule.module.css"

function Schedule(){
    return (
        <div className={classes.box}>
            <div><span>어제</span></div>
            <div><span>오늘</span><img className={classes.schedule} src={"/image/calender.png"}/></div>
            <div><span>내일</span></div>
        </div>
    )
}

export default Schedule
