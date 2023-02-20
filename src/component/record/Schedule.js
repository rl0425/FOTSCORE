import classes from "./Schedule.module.css"
import moment from "moment";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {leagueActions} from "../../store/league-slice";

function Schedule(){
    const dispatch = useDispatch()
    const choiceDate = useSelector((state) => state.league.choiceDate);

    const changeLastDay = () => { dispatch(leagueActions.changeDate({date:moment(new Date()).subtract("d", 1), choiceDate:"last"}))}
    const changeToday = () => {dispatch(leagueActions.changeDate({date:moment(new Date()), choiceDate:"today"}))}
    const changeTomorrow = () => {dispatch(leagueActions.changeDate({date:moment(new Date()).add("d", 1), choiceDate:"tomorrow"}))}

    return (
        <div className={classes.box}>
            <div onClick={changeLastDay}><span className={choiceDate === "last" ? classes.choice : ""}>{moment(new Date()).subtract("d",1).format("MM.DD")}</span></div>
            <div onClick={changeToday}><span className={choiceDate === "today" ? classes.choice : ""}>{moment(new Date()).format("MM.DD")}</span></div>
            <div onClick={changeTomorrow}><span className={choiceDate === "tomorrow" ? classes.choice : ""}>{moment(new Date()).add("d",1).format("MM.DD")}</span></div>
        </div>
    )
}

export default Schedule
