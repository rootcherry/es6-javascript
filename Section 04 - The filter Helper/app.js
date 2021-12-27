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
