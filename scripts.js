const coffeeList = document.getElementById('coffeeList');

function addSingleCoffee(coffee) {
    const newListItem = document.createElement('li');
    const newText = document.createTextNode(coffee.title)
    newListItem.appendChild(newText)
    return newListItem
}

function newCoffeeList(listOfCoffees) {
    const newList = document.createElement('ul')
    //loop through list of coffees and add each to this list
    listOfCoffees.forEach(coffee => {
        const thisItem = addSingleCoffee(coffee)
        newList.appendChild(thisItem)
    })
    coffeeList.innerText = ""
    coffeeList.appendChild(newList)
}

function getCoffee(type) {
    coffeeList.innerText = "Loading..."
    fetch(`https://api.sampleapis.com/coffee/${type}`)
        .then(response => response.json())
        .then(data => {
            newCoffeeList(data)
        })
        .catch(err => console.error(err))
};