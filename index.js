const restaurantsURL = "http://localhost:3000/restaurants";

const restaurantSelect = document.querySelector("#restaurant-select");

fetch(restaurantsURL)
    .then(response => parseFromJSON(response))
    .then(restaurants => displayRestaurants(restaurants));

function displayRestaurants(restaurants) {
    restaurants.map(restaurant => handleRestaurant(restaurant));
}

function handleRestaurant(restaurant) {
        
    const restaurantTitle = document.createElement("h2");
    restaurantTitle.innerHTML = `<a href=restaurantShow.html?id=${restaurant.id}>${restaurant.title}</a>`
    document.body.append(restaurantTitle);
    
    const restaurantOption = document.createElement("option");
    restaurantOption.textContent = restaurant.title;
    restaurantOption.value = restaurant.id;

    restaurantSelect.append(restaurantOption);
}


function parseFromJSON(response) {
    return response.json();
}