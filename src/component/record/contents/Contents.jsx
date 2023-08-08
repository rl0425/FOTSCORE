import {useCallback, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Game from "./Game";
import moment from "moment";
import classes from "./Contents.module.css"
import {leagueActions} from "../../../store/league-slice";
import Schedule from "../Schedule";
import Record from "../Record";

function Contents(){
    const [data, setData ] = useState([])
    const [times, setTime ] = useState([])

    const league = useSelector((state) => state.league.link);
    const loading = useSelector((state) => state.league.loading);
    const date = useSelector((state) => state.league.date);

    const dispatch = useDispatch();

    const getData = async () => {
        const dateForm = parseInt(moment(new Date()).subtract("d",2).format("YYYYMMDD"))
        const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/scoreboard?&dates=${dateForm}-${dateForm+2}`).then((res) => res.json());
        const event = res.events.filter((data) =>{
            if(new Date(date).getDate() === new Date(data.date).getDate()) {
                return data
            }
        })

        setData(event)
        getTime(event)
        dispatch(leagueActions.changeLoading());
    }

    const getTime = useCallback((evt) => {
        const timeSet = []

        if(evt) {
            evt.map((ele) => {
                const Dates = new Date(ele.date)
                const time = (String(Dates.getHours() < 10 ? "0" + Dates.getHours() : Dates.getHours())+ " : " + String(Dates.getMinutes() < 10 ? "0" + Dates.getMinutes() : Dates.getMinutes()))

                if (!timeSet.includes(time)) {
                    timeSet.push(time)
                }
            })
        }
        setTime(timeSet)
    }, [])

    useEffect(() => {
        getData();
    }, [league, date]);

    return (
        <div className={classes.box}>
            <Record />
            {!loading ? <Game datas={data} times={times}/> : <div className={classes.loading}><img src={"/image/loading.gif"}/></div>}
        </div>
    )
}

export default Contents
