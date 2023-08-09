






export default function Sumary(props:any){
    return (
        // <p>{props.text}</p>
        <p dangerouslySetInnerHTML={{__html: props.text}} />
    )
}