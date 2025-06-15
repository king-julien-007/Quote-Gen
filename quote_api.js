const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const button = document.getElementById('butn');

async function fetchQuote() {
  const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'BWWW60cexQO3iXDuo1I5Jw==tY5MtYsL8OkuoEmC',
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  quoteEl.textContent = `"${data[0]?.quote}"`;
  authorEl.textContent = `— ${data[0]?.author}`;
}

document.addEventListener('DOMContentLoaded', fetchQuote);
button.addEventListener('click', fetchQuote);
