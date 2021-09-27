const loadData = () => {
    return {
        "pets": [
            {
                "name": "Sylvester",
                "type": "Cat"
            },
            {
                "name": "Bugs",
                "type": "Bunny"
            },
            {
                "name": "Wil-e",
                "type": "Coyote"
            },
        ]
    };
};

const renderData = () => {
    // Load the data into a variable
    const data = loadData();
    console.log(data.pets); // Output the data to the console to verify

    // Create a new HTML element to store the output
    const petsContainer = document.getElementById('pets-container');

    // For each pet in data, create a new HTML element with some info about the pet
    data.pets.map((pet) => {
        let petMarkup = document.createElement('div');  // Create a new div element
        petMarkup.innerHTML = `${pet.name} is a ${pet.type}`;    // Set the content of the div

        petsContainer.append(petMarkup);    // Add the new HTML element to the container
    });
};

renderData();