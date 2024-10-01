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
export const itemsController = new ItemsController();