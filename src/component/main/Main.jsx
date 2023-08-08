import Head from "../head/Head";
import classes from "./Main.module.css"
import Foot from "../foot/Foot";
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
