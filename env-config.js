const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://ahmed85-portfolio.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://ahmed85-portfolio.herokuapp.com',
  'process.env.CLIENT_ID': '1sXbHkZrf0RH1QtURNCHYMR6HrRlfSoq'
}
