import classes from "./Teams.module.css";

function Teams(props){
    const data = props.data
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
        })
    }

    console.log("tempData = ", tempData)

    return (
        <div className={classes.box}>
            <div className={classes.rank}><span>{tempData.rank.value}</span></div>
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