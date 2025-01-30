import "./styles.css";

const createMenuPage = () => {
    const content = document.querySelector('#content');
    content.innerHTML = ''; 
    
    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage');

    const header1 = document.createElement('h2');
    header1.textContent = "Menu";
    menuPage.appendChild(header1);

    const menuList = document.createElement('div');
    menuList.classList.add('menuList');
    menuPage.appendChild(menuList);

    const foodList = document.createElement('div');
    foodList.classList.add('foodList');
    menuList.appendChild(foodList);

    const foodHeader = document.createElement('h3');
    foodHeader.classList.add('foodHeader');
    foodHeader.textContent = 'Food';
    foodList.appendChild(foodHeader);

    const foods = document.createElement('ul');
    const foodItems = [
        "Classic Margherita Pizza - $12",
        "Grilled Chicken Caesar Salad - $10",
        "Spaghetti Bolognese - $14",
        "Beef Burger - $11",
        "Grilled Salmon - $18",
        "Vegetable Stir-Fry - $9",
        "BBQ Ribs - $16",
        "Chicken Tacos - $10",
        "Mushroom Risotto - $13",
        "Cheesecake - $7"
    ];
    foodItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        foods.appendChild(li);
    });
    foodList.appendChild(foods);

    const drinkList = document.createElement('div');
    drinkList.classList.add('drinkList');
    menuList.appendChild(drinkList);

    const drinkHeader = document.createElement('h3');
    drinkHeader.classList.add('drinkHeader');
    drinkHeader.textContent = 'Drinks';
    drinkList.appendChild(drinkHeader);

    const drinks = document.createElement('ul');
    const drinkItems = [
        "Sparkling Water - $2",
        "Fresh Orange Juice - $4",
        "Iced Tea - $3",
        "Lemonade - $3.50",
        "House Red Wine (Glass) - $6",
        "House White Wine (Glass) - $6",
        "Craft Beer - $5",
        "Mojito - $8",
        "Espresso - $2.50",
        "Cappuccino - $3.50"
    ];
    drinkItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        drinks.appendChild(li);
    });
    drinkList.appendChild(drinks);


    content.appendChild(menuPage);
}

export default createMenuPage;