class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, price, url,description, category) {
        const product =   {
            id: this.currentId++,
            name: name,
            price: price,
            description: description,
            url: url,
            category: category,
        }
        this.items.push(product);
    }
}

module.exports = ItemsController

        // const product= {
        // id :this.currentId++,
        // name : name, 
        // description : description, 
        // price : price, 
        // url , 
        // category
        // }
        // // Se instancia el objeto de la clase producto

        // const newProduct = new Product(this.currentId, name, description, price, url, category)
        // this.items.push(newProduct);
        // console.log(this.items)