const methodOverride = require("method-override");


module.exports = (app) => {
  const cltrIndex = app.controllers.index;
  const cltrCarros = app.controllers.carros;
  const cltrClientes = app.controllers.clientes;
  const cltrFinancas = app.controllers.financas;

 

  /* Paginas de cadastros de clientes */
  app.get('/clientes', cltrClientes.clientes);
  app.get('/cliente/:id', cltrClientes.cliente);
  app.get('/cadastro', cltrClientes.cadastro);
  app.post('/cadastro', cltrClientes.add);
 
  /* Paginas de cadatros de carros */
  app.get('/carros', cltrCarros.carros);
  app.get('/carros/:id', cltrCarros.veiculo);
  app.get('/add', cltrCarros.add);
  app.post('/add', cltrCarros.addVeiculo);

  /* Paginas de Finanças */
  app.get('/financas', cltrFinancas.financas);

  /* Pagina do layout principais */
  app.get('/', cltrIndex.home);
  app.get('/layout', cltrIndex.layout);
  app.get('/dashboard', cltrIndex.dashboard);

};

