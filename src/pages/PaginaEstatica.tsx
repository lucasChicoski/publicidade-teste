

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