import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Main() {
    const router = useRouter()
    const listParams: Array<string> = router.query.endpoint as Array<string>
    const [jsonS, setJson] = useState(Object)

    useEffect(() => {
        if (listParams) {
            var endpointUrl = listParams.join('/')
            //pesquisar no banco o JSON associado a esse endpoint
            fetch('http://localhost:3000/api/json/getjson', {
                method: "POST",    
                body: JSON.stringify({url: endpointUrl})
            }).then((res) => res.json()).then((json) => {
                console.log(json)
                setJson(json)
                
            })
        }
        
    },[router.query.endpoint])

    //O html precisa ser montado no server-side e renderizando  no client-side
    return (
        <div>
            {
                jsonS.code == 404 ? <h1>Página não encontrada</h1> :
                <h1>Aqui começa o HTML</h1>
            }
        </div>
    )
}