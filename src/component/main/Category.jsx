import Contents from "../record/contents/Contents";
import News from "../news/News";
import classes from "./Category.module.css"
import {useSelector} from "react-redux";

function Category(){
    const active = useSelector((state) => state.setting.page)

    return (
        <section className={active === "record" ? classes.box : classes.unBox}>
            <Contents />
        </section>
    )
}

export default Category
