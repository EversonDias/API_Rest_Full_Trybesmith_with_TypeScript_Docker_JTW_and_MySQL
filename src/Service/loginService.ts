import bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import UserModel from '../database/models/user.model';
import { Login, ServiceResponse } from '../types/types';

const handleLogin = async (payload: Login): Promise<ServiceResponse<{ token: string }>> => {
  const user = await UserModel.findOne({ where: { username: payload.username } });
  if (!user || !bcrypt.compareSync(payload.password, user.dataValues.password)) {
    return { type: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const token = JWT.createToken({ username: payload.username });
  return {
    type: 'OK',
    data: {
      token,
    },
  };
};

export default {
  handleLogin,
};