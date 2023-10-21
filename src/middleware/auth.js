const jwt = require('jsonwebtoken');

const config = require('../config.js');


function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.session = decoded

        next();
    });
};

function checarpermissao(permisssao) {
    return (req, res, next) => {
      if (req.usuario && req.usuario.permissao === permissao) {
        next();
      } else {
        res.status(403).json({ message: 'Acesso negado' });
      }
    };
  }

module.exports = authMiddleware;
module.exports = checarpermissao;