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

        setList(temp)
        setSelectLeague(parameter)
    }

    return (
        <article className={classes.leagueBox}>
            <div onClick={menuClickEvt} className={`${classes.box} ${selectLeague === "premier" ? classes.premier : selectLeague === "laliga" ? classes.laliga : selectLeague === "bundesliga" ? classes.bundesliga : classes.seriea}`}>
                <div className={selectLeague === "bundesliga" ? classes.bundesSelected : classes.selected}><img src={`/image/${selectLeague}.png`}/></div>
                <div className={click ? classes.arrow : classes.noArrow}></div>
            </div>
            <div className={click ? classes.selectBox : classes.noSelect}>
                {leagueList.includes("premier") ? <LeagueDetail onCilck={leagueCilckEvt} league={"premier"} link={"eng.1"} type={props.type}/> : "" }
                {leagueList.includes("laliga") ? <LeagueDetail onCilck={leagueCilckEvt} league={"laliga"} link={"esp.1"} type={props.type}/> : "" }
                {leagueList.includes("bundesliga") ? <LeagueDetail onCilck={leagueCilckEvt} league={"bundesliga"} link={"ger.1"} type={props.type}/> : ""}
                {leagueList.includes("seriea") ? <LeagueDetail onCilck={leagueCilckEvt} league={"seriea"} link={"ita.1"} type={props.type}/> : ""}
            </div>
        </article>
    )
}

export default League
