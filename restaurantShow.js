const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

const restaurantURL = `http://localhost:3000/restaurants/${id}`

fetch(restaurantURL)
    .then(response => response.json())
    .then(restaurant => {

        const restaurantTitle = document.createElement("h2");
        restaurantTitle.innerText = restaurant.title;
        document.body.append(restaurantTitle);

        restaurant.reviews.map(review => {
            
            const reviewRating = document.createElement("p");
            reviewRating.textContent = review.rating;
            document.body.append(reviewRating);
        })
    })