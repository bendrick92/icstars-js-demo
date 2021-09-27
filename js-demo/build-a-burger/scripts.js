const ingredientValue = document.getElementById('ingredient-value');
const addIngredient = document.getElementById('add-ingredient');
const burgerContainer = document.getElementById('burger-container');
const eatBurger = document.getElementById('eat-burger');

addIngredient.onclick = () => {
    // Get value of the text input
    let newIngredient = ingredientValue.value;
    console.log(ingredientValue.value); // Output to console to verify

    // Create new HTML element with text input value
    let ingredientMarkup = document.createElement('div');
    ingredientMarkup.innerHTML = newIngredient;

    burgerContainer.append(ingredientMarkup);   // Add new HTML element to the container
};

eatBurger.onclick = () => {
    burgerContainer.innerHTML = 'OM NOM NOM';
    setTimeout(() => {
        burgerContainer.innerHTML = '';
    }, 1000);
};