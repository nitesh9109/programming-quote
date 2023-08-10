async function fetchQuotes() {
    const response = await fetch("quote_json/quote.json");
    const quotesData = await response.json();

    const randomIndex = Math.floor(Math.random() * 1000) + 1;
    return quotesData.quotes[randomIndex];
  }

  function randomQuote() {
    fetchQuotes()
      .then((q) => {
        document.querySelector(".quote").textContent = q.quote;
        document.querySelector(".author").textContent = q.author;
      })
      .catch((err) => {
        throw new Error("Unable to fetch Quote");
      });
  }

  let next = document.getElementById("next");
  next.addEventListener("click", randomQuote);

  function copyToClickBoard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  const copy = document.getElementById("copy");
  copy.addEventListener("click", () => {
    const quote = document.querySelector(".quote");
    copyToClickBoard(quote.textContent);
    copiedAlert();
  });

  function copiedAlert() {
    let copied = document.querySelector(".copied");
    copied.style.display = "block";

    setTimeout(() => {
      copied.style.display = "none";
    }, 2000);
  }

  randomQuote();