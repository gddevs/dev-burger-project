import *  as Yup from 'yup';

import User from '../models/User';


class SessionController {
  async store(req, res) {
    const schema = Yup.object({

      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    });

    const isValid = await schema.isValid(req.body);

    const emailOrPasswordIncorrect = () => {
      res
        .status(401)
        .json({ error: 'Make sure your email or password are connect' });
    }

    if (!isValid) {
      return emailOrPasswordIncorrect();
    }
    
    const { email, password} = req.body;

    // eslint-disable-next-line no-undef
    const user = await User.findOne({ 
      where: { 
        email,
      }, 
    });

    if (!user) {
      return emailOrPasswordIncorrect();
    }

    const isSamePassword = await user.checkPassword(password);

    if (!isSamePassword) {
      return emailOrPasswordIncorrect();
    }

    return res.status(201).json({ 
      id: user.id, 
      name: user.name,
      email: user.email,
      admin: user.admin
    });
  } 
}

export default new SessionController();