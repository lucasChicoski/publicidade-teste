
/**
 * Esse componente implementa a ideia de um arquivo estático utilizando a metodologia SSG (Site Server Generation)
 */
export function getStaticProps(){
    return {
        props: {
            lala: 'teste'
        }
    }
}

export default function PaginaEstatica(props:any){
    return (
        <>
            {props.lala}
        </>
    )
}