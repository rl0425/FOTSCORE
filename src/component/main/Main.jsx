import {useEffect} from "react";
import Head from "../head/Head";
import classes from "./Main.module.css"
import Record from "../record/Record";
import Foot from "../foot/Foot";
import Contents from "../record/contents/Contents";
import Category from "./Category";
import News from "../news/News";
import Table from "../table/Table";

function Main(){
    return (
        <div className={`${classes.font} ${classes.background}`}>
            <div className={classes.head}><Head/></div>
            <div className={classes.body}>
                <Category />
                <News />
                <Table />
            </div>
            <div className={classes.foot}><Foot/></div>
        </div>
    )
}

export default Main
