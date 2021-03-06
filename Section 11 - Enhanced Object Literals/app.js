// enhanced object literals

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => book.title = title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// when to use enhanced literals?

function saveFile(url, data) {
  $.ajax({ 
    url,
    data,
    method: 'POST'
  });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);
