import {useEffect} from "react";
import Head from "../head/Head";
import classes from "./Main.module.css"
import Record from "../record/Record";
import Foot from "../foot/Foot";
import Contents from "../record/contents/Contents";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./Category";

function Main(){
    return (
        <div className={`${classes.font} ${classes.background}`}>
            <div className={classes.head}><Head/></div>
            <div className={classes.body}><Category/></div>
            <div className={classes.foot}><Foot/></div>
        </div>
    )
}

export default Main
