import {useEffect} from "react";

function Main(){
    const getData = async () => {
        const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard?&dates=20230210-20230321').then((res) => res.json());
        // const res = await fetch('https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=f4221bf5a0090379a1f7fca4e225ade743e06434a9ff5839e870c9ee20fb2e73').then((res) => res.json());
    }

    useEffect(() => {
        getData(); //API 호출
    }, []);

    return (
        <div>si</div>
    )
}

export default Main
