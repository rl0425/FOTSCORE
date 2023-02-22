import classes from "./NewCont.module.css"
function NewsCont(props){
    const data = props.data

    return (
        <div className={classes.box}>
            <div className={classes.imgBox}><img src={`${data.images[0]?.url}`}/></div>
            <div className={classes.contBox}>
                <div className={classes.authorityBox}><span>{data.byline}</span></div>
                <div className={classes.titleBox}><span>{data.headline}</span></div>
                <div className={classes.mainBox}><span>{data.description}</span></div>
            </div>
        </div>
    )
}

export default NewsCont