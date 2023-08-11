import MyJSON from "../json/materia-01.json"

//DEVE SER UMA CLASSE

const url = 'es/cotidiano/viaduto-de-carapina-sera-entregue-na-proxima-semana-com-mudancas-no-transito-0723' //é uma chave primária no banco de dados

export default class JsonService {
    
  static  getJson(req: any, res:any){
        /**
         * Buscar e validar o caminho no banco.
         */
        console.log('teste')
        let body;
        if( typeof(req.body) == 'object' ){
          body = req.body
        }else {
          body = JSON.parse(req.body)
        }

        // const body = JSON.parse(req.body)
        if(body.url == url){
          res.status(200).json(MyJSON) 
        }else{
          res.status(200).json({code: 404, message: 'url não encontrada'})
        }
        // res.send('url não encontrada')
    }

   static saveJson(req: any, res: any){
    res.send('Rota Funcional')
   } 
}
