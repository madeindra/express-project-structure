const error = (err, req, res, next) => {
  console.log(err.toString()); // ini hanya bisa dipanggil di object error
  
  return res.status(500).json({ message: 'An error occured' });
};

module.exports = {
  error,
}