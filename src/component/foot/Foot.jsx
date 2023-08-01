import classes from "./Foot.module.css"
import {useDispatch, useSelector} from "react-redux";
import {settingActions} from "../../store/setting-slice";
import moment from "moment/moment";
import {leagueActions} from "../../store/league-slice";

function Foot(){
    const dispatch = useDispatch()
    const active = useSelector((state) => state.setting.page)

    const recordBtn = () => { dispatch(settingActions.changePage({page:"record"}))}
    const newsBtn = () => { dispatch(settingActions.changePage({page:"news"}))}
    const teamBtn = () => { dispatch(settingActions.changePage({page:"team"}))}

    return(
        <div className={classes.box}>
            <div onClick={recordBtn} className={active === "record" ? `${classes.contents} ${classes.active}` : classes.contents}>기록</div>
            <div onClick={newsBtn} className={active === "news" ? `${classes.contents} ${classes.active}` : classes.contents}>뉴스</div>
            <div onClick={teamBtn} className={active === "team" ? `${classes.contents} ${classes.active}` : classes.contents}>순위</div>
        </div>
    )
}

export default Foot
