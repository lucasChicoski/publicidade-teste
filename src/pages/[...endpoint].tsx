/**
 * Esse componente implementa a metodologia SSR (Server Side Rendenring)
 * Para cada requisição
 */

import Header from "@/components/Header/index"
import articleStyle from "@/styles/articles.module.scss"
import Midias from "@/components/Midias/index"
import Title from "@/components/Title/Title"
import { useState } from "react"
import { defineComponents } from "@/Global/defineComponents"
import { Metadata } from "next"
// import defineComponents from "@/Global/defineComponents"

const produrl = 'https://stately-donut-218a96.netlify.app/'
const localurl = 'http://localhost:3000/'


export const metadata: Metadata = {
    title: 'Ampliação de atendimento',
    description: 'Três unidades de saúde de Cariacica vão funcionar aos finais de semana',
  }

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const listParams: Array<string> = context.params.endpoint as Array<string>

    var endpointUrl = listParams.join('/')
    const res = await fetch( produrl + 'api/json/getjson', {
        method: "POST",
        body: JSON.stringify({ url: endpointUrl })
    })
    const json = await res.json()

    console.log(json)
    return { props: { json } }
    // const listParams: Array<string> = router.query.endpoint as Array<string>
    // Pass data to the page via props
}

export default function Main(props: any) {
    //O html precisa ser montado no server-side e renderizando  no client-side
    const listElements = defineComponents(props)
    return (
        <div>
            <Header />
            <div className={articleStyle.pageContent}>
                <div className={articleStyle.asideLeft}>
                    <Midias/>
                </div>
                <div className={articleStyle.content}>
                        {/* <h1>Aqui começa o HTML {props.json.Site?.Name ? props.json.Site?.Name : 'd'}</h1> */}
                        {listElements}
                </div>
                <div className={articleStyle.asideRight}>as</div>
            </div>
        </div>
    )
}