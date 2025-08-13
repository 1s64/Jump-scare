// script.js

// Load the HTML file from /src into the page
fetch('code/src/index.html')
  .then(response => response.text())
  .then(html => {
    document.body.innerHTML = html;
  })
  .catch(err => console.error('Failed to load HTML:', err));

// Load the CSS file dynamically from /src
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'code/src/style.css';
document.head.appendChild(link);
