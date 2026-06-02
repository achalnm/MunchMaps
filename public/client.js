const FILTER_IDS = ['search', 'categoryType', 'ratingValue', 'distanceRange', 'priceRange', 'serviceType'];

FILTER_IDS.forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const event = el.tagName === 'SELECT' ? 'change' : 'input';
  el.addEventListener(event, searchRestaurants);
});

function searchRestaurants() {
  const params = {};
  FILTER_IDS.forEach((id) => {
    const val = document.getElementById(id).value;
    if (val) params[id] = val;
  });

  fetch('/restaurants?' + new URLSearchParams(params))
    .then((res) => {
      if (!res.ok) return res.json().then((body) => Promise.reject(body));
      return res.json();
    })
    .then(renderRestaurants)
    .catch((err) => {
      console.error('Error fetching restaurants:', err);
      const restaurantsDiv = document.getElementById('restaurants');
      restaurantsDiv.innerHTML = '<p class="message">Something went wrong. Please try again.</p>';
      document.getElementById('result-count').textContent = '';
    });
}

function renderRestaurants(restaurants) {
  const restaurantsDiv = document.getElementById('restaurants');
  const countEl = document.getElementById('result-count');
  restaurantsDiv.innerHTML = '';

  if (restaurants.length === 0) {
    countEl.textContent = '';
    restaurantsDiv.innerHTML = '<p class="message">No matching eateries found. Try adjusting the filters.</p>';
    return;
  }

  countEl.textContent = `${restaurants.length} result${restaurants.length === 1 ? '' : 's'}`;

  restaurants.forEach((r) => {
    const card = document.createElement('div');
    card.classList.add('restaurant');

    const text = document.createElement('div');
    text.classList.add('text-container');

    const name = document.createElement('h2');
    name.textContent = r.Name;

    const contact = document.createElement('p');
    contact.textContent = 'Contact: ' + r.Contact_num;

    const mapLink = document.createElement('p');
    mapLink.innerHTML = `Map: <a href="${r.MapLink}" target="_blank" rel="noopener noreferrer">${r.MapLink}</a>`;

    const branch = document.createElement('p');
    branch.textContent = 'Branch: ' + r.Branch;

    const hours = document.createElement('p');
    const open = r.OpenTime || '--';
    const close = r.CloseTime || '--';
    hours.textContent = `Hours: ${open} - ${close}`;

    text.append(name, contact, mapLink, branch, hours);

    const img = document.createElement('img');
    img.src = r.ImageFile || 'images/background.jpg';
    img.alt = r.Name + ' photo';
    img.classList.add('restaurant-img');

    card.append(text, img);
    restaurantsDiv.appendChild(card);
  });
}

searchRestaurants();
