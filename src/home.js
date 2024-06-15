const loadHome = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Create a container for the background image
    const bgContainer = document.createElement('div');
    bgContainer.style.position = 'relative';
    bgContainer.style.width = '100%';
    bgContainer.style.height = '100vh'; // Full viewport height
    bgContainer.style.backgroundImage = 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    bgContainer.style.backgroundSize = 'cover';
    bgContainer.style.backgroundPosition = 'center';
    bgContainer.style.display = 'flex';
    bgContainer.style.flexDirection = 'column';
    bgContainer.style.justifyContent = 'center';
    bgContainer.style.alignItems = 'start';
    bgContainer.style.color = 'white';
    bgContainer.style.textAlign = 'center';

    const text = document.createElement('div');

    // Create headline
    const headline = document.createElement('p');
    headline.textContent = "Pizzeria";
    headline.style.marginTop = '20px';
    headline.style.fontSize = '48px';
    headline.style.fontWeight='Bold'
    text.appendChild(headline);

    // Create description
    const description = document.createElement('p');
    description.textContent = "Welcome to the best pizzeria in town. We serve delicious pizzas with fresh ingredients. Come and taste the difference!";
    description.style.margin = '20px auto';
    description.style.fontSize = '36px';
    description.style.maxWidth = '400px';
    text.appendChild(description);

    text.style.flexDirection= 'column';
    text.style.margin ='36px';

    bgContainer.appendChild(text);

    content.appendChild(bgContainer);
}

export default loadHome;
