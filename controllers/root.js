const hello = (req, res) => {
  return res.render('home/index');
};

module.exports = {
  hello,
};