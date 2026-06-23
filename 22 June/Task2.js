// 1. Display product details.

let product = {
    productID: 138291028653,
    productName: "Samsung Galaxy S26 Ultra 5G",
    price: "₹1,50,999",
    stock: 50,

    productInfo: function productInfo() {
        console.log("Product ID: " + this.productID);
        console.log("Product Name: " + this.productName);
        console.log("Price: " + this.price);
        console.log("Stock: " + this.stock);
    }
};

console.log(product);

// 2. Change the price.

// product.price = "₹1,30,999";

// console.log(product);

// 3. Add a property `category`.

// product.category = "SmartPhone";

// console.log(product);

// 4. Remove the `stock` property.

// delete product.stock;

// console.log(product);

// 5. Create a method `productInfo()` that displays all product information.

// product.productInfo();