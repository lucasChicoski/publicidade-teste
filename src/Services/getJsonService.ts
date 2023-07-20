import MyJSON from "../json/materia-1.json"

//DEVE SER UMA CLASSE

const url = 'es/cotidiano/viaduto-de-carapina-sera-entregue-na-proxima-semana-com-mudancas-no-transito-0723' //é uma chave primária no banco de dados

export default class JsonService {
    
  static  getJson(req: any, res:any){
        /**
         * Buscar e validar o caminho no banco.
         */
        const body = JSON.parse(req.body)
        if(body.url == url){
          res.status(200).json(MyJSON) 
        }
        // res.send('url não encontrada')
    }

   static saveJson(req: any, res: any){
    res.send('Rota Funcional')
   } 
}
