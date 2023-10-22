function checarAutorizacao(autorizacao) {
    return (req, res, next) => {
      if (req.usuario && req.usuario.autorizacao === autorizacao) {
        next();
      } else {
        res.status(403).json({ message: 'Acesso negado' });
      }
    };
  }
  
  module.exports = {
    checarAutorizacao,
  };