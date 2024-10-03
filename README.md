# Hotel-Web-App

**Description**: This project is a hotel web application designed with HTML, CSS, and JavaScript, featuring responsive layouts, modern design elements, and an interactive hamburger menu for mobile navigation.

## Table of Contents

- [Hotel-Web-App](#hotel-web-app)
  - [Overview](#overview)
  - [Live Demo](#live-demo)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Setup Instructions](#setup-instructions)
  - [Usage](#usage)
    - [Key HTML Structure](#key-html-structure)
    - [Key CSS Styles](#key-css-styles)
  - [JavaScript](#javascript)
  - [Screen Shots](#screen-shots)
  - [License](#license)
  - [Authors](#authors)

## Overview

This project is built using HTML, CSS, and JavaScript, providing a visually appealing and responsive layout for a hotel web app. The project includes the following sections:

- A header with a hamburger menu for navigation.
- A hero section with a search bar for destinations.
- Several sections like "Why Choose Us," "Special Offers," "Reviews," and a footer with links and social icons.

## Live Demo

- Check out the live demo of the project: [Live Demo](https://example-live-demo-link.com)

## Technologies Used

- HTML5
- CSS3
- JavaScript (for interactive menu)

## Features

- **Responsive Design**: Layout adjusts to various screen sizes using media queries.
- **Hamburger Menu**: A mobile-friendly navigation menu that toggles when clicked.
- **Modern Design**: Clean and structured UI using flexbox and custom CSS styles.
- **Interactive Reviews Section**: Dynamically loads reviews using JavaScript.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YourUsername/Hotel-Web-App.git
   ```
2. **Navigate to the Project Directory**:

      ```bash
      cd Hotel-Web-App
      ```
      Open the HTML File: Open `index.html` in your preferred web browser to view the project.

## Usage

This project is straightforward to use. The key HTML structure and JavaScript features ensure the page is interactive and mobile-friendly.

## Key HTML Structure

```
html
<header>
    <div class="logo-button">
        <button id="menuToggle" class="menu-toggle">&#9776;</button>
        <h1 class="logo">Your<span class="logo">.logo</span></h1>
    </div>
    <img src="Assets/images/nav icon.svg" alt="Header Icon" class="icon">
    <nav id="navMenu" class="nav-menu">
        <button id="closeMenu" class="close-menu">&times;</button>
        <ul>
            <li><a href="#">Last Minute Deals</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
    </nav>
</header>
```

## Key CSS Styles
The styles focus on creating a responsive design and making the navigation bar interactive. Here's an overview:

- **Header and Navigation Styles**: Includes styles for the logo, hamburger button, and the hidden navigation menu that slides in on mobile.
```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.nav-menu {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: #fff;
    flex-direction: column;
    padding: 20px;
}

.menu-toggle {
    font-size: 35px;
    cursor: pointer;
}

.close-menu {
    font-size: 35px;
    position: absolute;
    top: 10px;
    right: 10px;
}
```
## JavaScript
The JavaScript code manages the interaction for the hamburger menu, toggling the navigation panel on and off when clicked:

```javascript
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navMenu').style.display = 'flex';
});

document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('navMenu').style.display = 'none';
});
```
## Screen Shots
1. Mobile View with Hamburger Menu Closed:

   
   ![Screenshot 2024-10-03 210321](https://github.com/user-attachments/assets/a535b779-1a5c-4002-96cb-629157333e1d)

   

3. Mobile View with Hamburger Menu Open:


   ![Screenshot 2024-10-03 210347](https://github.com/user-attachments/assets/8822ee7e-350f-4be3-b719-a137dac563b0)

## License
This project is licensed under the MIT License.

## Authors

**Name**: Umar Lawan Sani

**Email**: umarfarouq447@gmail.com

**GitHub**: Xfarouq
