function Product(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
}

function Basket() {
    this.products = [];
    this.AddProduct = function (...items) {
        for (let i = 0; i < items.length; i++) {
            if (!items[i] instanceof Product) continue;
            this.products.push(items[i]);
        }
    }
    this.CalcTotal = function () {
        let total = {
            price: 0,
            amount: 0
        }
        for (let i = 0; i < this.products.length; i++) {
            total.amount += this.products[i].amount;
            total.price += this.products[i].amount * this.products[i].price;
        }
        document.write(`<p>Total amount: ${total.amount}, Total price: ${total.price}</p>`);
        return total;
    }
    this.PrintShoppingInfo = function () {
        if (!this.products.length) {
            document.write("Shopping list is empty");
            return;
        }
        document.write("<table><tr><th>Name</th><th>Price</th><th>Amount</th></tr>");
        for (let i = 0; i < this.products.length; i++) {
            document.write("<tr>");
            document.write(`<td>${this.products[i].name}</td><td>${this.products[i].price} hrn</td><td>${this.products[i].amount}</td>`);
            document.write("</tr>");
        }
        document.write("</table><br>");
    }
    this.SortByName = function () {
        function nameSort(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        }
        this.products.sort(nameSort);
    }
    this.SortByPrice = function () {
        function priceSort(a, b) {
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
            return nameSort(a, b);
        }

        function nameSort(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        }
        this.products.sort(priceSort);
    }
    this.sortByAnything = function () {
        function nameSort(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return costSort(a, b);
        }

        function costSort(a, b) {
            costA = a.amount * a.price;
            costB = b.amount * b.price;
            if (costA < costB) {
                return 1;
            }
            if (costA > costB) {
                return -1;
            }
            return amountSort(a, b);
        }

        function amountSort(a, b) {
            if (a.amount < b.amount) {
                return 1;
            }
            if (a.amount > b.amount) {
                return -1
            }
            return priceSort(a, b);
        }

        function priceSort(a, b) {
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
            return 0;
        }
        this.products.sort(nameSort);
    }
}
let apples = new Product("Apple", 25, 10);
let cereals = new Product("Cereal", 40, 2);
let bread = new Product("Bread", 15, 5);

let basket = new Basket();
basket.AddProduct(apples, cereals, bread);
basket.PrintShoppingInfo(); 
basket.CalcTotal(); 
basket.SortByName();
basket.PrintShoppingInfo();

let banana = new Product("Banana", 30, 5);
let apricots = new Product("Apricot", 30, 10);

// sorted by price then by name
basket.AddProduct(banana, apricots);
basket.SortByPrice();

// same name, different cost
let apples1 = new Product("Apple", 10, 15);

// same name, same cost, different amount
let cereal1 = new Product("Cereal", 20, 4);


basket.AddProduct(apples1, cereal1);
basket.sortByAnything();
basket.PrintShoppingInfo();