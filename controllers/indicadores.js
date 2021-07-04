const request = require('request');


const consultaIndicador = (req,res) =>{

    let indicador = [];

    request('https://mindicador.cl/api', function (error, response, body) {
       
       if(error){
        return res.status(404).json({ msg: "No encontrada" });
       }

        const dailyIndicators = JSON.parse(body);
        const {uf,utm,euro,dolar,bitcoin} = dailyIndicators;
       
        indicador.push(uf,utm,euro,dolar,bitcoin);
       
        
        res.status(200).json({
            ok:true,
            msg: indicador
      });
    });
} 
module.exports = {consultaIndicador};
