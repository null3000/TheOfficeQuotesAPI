const app = require('express')();
const port = process.env.PORT || 4000;

app.get("/ping", (req, res, next) => {
    res.json([{"success" : true}]);
    res.status(200)
});

app.get('/quote/dwight', (req, res) => {
    let quotes = require('./dwightquotes.json');
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).send({
        data:quote
    })
});
app.get('/quote/micheal', (req, res) => {
    let quotes = require('./michealquotes.json');
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).send({
        data:quote
    })
});

app.listen(
    PORT,
    () => console.log(`Server is running on port http://localhost:${PORT}`)
)
