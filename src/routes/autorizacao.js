const { checarautorizacao } = require('./middleware/autorizacao');

router.get('/admin', checkPermission(0), (req, res) => {
  res.json({ message: 'Você é um administrador.' });
});

router.get('/cliente', checkPermission(1), (req, res) => {
  res.json({ message: 'Você é um cliente.' });
});

router.get('/funcionario', checkPermission(2), (req, res) => {
  res.json({ message: 'Você é um funcionário.' });
});

module.exports = router;