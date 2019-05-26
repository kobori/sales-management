const db = require('../../config/db');

const clientes = (req, res, next) => {
  db("clientes").then((clientes) => {
    res.render('clientes/clientes', {
      clientes: clientes,
    });
  },next);
};

const cliente = (req, res, next) => {
  const {id} = req.params;

  db("clientes")
    .where('id', id)
    .first()
    .then((cliente) => {
      if(!cliente){
        return res.send(400)
      }
    res.render("clientes/cliente", {
      cliente: cliente,
    });
  },next);
}

const cadastro = (req, res, next) => {
  res.render('clientes/cadastro');
}

const add = (req, res, next) => {
  db("clientes").insert(req.body).then((ids) => {
    res.redirect('/clientes');
  },next);
};

module.exports = {
  clientes,
  cliente,
  cadastro,
  add
}