import DetailGame from "./DetailGame";
import classes from "./Game.module.css"
import { v4 as uuidv4 } from 'uuid';

function Game(props){
    return (
        <div style={{height:"100%", minHeight:"100%"}}>
            {props.times.length > 0 ? props.times.map((time) => {
                return (
                    <div key={time}>
                        <div className={classes.timeBox}>{time}</div>
                        {
                            props.datas.map((data,index) => {
                                const propsDate = new Date(data.date)
                                const propsTime =
                                    String(propsDate.getHours() < 10 ? "0" + propsDate.getHours() : propsDate.getHours())+ " : "
                                    + String(propsDate.getMinutes() < 10 ? "0"
                                    + propsDate.getMinutes() : propsDate.getMinutes())

                                if (time === propsTime) {
                                    return <DetailGame datas={data} index={index} key={uuidv4()}/>
                                } else {
                                    return
                                }
                            })
                        }
                    </div>
                )
            }) : <div className={classes.noGame}><img src={"image/soccerBall.gif"}/><span>There's no game today.</span></div>}
        </div>
    )
}

export default Game
