import classes from "./League.module.css"
import {useState} from "react";
import LeagueDetail from "./LeagueDetail";

function League(props){
    const [click, setClick] = useState(false)
    const [leagueList, setList] = useState(["laliga", "bundesliga", "seriea"])
    const [selectLeague, setSelectLeague] = useState("premier")

    function menuClickEvt(e){
        setClick(!click)
    }

    function leagueCilckEvt(parameter){
        setClick(!click)

        const temp = ["laliga", "bundesliga", "seriea", "premier"].filter((data) =>{
            return data !== parameter
        })

        console.log("temp = ", temp)
        setList(temp)
        setSelectLeague(parameter)

    }

    return (
        <div className={classes.leagueBox}>
            <div onClick={menuClickEvt} className={classes.box}>
                <div className={classes.img}><img src={`/image/${selectLeague}.png`}/></div>
                <div className={click ? classes.arrow : classes.noArrow}></div>
            </div>
            <div className={click ? classes.selectBox : classes.noSelect}>
                {leagueList.includes("premier") ? <LeagueDetail onCilck={leagueCilckEvt} league={"premier"} link={"eng.1"} /> : "" }
                {leagueList.includes("laliga") ? <LeagueDetail onCilck={leagueCilckEvt} league={"laliga"} link={"esp.1"}/> : "" }
                {leagueList.includes("bundesliga") ? <LeagueDetail onCilck={leagueCilckEvt} league={"bundesliga"} link={"ger.1"}/> : ""}
                {leagueList.includes("seriea") ? <LeagueDetail onCilck={leagueCilckEvt} league={"seriea"} link={"ita.1"} /> : ""}
            </div>
        </div>
    )
}

export default League
