/*
* store => Cadastrar / Adicionar
* index => Listar / Buscar
* show => Listar um unico / Buscar um unico
* update => Atualizar
* destroy => Deletar
*/
import { v4 } from 'uuid';

import * as Yup from 'yup';

import User from '../models/User';

class UserController {

  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
      admin: Yup.boolean(),
    });


    try {
      schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({
        error: err.errors
      })
    }



    const { name, email, password, admin } = req.body;

    const userExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userExists) {
      return res.status(400).json({
        error: 'User already exists',
      });
    } 

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      admin,
    });

  }
}

export default new UserController();