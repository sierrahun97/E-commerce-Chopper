class ItemsController {
    constructor(currentId = 0 ) {
        const storedId = localStorage.getItem('currentId');
        this.currentId = storedId ? parseInt(storedId) : currentId;
        this.items = [];
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

        localStorage.setItem('currentId', this.currentId);
    
    }
}
export const itemsController = new ItemsController();