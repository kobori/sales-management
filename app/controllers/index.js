

const home = (req, res) => {
  res.render('dashboard', {title: "Index"})
}

const layout = (req, res) => {
  res.render('layout', { title: 'Express' });
}

const dashboard = (req, res) => {
  res.render('dashboard');
}

module.exports = {
  home,
  layout,
  dashboard
}

