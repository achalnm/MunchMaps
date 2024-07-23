// client.js

function searchRestaurants() {
  const categoryType = document.getElementById("categoryType").value;
  const ratingValue = document.getElementById("ratingValue").value;
  const distanceRange = document.getElementById("distanceRange").value;
  const priceRange = document.getElementById("priceRange").value;
  const serviceType = document.getElementById("serviceType").value;

  const queryParams = new URLSearchParams({
    categoryType,
    ratingValue,
    distanceRange,
    priceRange,
    serviceType
  });

  fetch(`/restaurants?${queryParams}`)
    .then((response) => response.json())
    .then((restaurants) => {
      const restaurantsDiv = document.getElementById("restaurants");
      restaurantsDiv.innerHTML = "";

      if (restaurants.length === 0) {
        const oopsMessage = document.createElement("p");
        oopsMessage.textContent = "Oops! No matching eateries found, try other filters";
        oopsMessage.style.textAlign = "center";
        restaurantsDiv.appendChild(oopsMessage);
      } else {
        restaurants.forEach((restaurant) => {
          const restaurantDiv = document.createElement("div");
          restaurantDiv.classList.add("restaurant");

          const textContainer = document.createElement("div");
          textContainer.classList.add("text-container");

          const nameElement = document.createElement("h2");
          nameElement.textContent = restaurant.Name;

          const contactElement = document.createElement("p");
          contactElement.textContent = "Contact: " + restaurant.Contact_num;

          const websiteElement = document.createElement("p");
          websiteElement.innerHTML = `Map Link: <a href="${restaurant.MapLink}" target="_blank">${restaurant.MapLink}</a>`;

          const branchElement = document.createElement("p");
          branchElement.textContent = "Branch: " + restaurant.Branch;

          const locationElement = document.createElement("p");
          locationElement.textContent = "Open Time: " + restaurant.OpenTime;

          const commentsElement = document.createElement("p");
          commentsElement.textContent = "Close Time: " + restaurant.CloseTime;

          textContainer.appendChild(nameElement);
          textContainer.appendChild(contactElement);
          textContainer.appendChild(websiteElement);
          textContainer.appendChild(branchElement);
          textContainer.appendChild(locationElement);
          textContainer.appendChild(commentsElement);

          const imgElement = document.createElement("img");
          if (restaurant.Name === "Five Star Chicken") {
            imgElement.src = 'five star chicken.jpg';
          } else if (restaurant.Name === "Dhanalakshmi Biriyani") {
            imgElement.src = 'DA.jpeg'; 
          } else if (restaurant.Name === "Royal Cakes and Bakery") {
            imgElement.src = 'royal cakes.jpg'; 
          } else if (restaurant.Name === "Nature Cafe") {
            imgElement.src = 'nature coffee.jpg'; 
          } else if (restaurant.Name === "Santrupthi Hotel") {
            imgElement.src = 'SH.jpeg'; 
          } else if (restaurant.Name === "Sri Brahmalingeshwara Hotel") {
            imgElement.src = 'BC.jpeg'; 
          } else if (restaurant.Name === "Sri Ganapati Hot Chips") {
            imgElement.src = 'GHC.jpeg'; 
          } else if (restaurant.Name === "Vaishnavi Palace") {
            imgElement.src = 'vaishnavi Palace.jpg'; 
          } else if (restaurant.Name === "Masth Cafe") {
            imgElement.src = 'Masth cafe.jpg'; 
          } else if (restaurant.Name === "Sri Lakshmi Janardhan Bakery and Sweets") {
            imgElement.src = 'lkbs.jpg'; 
          } else if (restaurant.Name === "Veg Gate") {
            imgElement.src = 'vge gate.jpg'; 
          } else {
            imgElement.src = 'background.jpg';
          }
          imgElement.alt = "Restaurant Image";
          imgElement.style.maxWidth = "30%";
          imgElement.style.height = "auto";

          restaurantDiv.appendChild(textContainer);
          restaurantDiv.appendChild(imgElement);

          restaurantsDiv.appendChild(restaurantDiv);
        });
      }
    })
    .catch((error) => console.error("Error fetching restaurants: ", error));
}
