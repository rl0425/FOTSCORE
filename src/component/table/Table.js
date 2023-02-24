import {useEffect, useState} from "react";
import classes from "./Table.module.css";
import {useSelector} from "react-redux";
import League from "../record/League";
import Teams from "./Teams";
import {v4 as uuidv4} from "uuid";

function Table(){
    const active = useSelector((state) => state.setting.page)
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        const temp = await fetch("https://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings").then((res) => res.json())
        console.log("tmep = ", temp.children[0].standings.entries)
        setData(temp.children[0].standings.entries)
        setLoading(false)
    }

    useEffect(() =>{
        getData()
    }, [])

    return (
        <div className={active === "team" ? classes.box : classes.unBox}>
            <League />
            {isLoading ? <div>로딩</div> :
                <div>
                    <div className={classes.tableHead}>
                        <div className={classes.rank}><span>순위</span></div>
                        <div className={classes.team}><span>팀</span></div>
                        <div className={classes.round}><span>경기 수</span></div>
                        <div className={classes.score}><span>승점</span></div>
                        <div className={classes.win}><span>승</span></div>
                        <div className={classes.draw}><span>무</span></div>
                        <div className={classes.defeat}><span>패</span></div>
                    </div>
                    {data.map((ele) => {
                        return <Teams data={ele} key={uuidv4()}/>
                    })}

                </div>
            }
        </div>
    )
}

export default Table