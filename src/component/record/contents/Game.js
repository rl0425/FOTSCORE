import DetailGame from "./DetailGame";
import classes from "./Game.module.css"
import { v4 as uuidv4 } from 'uuid';

function Game(props){
    console.log("props = ", props.times)

    return (
        <div>
            {props.times.map((time) => {
                return (
                    <div key={time}>
                        <div className={classes.timeBox}>{time}</div>
                        {
                            props.datas.map((data) => {
                                const propsDate = new Date(data.date)
                                const propsTime =
                                    String(propsDate.getHours() < 10 ? "0" + propsDate.getHours() : propsDate.getHours())+ " : "
                                    + String(propsDate.getMinutes() < 10 ? "0"
                                    + propsDate.getMinutes() : propsDate.getMinutes())

                                if (time === propsTime) {
                                    return <DetailGame datas={data} key={uuidv4()}/>
                                } else {
                                    return
                                }
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Game
