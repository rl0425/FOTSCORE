import {useEffect, useState} from "react";
import Game from "./Game";
import moment from "moment";

function Contents(){
    const [data, setData ] = useState([])
    const [times, setTime ] = useState([])

    const getData = async () => {
        // const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams').then((res) => res.json());
        const dateForm = 20230211
        // const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?&dates=${dateForm}-${dateForm+1}`).then((res) => res.json());
        const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?&dates=20230211-20230216`).then((res) => res.json());

        console.log("res = ", res)

        const event = res.events.filter((data) =>{
            let temp = new Date('2023-02-12');
            return data
            // if(new Date(temp).getDate() === new Date(data.date).getDate()) {
            //     return data
            // }
        })

        setData(event)
        getTime(event)
    }

    const getTime = (evt) => {
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
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{color:"white"}}>
            {times.length > 0 ? <Game datas={data} times={times}/> : ""}
        </div>
    )
}

export default Contents
