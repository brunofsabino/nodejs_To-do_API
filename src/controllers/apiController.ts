import { Request, Response } from 'express'

import { sequelize } from '../instances/mysql'

export const home = async (req: Request, res: Response)=> {

    // try {
    //     await sequelize.authenticate()
    //     console.log("CONEXAO ESTABELECIDA COM SUCESSO!")
    // } catch(err){
    //     console.log("PROBLEMA: ", err)
    // }

    res.json({pong: true})
}