const app = require('express')();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());

app.get("/ping", (req, res, next) => {
    res.json([{"success" : true}]);
    res.status(200)
});

app.get('/api/v1/quote/dwight', (req, res) => {
    let quotes = require('./dwightquotes.json');
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).send(quote)
});

app.get('/api/v1/quote/micheal', (req, res) => {
    let quotes = require('./michealquotes.json');
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).send(quote)
});

app.listen(
    PORT,
    () => console.log(`Server is running on port http://localhost:${PORT}`)
)
