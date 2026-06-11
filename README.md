# Chanheng's Personal Website

A responsive static personal website built with Vue.js and Vite. This portfolio showcases photography, biography details, and provides a way for visitors to get in touch.


## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Client-side routing with smooth transitions and hash offsets
- **Vite** - Next-generation frontend tooling
- **CSS3** - Modern styling with custom properties, Grid, and Flexbox
- **JavaScript ES6+** - Modern JavaScript features


## Customization
Feel free to clone and customized the website for your own use. To custimize:

- **Personal Information**: Update the content in each component with your information
- **Images**: Replace the portfolio assets in `src/assets/` with your photos and project screenshots
- **Colors**: Modify the CSS custom properties in `src/style.css` to match your brand colors
- **Content**: Update the text content and biography information
- **Contact Details**: Add your actual contact information and social media links

## Project Structure

```
src/
├── assets/             # Images and local web assets
├── components/
│   ├── About.vue       # About me section with vertical film marquee
│   ├── Contact.vue     # Contact form section
│   ├── Footer.vue      # Footer section
│   ├── Header.vue      # Navigation header with dark/light mode toggle
│   ├── Home.vue        # Hero/landing page content
│   ├── HomePage.vue    # Homepage layout wrapper
│   ├── InDevelopment.vue # Placeholder/404 page for blog or upcoming sections
│   └── Photography.vue # Dedicated photography portfolio gallery
├── App.vue             # Main app component layout and page transitions
├── main.js             # Application entry point
├── router.js           # Vue Router configuration
└── style.css           # Global custom properties and styles
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

---

Built with Vue.js, Vue Router, and Vite
