window.addEventListener('load', () => {
    fetch('/restaurants')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(restaurants => {
            displayRestaurants(restaurants);
        })
        .catch(error => {
            console.error('Error fetching restaurants:', error);
        });
});

function displayRestaurants(restaurants) {
    const restaurantsDiv = document.getElementById('restaurants');
    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.innerHTML = `
            <h2>${restaurant.Name}</h2>
            <p>Contact: ${restaurant.Contact_num}</p>
            <p>Website: <a href="${restaurant.WebLink}" target="_blank">${restaurant.WebLink}</a></p>
            <p>Branch: ${restaurant.Branch}</p>
            <p>Category: ${restaurant.CategoryID}</p>
            <p>Price Range: ${restaurant.PriceID}</p>
            <p>Service Type: ${restaurant.ServiceTypeID}</p>
            <p>Distance: ${restaurant.DistanceID}</p>
            <p>Rating: ${restaurant.Rating_id}</p>
        `;
        restaurantsDiv.appendChild(restaurantDiv);
    });
}
