// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Sticky Header
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Fetch Cryptocurrency Data (Example with CoinGecko API)
async function fetchCryptoData() {
    const marketsTable = document.querySelector('.markets-table');
    if (!marketsTable) return;
    
    try {
        // Show loading state
        marketsTable.innerHTML = `
            <div class="loader">
                <div class="spinner"></div>
                <p>Loading cryptocurrency data...</p>
            </div>
        `;
        
        // In a real application, you would make an API call to a cryptocurrency API
        // For example, using CoinGecko API: https://www.coingecko.com/en/api
        // const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        // const data = await response.json();
        
        // For demo purposes, we'll use mock data
        const mockData = [
            { symbol: 'btc', name: 'Bitcoin', current_price: 42500, price_change_percentage_24h: 2.5, market_cap: 815000000000 },
            { symbol: 'eth', name: 'Ethereum', current_price: 2300, price_change_percentage_24h: 1.8, market_cap: 275000000000 },
            { symbol: 'bnb', name: 'Binance Coin', current_price: 310, price_change_percentage_24h: -0.5, market_cap: 52000000000 },
            { symbol: 'sol', name: 'Solana', current_price: 105, price_change_percentage_24h: 5.2, market_cap: 45000000000 },
            { symbol: 'xrp', name: 'XRP', current_price: 0.62, price_change_percentage_24h: 1.2, market_cap: 33500000000 },
            { symbol: 'ada', name: 'Cardano', current_price: 0.58, price_change_percentage_24h: -1.5, market_cap: 20500000000 },
            { symbol: 'doge', name: 'Dogecoin', current_price: 0.09, price_change_percentage_24h: 3.7, market_cap: 12500000000 },
            { symbol: 'dot', name: 'Polkadot', current_price: 7.2, price_change_percentage_24h: 0.8, market_cap: 9200000000 },
            { symbol: 'matic', name: 'Polygon', current_price: 0.85, price_change_percentage_24h: 2.1, market_cap: 7900000000 },
            { symbol: 'shib', name: 'Shiba Inu', current_price: 0.000009, price_change_percentage_24h: -2.3, market_cap: 5300000000 }
        ];
        
        // Render the table with the data
        renderMarketsTable(mockData);
        
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        marketsTable.innerHTML = `
            <div class="error">
                <p>Failed to load cryptocurrency data. Please try again later.</p>
                <button onclick="fetchCryptoData()" class="btn btn-outline">Retry</button>
            </div>
        `;
    }
}

// Render Markets Table
function renderMarketsTable(data) {
    const marketsTable = document.querySelector('.markets-table');
    if (!marketsTable) return;
    
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${data.map((coin, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="coin-info">
                            <img src="https://cryptoicons.org/api/icon/${coin.symbol.toLowerCase()}/20" alt="${coin.name}" onerror="this.src='images/placeholder-coin.png'" />
                            <span>${coin.name} <span class="symbol">${coin.symbol.toUpperCase()}</span></span>
                        </td>
                        <td>$${coin.current_price.toLocaleString()}</td>
                        <td class="${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
                            ${coin.price_change_percentage_24h >= 0 ? '↑' : '↓'} ${Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </td>
                        <td>$${(coin.market_cap / 1000000000).toFixed(2)}B</td>
                        <td><button class="btn btn-outline btn-sm">Trade</button></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    marketsTable.innerHTML = tableHTML;
    
    // Add event listeners to trade buttons
    document.querySelectorAll('.btn-trade').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real app, this would navigate to the trading page
            alert('Trading functionality will be implemented in the full version.');
        });
    });
}

// Initialize the page
function init() {
    // Load cryptocurrency data
    fetchCryptoData();
    
    // Update data every 60 seconds
    setInterval(fetchCryptoData, 60000);
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
