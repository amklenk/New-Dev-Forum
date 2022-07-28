var quoteTextEl = document.querySelector('#quoteText');
var quoteAuthorEl = document.querySelector('#quoteAuthor');

//Renders a motivational quote in the footer 
fetch('https://type.fit/api/quotes')
  .then((response) => response.json())
  .then((data) => {
    var randomIndex = Math.floor(Math.random() * data.length);
    var randomQuote = data[randomIndex];

    quoteTextEl.textContent = randomQuote.text;
    quoteAuthorEl.textContent = randomQuote.author;
  });