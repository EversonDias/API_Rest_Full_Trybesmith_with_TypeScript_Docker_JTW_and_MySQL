import JWT from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (payload: { username: string }): string => {
  const token = JWT.sign(payload, secret, { algorithm: 'HS256', expiresIn: '10m' });
  return token;
};

export default {
  createToken,
};