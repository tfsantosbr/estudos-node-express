import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import User from '../models/User';

class AccountController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new AccountController();
