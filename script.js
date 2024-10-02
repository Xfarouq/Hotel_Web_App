// Data for each section
const whyContent = [
    { img: "Assets/images/payment img.svg", title: "Flexible Payment Options", description: "We offer a wide variety of payment options, from credit cards to cryptocurrencies." },
    { img: "Assets/images/search img.svg", title: "Easy Search Process", description: "Our user-friendly search helps you find what you need with just a few clicks." },
    { img: "Assets/images/247 img.svg", title: "24/7 Customer Support", description: "Need help? Our support team is available around the clock to assist you." },
    { img: "Assets/images/cat img.svg", title: "Friendly Service", description: "We pride ourselves on providing friendly and helpful service to our customers." }
];

const specialOffers = [
    { img: "Assets/images/Special Offers img1.png", rating: "Assets/images/rating.svg", favorite: "Assets/images/favorite.svg", title: "Beachside Resort", date: "15th Oct - 20th Oct", price: "$1200", nights: "5 nights" },
    { img: "Assets/images/Special Offers img2.png", rating: "Assets/images/rating.svg", favorite: "Assets/images/favorite.svg", title: "Mountain Escape", date: "1st Nov - 5th Nov", price: "$1400", nights: "4 nights" }
];

const reviews = [
    { img: "Assets/images/review1.png", text: "Great experience! Found the perfect tour, and tech support was amazing!", name: "Jane Doe", occupation: "Travel Blogger" },
    { img: "Assets/images/review2.png", text: "I loved the service. Everything was smooth and well-organized. Will book again!", name: "John Smith", occupation: "Photographer" }
];

const recentPosts = [
    { img: "Assets/images/recent1.png", date: "June 1, 2023", readTime: "3 minutes", title: "Exploring Rome", description: "Discover the hidden gems in the Eternal City." },
    { img: "Assets/images/recent2.png", date: "May 22, 2023", readTime: "5 minutes", title: "A Weekend in Paris", description: "A short guide to enjoying the best of Paris in just a few days." }
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
