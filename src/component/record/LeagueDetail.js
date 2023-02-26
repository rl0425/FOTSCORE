import classes from "./League.module.css";
import {useDispatch, useSelector} from "react-redux";
import {leagueActions} from "../../store/league-slice"
import moment from "moment";

function LeagueDetail(props){
    const dispatch = useDispatch();

    function leagueClick(){
        props.onCilck(props.league)

        if(props.type === "record") {
            dispatch(leagueActions.changeSet({link: props.link, date: moment(new Date()), choiceDate: "today"}))
        }
        else {
            dispatch(leagueActions.changeRank({rankLink: props.link, rankLoading: true}))
        }
    }

    return (
        <div onClick={leagueClick} className={classes.img}>
            <img src={`/image/${props.league}.png`} className={ props.league === "bundesliga" ? classes.selectBundes : ""}/>
        </div>
    )
}

export default LeagueDetail
