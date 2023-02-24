import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contents from "../record/contents/Contents";
import News from "../news/News";
import classes from "./Category.module.css"
import {useSelector} from "react-redux";

function Category(){
    const active = useSelector((state) => state.setting.page)

    return (
        <div className={active === "record" ? classes.box : classes.unBox}>
            <Contents />
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