import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contents from "../record/contents/Contents";
import News from "../news/News";
import classes from "./Category.module.css"

function Category(){
    return (
        <div className={classes.box}>
            <Contents />
            <News />
        </div>
        // <BrowserRouter>
        //     <Routes>
        //
        //         <Route path="/" element={<Contents />} />
        //         <Route path="/news" element={<News />} />
        //     </Routes>
        // </BrowserRouter>
    )
}

export default Category