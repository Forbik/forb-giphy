if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/forb-giphy/sw.js', { scope: '/forb-giphy/' })})}