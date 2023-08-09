
/**
 * Observações
 * 
 * O atributo dangerouslySetInnerHTML consegue transformar o html
 * contido em uma string para html.
 */
import style from "./Paragraph.module.scss"

export default function Paragraph(props:any){
    return (
        <div>
            <p className={style.pText} dangerouslySetInnerHTML={{__html: props.text}} />
        </div>
    )
}