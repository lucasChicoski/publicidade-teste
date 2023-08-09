





import style from "./Image.module.scss"



export default function ImageComp(props:any){
    // debugger
    return (
        <div className={style.frameImage} >
            <img className={style.imageComp} src={props.data.src} alt={props.data.caption} />
        </div>
    )
}