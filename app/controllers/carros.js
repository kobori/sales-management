const db = require('../../config/db');

// Rota: Tabela de cadastro
const carros = (req, res, next) => {
  db("veiculos").then((veiculos) => {
    res.render('carros/carros', {
      veiculos: veiculos,
    });
  },next);
};

// Rota: Cadastro do veículo
const add = (req, res, next) => {
  res.render('carros/add');
}

// Rota: adicinar veículos
const addVeiculo = (req, res, next) => {
  db("veiculos").insert(req.body).then((ids) => {
    res.redirect('/add');
  },next);
};

const veiculo = (req, res, next) => {
  const {id} = req.params;

  db("veiculos")
    .where('id', id)
    .first()
    .then((veiculo) => {
      if(!veiculo){
        return (res.send(400))
      }
      res.render("carros/carros", {
        veiculo: veiculo,
      });
    },next);
};

module.exports = {
  carros,
  add,
  addVeiculo,
  veiculo
}