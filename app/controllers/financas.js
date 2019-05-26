const db = require('../../config/db');

const financas = (req, res, next) => {
  res.render('financas/financas');
}

module.exports = {
  financas
}