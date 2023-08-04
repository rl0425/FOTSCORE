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
        <main className={`${classes.font} ${classes.background}`}>
            <head className={classes.head}><Head/></head>
            <body className={classes.body}>
                <Category />
                <News />
                <Table />
            </body>
            <footer className={classes.foot}><Foot/></footer>
        </main>
    )
}

export default Main
