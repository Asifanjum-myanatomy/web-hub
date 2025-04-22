# SPA Hash-Based Routing

A lightweight Single-Page Application (SPA) that simulates multi-page navigation using hash-based routing. Built with plain HTML, CSS, and JavaScript—no external dependencies.

## 🚀 Features

- **Hash-Based Routing**: Navigate between “pages” via URL hash fragments (`#home`, `#about`).
- **Responsive Design**: Mobile-friendly layouts with CSS Grid and Flexbox.
- **Modern UI**: Glassmorphism, gradients, shadows, hover effects, and smooth page transitions.
- **Form Validation**: Client-side email checking (regex) and required-field enforcement.
- **Page Transitions**: Fade-in animations on content change.
- **Zero Dependencies**: Everything implemented with vanilla HTML, CSS, and JavaScript.

## 📁 File Structure

```
project/
├── index.html    # Main HTML markup and hash targets
├── styles.css    # Theme variables, layout, and animations
└── app.js        # Routing, event handlers, and form logic
```

## ⚙️ Installation & Usage

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/your-username/spa-hash-routing.git
   cd spa-hash-routing
   ```
2. **Open** `index.html` in any modern web browser.
3. **Navigate**:
   - Click the nav links or change the URL hash to switch pages.
   - Submit the contact form to see validation in action.
   - Resize the browser window to test responsive layouts.

## 🎨 Customization & Extensibility

- **Add New Pages**: Copy the existing `<section>` structure and assign a unique `id`. Update navigation links and routing logic in `app.js`.
- **Dark Mode**: Introduce CSS variables for dark-theme colors and toggle them via JavaScript.
- **Backend Integration**: Replace `alert()` in form submission with a `fetch()` call to your server endpoint.
- **Animations**: Modify or add CSS `@keyframes` for custom transition effects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please follow the existing code style and include meaningful commit messages.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


