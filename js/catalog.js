const ItemsControllers = require('./itemsController.js')

const items = new ItemsControllers();
console.log(items)

const name = "dogshow";
const price = 15000;
const description = "comida para perro";
const url = "dogshow.com";
const category = "Perro";


items.addItem(name, price, description, url, category)
console.log(items)