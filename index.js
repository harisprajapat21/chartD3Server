const app = require('express')();
const http = require('http').Server(app);
const market = require('./market');
const techLang = require('./techLang');

const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/market', (req, res) => {
  res.send(market.marketPositions);
});
app.get('/api/tech/lang', (req, res) => {
  res.send(techLang.techLangData);
});

http.listen(port, () => {
  console.log(`Listening on *:${port}`);
});