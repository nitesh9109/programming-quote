const app = require("express")();
const fs = require("fs");

const quoteData = JSON.parse(fs.readFileSync("./quote.json", "utf8"));

app.get("/api/quote", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote.quotes);
});

app.get("/quotes", (req, res) => {
  res.json(quoteData);
});

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * 1000) + 1;
  return quoteData.quotes[randomIndex];
}

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
