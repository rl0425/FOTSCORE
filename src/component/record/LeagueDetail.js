import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";
import {leagueActions} from "../../store/league-slice"

function LeagueDetail(props){
    const dispatch = useDispatch();
    let league = useSelector((state) => state.league.league);

    function leagueClick(){
        props.onCilck(props.league)
        dispatch(leagueActions.changeLeague(props.link));
    }

    return (
        <div onClick={leagueClick} className={classes.img} style={ props.league === "bundesliga" ? {marginLeft:"4px"} : {marginLeft:"0px"}}>
            <img src={`/image/${props.league}.png`}/>
        </div>
    )
}

export default LeagueDetail