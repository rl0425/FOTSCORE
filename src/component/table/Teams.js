import classes from "./Teams.module.css";
import {useState} from "react"

function Teams(props){
    const [animation, setAnimation] = useState(false);
    const data = props.data
    let participate = null

    const tempData = {
        rank: data.stats.find((ele) => {
            if(ele.name === 'rank'){
                return ele
            }
        }),
        round: data.stats.find((ele) => {
            if(ele.name === 'gamesPlayed'){
                return ele
            }
        }),
        score: data.stats.find((ele) => {
            if(ele.name === 'points'){
                return ele
            }
        }),
        win: data.stats.find((ele) => {
            if(ele.name === 'wins'){
                return ele
            }
        }),
        draw: data.stats.find((ele) => {
            if(ele.name === 'ties'){
                return ele
            }
        }),
        defeat: data.stats.find((ele) => {
            if(ele.name === 'losses'){
                return ele
            }
        }),
        ticket: data.stats.find((ele) => {
            if(ele.name === 'rank'){
                if(ele.value <= 4){
                    participate = classes.champions
                }
                else if(ele.value <= 6){
                    participate = classes.europa
                }
                else{
                    participate = classes.none
                }
            }
        })
    }

    setTimeout(() => {
        setAnimation(true)
    }, 50 * (props.index + 1) )

    return (
        <div className={!animation ? classes.noBox : props.index % 2 !== 0 ? `${classes.box} ${classes.boxBackground}` : classes.box}>
            <div className={`${classes.rank} ${participate}`}><span>{tempData.rank.value}</span></div>
            <div className={classes.team}><div><img src={data.team.logos[0].href}/><span>{data.team.shortDisplayName}</span></div></div>
            <div className={classes.round}><span>{tempData.round.value}</span></div>
            <div className={classes.score}><span>{tempData.score.value}</span></div>
            <div className={classes.win}><span>{tempData.win.value}</span></div>
            <div className={classes.draw}><span>{tempData.draw.value}</span></div>
            <div className={classes.defeat}><span>{tempData.defeat.value}</span></div>
        </div>
    )
}

export default Teams
