// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check if the previous page URL is one of the specified URLs
let previousPageURL = document.referrer;

if (previousPageURL === 'https://sulawe.mx/menu-web/es/' || previousPageURL === 'https://sulawe.mx/menu-web/en/') {
    // Add the class .remove-price to the body
    document.body.classList.add('remove-price');
    
    // Set a cookie to remember the state
    setCookie('removePrice', 'true', 30);
} else if (previousPageURL === 'https://sulawe.mx/menu/es/' || previousPageURL === 'https://sulawe.mx/menu/en/') {
    // Remove the class .remove-price from the body
    document.body.classList.remove('remove-price');

    // Delete the cookie to remember the state
    setCookie('removePrice', 'false', -1);
}

// Check if the cookie is set and add/remove the class accordingly
let shouldRemovePrice = getCookie('removePrice');
if (shouldRemovePrice === 'true') {
    document.body.classList.add('remove-price');
} else {
    document.body.classList.remove('remove-price');
}

// Update the cookie when navigating to subsequent pages
document.addEventListener('click', function (event) {
    let target = event.target;
    // Check if the clicked link is within the same level
    if (target.tagName === 'A' && target.href) {
    setCookie('removePrice', document.body.classList.contains('remove-price') ? 'true' : 'false', 30);
    }
});
