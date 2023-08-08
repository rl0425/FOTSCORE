import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import NewsCont from "./contents/NewsCont";
import {v4 as uuidv4} from "uuid";
import Article from "./Article";
import classes from "./News.module.css"

function dataStructure(data){
    const sorted = data.sort((a,b) => new Date(b.lastModified) - new Date(a.lastModified))
    return sorted.filter((bEle, index, self) =>
        index === self.findIndex((rEle) => rEle.description === bEle.description)
    );
}

function News(){
    const [article, setArticle] = useState([])
    const [isLoading, setLoading] = useState(true)
    const active = useSelector((state) => state.setting.page)

    async function getNews(){
        const epl = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news').then((res) => res.json())
        const esp = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/news').then((res) => res.json())
        const ger = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/news').then((res) => res.json())
        const ita = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/news').then((res) => res.json())

        setArticle(dataStructure([...epl.articles , ...esp.articles, ...ger.articles, ...ita.articles]))
        setLoading(false)
    }

    useEffect(() =>{
        getNews()
    }, [])

    return (
        <section className={active === "news" ? classes.box : classes.unBox}>
            {
            isLoading ? <div className={classes.loading}><img src={"/image/loading.gif"}/></div> :
                <div>
                    <Article/>
                    {article.map((ele) => {
                        return <NewsCont data={ele} key={uuidv4()}/>
                    })}
                </div>
            }
        </section>

    )
}

export default News
