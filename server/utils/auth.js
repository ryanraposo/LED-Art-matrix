const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"] 
    //received by apollo server and the login mutation
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    if (!token) {
      return req;
    }

    try {
      const decoded = jwt.verify(token, secret, { maxAge: expiration });
      req.user = decoded;
    }
    catch {
      console.log('Invalid token');
    }

    return req;
  },
  /**
   * 
   * @param {{username?: string, email?: string, _id?: string, resetEmail?: string, uuid?: string, exp?: string}} args 
   * @returns {string} jwt token as as string can be decoded into an object
   */
  signToken: function (args) {
    const { username, email, _id, resetEmail, uuid, exp } = args
    switch(true) {
      case Boolean(username && email && _id): {
        return jwt.sign({
          username,
          email,
          _id
        },
        secret,
        { expiresIn: expiration });
      }
      case Boolean(resetEmail && uuid && exp): {
        return jwt.sign({
          uuid,
          resetEmail
        },
        secret,
        { expiresIn: exp });
      }
      default: return null;
    }
  },
};