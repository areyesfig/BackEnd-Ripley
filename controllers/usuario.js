const { getConnection } = require('../database');

const consultarSaldo = (req,res) => {
   
    const usuarioSaldo = getConnection().get('usuarios').find({rut: req.body.rut}).value();

    if(!usuarioSaldo){
        return res.status(400).json({
            ok:false,
            msg: 'Rut no encontrado'
        });
    }

    res.status(200).json({
        ok:true,
        msg: (`El total de su saldo es de $${usuarioSaldo.saldo} pesos`)
    });
};

const transferenciaUsuario = async(req,res) => {
    const {cuentaDestino,monto,cuentaOrigen} = req.body;
    

    const usuarioOrigen = getConnection().get('usuarios').find({cuenta: cuentaOrigen}).value();
    const ctaDestino = getConnection().get('usuarios').find({cuenta: cuentaDestino}).value();
    
   
    
    if(!usuarioOrigen){
        return res.status(400).json({
            ok:false,
            msg: 'Cuenta de origen no existe'
        })  
    }

    if(!ctaDestino){
        return res.status(400).json({
            ok:false,
            msg: 'Cuenta de destino no existe'
        })  
    }

    let origenSaldo = (usuarioOrigen.saldo - monto);
    let destinoSaldo = Number(ctaDestino.saldo)+ Number(monto);
    
  
    if(usuarioOrigen.saldo < monto){
        return res.status(400).json({
            ok:false,
            msg:'El monto a transferir supera el saldo de su cuenta'
        })
    }
    
    
    await getConnection().get('usuarios')
    .find({cuenta: usuarioOrigen.cuenta})
    .assign({saldo: origenSaldo}).write();

    await getConnection().get('usuarios')
    .find({cuenta: ctaDestino.cuenta})
    .assign({saldo: destinoSaldo}).write();

    
    res.status(200).json({
        ok:true,
        msg:'transferencia existosa'
    })
}

module.exports = {
    consultarSaldo,
    transferenciaUsuario
}



