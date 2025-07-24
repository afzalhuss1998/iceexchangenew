# IceExchange - Cryptocurrency Trading Platform

A modern, responsive cryptocurrency trading platform inspired by AirBuzz, built with HTML5, CSS3, and vanilla JavaScript.

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Real-time Data**: Displays cryptocurrency prices and market data
- **Modern UI**: Clean and intuitive user interface
- **Interactive Elements**: Smooth animations and transitions
- **Mobile-Friendly Navigation**: Hamburger menu for smaller screens

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for local development)
- Git (optional, for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/iceexchange.git
   cd iceexchange
   ```

2. Open `index.html` in your web browser to view the website.

### Development

For local development with live reloading:

1. Install the Live Server extension for VS Code or use any local server of your choice.
2. Right-click on `index.html` and select "Open with Live Server".

## Project Structure

```
iceexchange/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── images/             # Image assets
```

## Customization

### Colors

You can customize the color scheme by modifying the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2b6cb0;
    --secondary-color: #4299e1;
    --dark-color: #1a202c;
    --light-color: #f7fafc;
    --success-color: #48bb78;
    --danger-color: #f56565;
    --text-color: #2d3748;
    --text-light: #718096;
    --border-color: #e2e8f0;
}
```

### API Integration

To display real cryptocurrency data, you'll need to integrate with a cryptocurrency API like CoinGecko or CoinMarketCap. Update the `fetchCryptoData()` function in `js/script.js` with your API key and endpoint.

## Deployment

You can deploy this website to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by AirBuzz
- Icons from [Font Awesome](https://fontawesome.com/)
- Crypto Icons from [CryptoIcons](https://cryptoicons.org/)
