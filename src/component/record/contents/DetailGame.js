import classes from "./DetailGame.module.css"
import {useEffect, useState} from "react";

function DetailGame(props) {
    const data = props.datas
    const team = data.competitions[0].competitors

    const [detail, setDetail] = useState([])

    function getDetails(){
        if(data.competitions[0].details) {
            const tmp = []

            data.competitions[0].details.forEach((item) => {
                tmp.push({
                    teamName: item.team.id === team[0].id ? "left" : "right",
                    type: item.redCard ? "red_card" : item.yellowCard ? "yellow_card" : item.scoreValue ? "goal" : "none",
                    player: item.athletesInvolved[0].shortName,
                    clock: item.clock.displayValue
                })
            })
            setDetail(tmp)
        }
    }

    useEffect( () => {
        getDetails()
    },[])

    return (
        <div className={classes.gameBox}>
            <div key={data.id} className={classes.box}>
                <div className={classes.content} style={{width: "33%", justifyContent: "flex-start"}}>
                    <img className={classes.teamLogo} src={team[0].team.logo} style={{paddingLeft: "16px"}}/> <span style={{marginLeft: "4px" , textAlign: "left"}}>{team[0].team.shortDisplayName}</span>
                </div>
                <div className={classes.content} style={{minWidth: "33%", fontSize:"14px"}}>
                    <span>{team[0].score} : {team[1].score}</span>
                </div>
                <div className={classes.content} style={{width: "33%", justifyContent: "flex-end"}}>
                    <span style={{marginRight: "4px", textAlign: "right"}}>{team[1].team.shortDisplayName}</span>
                    <img className={classes.teamLogo} src={team[1].team.logo} style={{paddingRight: "12px"}}/>
                    <div className={classes.detail}  style={{paddingRight: "12px"}}><img src={"/image/arrow.png"} /></div>
                </div>
            </div>
            <div className={classes.detailDiv}>
                {
                    detail.map((item) =>{
                    console.log("data =", data.name)
                    console.log("item =", detail)

                    return (
                        <div className={classes.detailBox}>
                            { item.teamName === "left" ?
                                <div style={{justifyContent: "flex-start", paddingLeft: "12px"}}><img src={`/image/${item.type}.png`}/><span style={{paddingLeft:"8px", textAlign:"left"}}>{item.player}</span></div> :
                                <div></div>
                            }
                            <div>{item.clock}</div>
                            { item.teamName === "right" ?
                                <div style={{justifyContent: "flex-end", paddingRight: "12px"}}><span style={{paddingRight:"8px", textAlign:"right"}}>{item.player}</span><img src={`/image/${item.type}.png`}/></div> :
                                <div></div>

                            }
                        </div>
                    )
                })}
                <div>

                </div>
            </div>
        </div>
    )
}

export default DetailGame
