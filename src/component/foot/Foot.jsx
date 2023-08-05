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
        <aside className={classes.box}>
            <section onClick={recordBtn} className={active === "record" ? `${classes.contents} ${classes.active}` : classes.contents}>기록</section>
            <section onClick={newsBtn} className={active === "news" ? `${classes.contents} ${classes.active}` : classes.contents}>뉴스</section>
            <section onClick={teamBtn} className={active === "team" ? `${classes.contents} ${classes.active}` : classes.contents}>순위</section>
        </aside>
    )
}

export default Foot
