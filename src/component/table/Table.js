import {useEffect, useState} from "react";
import classes from "./Table.module.css";
import {useSelector, useDispatch} from "react-redux";
import League from "../record/League";
import Teams from "./Teams";
import {v4 as uuidv4} from "uuid";
import {leagueActions} from "../../store/league-slice";

function Table(){
    const active = useSelector((state) => state.setting.page)
    const league = useSelector((state) => state.league.rankLink)
    const loading = useSelector((state) => state.league.rankLoading);
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    const getData = async () => {
        const temp = await fetch(`https://site.api.espn.com/apis/v2/sports/soccer/${league}/standings`).then((res) => res.json())

        setData(temp.children[0].standings.entries)
        dispatch(leagueActions.changeRankLoading({loading:false}))
    }

    useEffect(() =>{
        getData()
    }, [league])

    return (
        <div className={active === "team" ? classes.box : classes.unBox}>
            <League type={"rank"}/>
            <div className={classes.tableHead}>
                <div className={classes.rank}><span>순위</span></div>
                <div className={classes.team}><span>팀</span></div>
                <div className={classes.round}><span>경기 수</span></div>
                <div className={classes.score}><span>승점</span></div>
                <div className={classes.win}><span>승</span></div>
                <div className={classes.draw}><span>무</span></div>
                <div className={classes.defeat}><span>패</span></div>
            </div>
            {loading ? <div className={classes.loading}><img src={"/image/loading.gif"}/></div> :
                <div className={classes.tableMain}>
                    {data.map((ele, index) => {
                        return <Teams data={ele} index={index} key={uuidv4()}/>
                    })}
                </div>
            }
        </div>
    )
}

export default Table
