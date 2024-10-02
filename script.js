// Data for each section
const whyContent = [
    { img: "Assets/images/payment img.svg", title: "Payment methods", description: "We have a lot of them, from cryptocurrencies to barter for potatoes" },
    { img: "Assets/images/search img.svg", title: "Simple search process", description: "We checked it out, even the kid did it, but it was my mom's friend's son" },
    { img: "Assets/images/247 img.svg", title: "24/7 Support", description: "Is there something you don't understand? Feel free to call us. Phone number in the footer" },
    { img: "Assets/images/cat img.svg", title: "We are nice", description: "Fantasy is over, there will be something really convincing here"}
];

const specialOffers = [
    { img: "Assets/images/Special Offers img1.png", rating: "Assets/images/rating.svg", favorite: "Assets/images/favorite.svg", title: "Beachside Resort", date: "15th Oct - 20th Oct", price: "$1200", nights: "5 nights" },
    { img: "Assets/images/Special Offers img2.png", rating: "Assets/images/rating.svg", favorite: "Assets/images/favorite.svg", title: "Mountain Escape", date: "1st Nov - 5th Nov", price: "$1400", nights: "4 nights" },
    { img: "Assets/images/Special Offers img3.png", rating: "Assets/images/rating.svg", favorite: "Assets/images/favorite.svg", title: "Wilderness Club at Big Ceddar", date: "1st Nov - 5th Nov", price: "$1600", nights: "6 nights" }
];

const reviews = [
    { img: "Assets/images/review1.png", text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.", name: "Jannike Borg", occupation: "Publisher" },
    { img: "Assets/images/review2.png", text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.", name: "LeBron Durant", occupation: "Flight Attendant" },
    { img: "Assets/images/review3.png", text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.", name: "Kaarel Piho", occupation: "Chiropodist" }
];

const recentPosts = [
    { img: "Assets/images/recent1.png", date: "May 23, 2022", readTime: "5 minutes", title: "My trip to Athens", description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..." },
    { img: "Assets/images/recent2.png", date: "May 22, 2023", readTime: "1 minutes", title: "Vilnius resorts", description: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs" },
    { img: "Assets/images/recent3.png", date: "May 20, 2024", readTime: "15 minutes", title: "Tips for flying on a plane", description: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you" }
];

// Function to render the "Why Choose Us" section
const renderWhySection = (whyContent) => {
    const container = document.querySelector('.whys');
    container.innerHTML = "";
    whyContent.forEach(content => {
        container.innerHTML += `
            <div class="whys">
                <img src="${content.img}" alt="${content.title}">
                <h3>${content.title}</h3>
                <p>${content.description}</p>
            </div>
        `;
    });
};

// Function to render the "Special Offers" section
const renderSpecialOffers = (specialOffers) => {
    const container = document.querySelector('.special-offer');
    specialOffers.forEach(offer => {
        container.innerHTML += `
            <div class="card">
                <div class="bg">
                    <img src="${offer.img}" alt="Special Offer Image" class="sf">
                    <img src="${offer.rating}" alt="Rating Icon" class="Ratings">
                    <img src="${offer.favorite}" alt="Favorite Icon" class="Favourite">
                </div>
                <div class="info">
                    <p class="medium">${offer.title}</p>
                    <p>${offer.date}</p>
                    <div class="price">
                        <p>${offer.price}</p>
                        <p>/${offer.nights}</p>
                    </div>
                </div>
            </div>
        `;
    });
};

// Function to render the "Reviews" section
const renderReviews = (reviews) => {
    const container = document.querySelector('.reviews');
    reviews.forEach(review => {
        container.innerHTML += `
            <div class="review">
                <img src="${review.img}" alt="Review Image">
                <p class="rev">${review.text}</p>
                <p><em><strong>${review.name}</strong>, ${review.occupation}</em></p>
            </div>
        `;
    });
    container.innerHTML += `
    <button class="review-btn">More Reviews</button>`;
};

// Function to render the "Recent Posts" section
const renderRecentPosts = (recentPosts) => {
    const container = document.querySelector('.recent-posts');
    recentPosts.forEach(post => {
        container.innerHTML += `
            <div class="post">
                <img src="${post.img}" alt="Post Image" class="recent">
                <div class="text">
                    <p>${post.date}</p>
                    <div class="time">
                        <img src="Assets/images/time.svg" alt="Time Icon">
                        <p>${post.readTime}</p>
                    </div>
                </div>
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
        `;
    });
};

// Call the functions to render the sections
renderWhySection(whyContent);
renderSpecialOffers(specialOffers);
renderReviews(reviews);
renderRecentPosts(recentPosts);
