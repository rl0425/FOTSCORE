import classes from "./DetailGame.module.css"
import {useEffect, useState, useRef} from "react";
import {v4 as uuidv4} from "uuid";

function DetailGame(props) {
    const data = props.datas
    const team = data.competitions[0].competitors

    const [detail, setDetail] = useState([])
    const [clicked, setClicked] = useState(false);
    const [animation, setAnimation] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const summaryClick = () => {
        console.log("data.links[0] =", data.links[0])
        window.open(data.links[0].href, '_blank')
    }

    const highlightClick = () => {
        window.open(data.links[1].href, '_blank')
    }

    const statClick = () => {
        window.open(data.links[2].href, '_blank')
    }

    function getDetails(){
        if(data.competitions[0].details) {
            const tmp = []

            data.competitions[0].details.map((item) => {
                tmp.push({
                    teamName: item.team.id === team[0].id ? "left" : "right",
                    type: item.redCard ? "red_card" : item.yellowCard ? "yellow_card" : item.scoreValue ? "goal" : "none",
                    player: item.athletesInvolved ? item.athletesInvolved[0].shortName : "none",
                    clock: item.clock.displayValue
                })
            })
            setDetail(tmp)
        }
    }

    useEffect( () => {
        getDetails()
        setTimeout(() => {
            setAnimation(true)
        }, 100 * (props.index + 1) )

    },[])

    return (
        <div className={clicked ? classes.gameBox : classes.gameBoxNone}>
            <div key={data.id} className={!animation ? classes.box : `${classes.box} ${classes.boxAnimated}`}>
                <div className={classes.content} style={{width: "33%", justifyContent: "flex-start"}}>
                    <img className={classes.teamLogo} src={team[0].team.logo} style={{paddingLeft: "16px"}}/>
                    <span className={team[0].winner ? classes.winner : team[1].winner ? classes.loser : classes.draw} style={{marginLeft: "4px" , textAlign: "left"}}>{team[0].team.shortDisplayName}</span>
                </div>
                <div className={classes.content} style={{minWidth: "33%", fontSize:"14px"}}>
                    <span>{team[0].score} : {team[1].score}</span>
                </div>
                <div className={classes.content} style={{width: "33%", justifyContent: "flex-end"}}>
                    <span className={team[1].winner ? classes.winner : team[0].winner ? classes.loser : classes.draw} style={{marginRight: "4px", textAlign: "right"}}>{team[1].team.shortDisplayName}</span>
                    <img className={classes.teamLogo} src={team[1].team.logo} style={{paddingRight: "12px"}}/>
                    <div onClick={handleClick} className={classes.detail}  style={{paddingRight: "12px"}}><img src={"/image/arrow.png"} /></div>
                </div>
            </div>
            <div className={clicked ? classes.detailDiv : classes.detailDivNone}>
                <div className={classes.summaryBox}>
                {detail.map((item) =>{
                        return (
                            <div className={classes.detailBox} key={uuidv4()}>
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
                </div>
                <div className={classes.summaryLinkBox}>
                    <div onClick={summaryClick} style={{justifyContent: "flex-start", paddingLeft: "24px"}}>경기 요약</div>
                    {data.links[1].text === "Highlights" ? <div onClick={highlightClick}>하이라이트</div> : ""}
                    <div onClick={statClick}style={{justifyContent: "flex-end", paddingRight: "24px"}}>매치 스탯</div>
                </div>
            </div>
        </div>
    )
}

export default DetailGame
