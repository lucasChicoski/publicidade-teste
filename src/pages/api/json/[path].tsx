import JsonService from "@/Services/getJsonService"

//Configuração camada de aplicação
 export default (req:any, res:any) => {
    switch (req.query.path) {
        case 'getjson': return req.method == 'POST' ? JsonService.getJson(req, res) : res.send('Metodo não suportado')
        case 'savejson' : return req.method == 'GET' ? JsonService.saveJson(req, res) : res.send('Metodo não suportado')
        default: return res.send('rota não encontrada')
    }
 }