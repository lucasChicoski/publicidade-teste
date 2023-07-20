import { useRouter } from "next/router"
export default function main() {
    const router = useRouter()
    
    const listParams: Array<string> = router.query.endpoint as Array<string>


    if (listParams) {
        var endpointUrl = listParams.join('/')
        //pesquisar no banco o JSON associado a esse endpoint

        fetch('http://localhost:3000/api/json/getjson', {
            method: "POST",    
            body: JSON.stringify({url: endpointUrl})
        }).then((res) => res.json()).then((json) => {
            console.log(json)
        })
    }
    //O html precisa ser montado no server-side e renderizando  no client-side
    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}