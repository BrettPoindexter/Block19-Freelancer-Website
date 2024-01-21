const people = ['Bob', 'Jason', 'Clara', 'Jimmy', 'Martha', 'John', 'Mary', 'Susan'];
const types = ['Programmer', 'Writer', 'GFX-Artist', 'Artist', 'Songwriter', 'Musician'];
const prices = [50, 30, 50, 60, 70, 70, 80, 100];
const maxPostings = 10;
const postings = [
  {
    person: 'Jason',
    type: 'Programmer',
    pricing: '30'
  }
];

let sumOfPrices = 0;

function calculateAveragePrice() {
  const averagePrice = sumOfPrices / postings.length || 0;
  return averagePrice.toFixed(2);
}

function calculateSum() {
  sumOfPrices = 0;
  for (const post of postings) {
    sumOfPrices += parseInt(post.pricing);
  }
}

const addPostingIntervalId = setInterval(addPosting, 1000);

render();


function render() {
  const avgPrice = document.querySelector('#avg-price');
  avgPrice.textContent = `Average Price: $${calculateAveragePrice()}`;

  const name = document.querySelector('.name');
  const nameElements = postings.map((postings) => {
    const element = document.createElement('li');
    element.textContent = postings.person;
    return element;
  });
  name.replaceChildren(...nameElements);

  const type = document.querySelector('.type');
  const typeElements = postings.map((postings) => {
    const element = document.createElement('li');
    element.textContent = postings.type;
    return element;
  });
  type.replaceChildren(...typeElements);

  const price = document.querySelector('.price');
  const priceElements = postings.map((postings) => {
    const element = document.createElement('li');
    element.textContent = postings.pricing;
    return element;
  });
  price.replaceChildren(...priceElements);
}

function addPosting() {
  const person = people[Math.floor(Math.random() * people.length)];

  const type = types[Math.floor(Math.random() * types.length)];

  const pricing = prices[Math.floor(Math.random() * prices.length)];

  postings.push({person, type, pricing});

  calculateSum();
  render();

  if (postings.length >= maxPostings) {
    clearInterval(addPostingIntervalId);
  }
}