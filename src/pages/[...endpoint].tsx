/**
 * Esse componente implementa a metodologia SSR (Server Side Rendenring)
 * Para cada requisição
 */

export async function getServerSideProps(context:any) {
    // Fetch data from external API
    const listParams: Array<string> = context.params.endpoint as Array<string>

    var endpointUrl = listParams.join('/')
   const res = await fetch('http://localhost:3000/api/json/getjson', {
        method: "POST",    
        body: JSON.stringify({url: endpointUrl})
    })
    const x = await res.json()
    // console.log( await res.json())
    return {props:{x}}
    // const listParams: Array<string> = router.query.endpoint as Array<string>

   
    // Pass data to the page via props
  }

export default function Main(props:any) {
    
    //O html precisa ser montado no server-side e renderizando  no client-side
    return (
        <div>
            {
                // jsonS.code == 404 ? <h1>Página não encontrada</h1> :
                <h1>Aqui começa o HTML {props.x.Site?.Name ? props.x.Site?.Name: 'd'}</h1>
            }
        </div>
    )
}