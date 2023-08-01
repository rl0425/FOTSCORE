import classes from "./NewCont.module.css"
function NewsCont(props){
    const data = props.data
    const newsClickEvt = () => {
        window.open(data.links.web.href, '_blank')
    }

    return (
        <div onClick={newsClickEvt} className={classes.box}>
            <div className={data.images[0] ? classes.imgBox : classes.noImgBox}><img src={data.images[0] ? `${data.images[0]?.url}` : `/image/no_image.png`}/></div>
            <div className={classes.contBox}>
                <div className={classes.authorityBox}><span>{data.byline}</span></div>
                <div className={classes.titleBox}><span>{data.headline}</span></div>
                <div className={classes.mainBox}><span>{data.description}</span></div>
            </div>
        </div>
    )
}

export default NewsCont