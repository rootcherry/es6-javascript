var products = [
    { name : 'cucumber', type: 'vegetable' },
    { name : 'banana', type: 'fruit' },
    { name : 'celery', type: 'vegetable' },
    { name : 'orange', type: 'fruit' }
];

// ES5

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

// console.log(filteredProducts);

// ES6 - refactor

products.filter(function(product) {
    return product.type === 'fruit';
});

// more on filtering

var products = [
    { name : 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name : 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name : 'celery', type: 'vegetable', quantity: 30, price: 9 },
    { name : 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// Type is 'vegetable', quantity is greater than 0, price is less than 10

const result = products.filter(function(product) {
    return product.type === 'vegetable' 
    && product.quantity > 0 
    && product.price < 10;
});

console.log(result);
















