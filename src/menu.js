const loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const headline = document.createElement('p');
    headline.textContent = "Menu";
    headline.style.textAlign = 'center'; 
    headline.style.marginBottom = '20px';
    headline.style.fontSize = '48px';
    headline.style.fontWeight = 'bold'; 
    content.appendChild(headline);

    const pizzaItems = document.createElement('div');
    pizzaItems.style.display = 'flex';
    pizzaItems.style.flexDirection= 'column';
    pizzaItems.style.gap = '20px'; 
    pizzaItems.style.padding = '20px';

    const createMenuItem = (name, description, price) => {
        const menuItem = document.createElement('div');
        menuItem.style.overflow = 'hidden';
        menuItem.style.display = 'flex';
        menuItem.style.marginRight = '48px';
        menuItem.style.marginLeft = '48px';
        menuItem.style.justifyContent = 'space-between';
        menuItem.style.alignContent = 'start';
        menuItem.style.padding = '15px';

        const items  = document.createElement('div');
        
        const pizzaName = document.createElement('p');
        pizzaName.textContent = name;
        pizzaName.style.marginBottom = '10px';
        pizzaName.style.fontSize = '36px';
        pizzaName.style.fontWeight= 'bold';

        const pizzaDesc = document.createElement('p');
        pizzaDesc.textContent = description;
        pizzaDesc.style.marginBottom = '10px';
        pizzaDesc.style.fontSize = '36px';

        items.appendChild(pizzaName);
        items.appendChild(pizzaDesc);

        const pizzaPrice = document.createElement('p');
        pizzaPrice.textContent = price;
        pizzaPrice.style.fontWeight = 'bold';
        pizzaPrice.style.fontSize = '36px';

        menuItem.appendChild(items);
        menuItem.appendChild(pizzaPrice);
        
        pizzaItems.appendChild(menuItem);
    };

    createMenuItem("Margherita", "Fresh tomatoes, fresh mozzarella, fresh basil", "$12.50");
    createMenuItem("Formaggio", "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)", "$15.50");
    createMenuItem("Parma", "Fresh tomatoes, mozzarella, parma, bacon, fresh arugula", "$16.50");
    createMenuItem("Meat Town", "Fresh tomatoes, mozzarella, hot pepperoni, hot sausage, beef, chicken", "$18.50");
    createMenuItem("Pineapple'o'clock", "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil", "$20.50");

    content.appendChild(pizzaItems);
}

export default loadMenu;
