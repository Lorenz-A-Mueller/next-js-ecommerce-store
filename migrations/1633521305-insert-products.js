const products = [
  {
    name: 'Apples',
    price: 89,
    size: 'piece',
    desc: 'Gala apples from Austria',
  },
  { name: 'Radishes', price: 123, size: 'bag', desc: ' ' },
  { name: 'Bananas', price: 204, size: 'bundle', desc: ' ' },
  { name: 'Onions', price: 111, size: 'bundle', desc: ' ' },
  { name: 'Lettuce', price: 99, size: 'piece', desc: ' ' },
  { name: 'Pineapples', price: 250, size: 'piece', desc: ' ' },
  { name: 'Peanuts', price: 259, size: 'bag', desc: ' ' },
  { name: 'Raspberries', price: 299, size: 'package', desc: ' ' },
  { name: 'Strawberries', price: 259, size: 'package', desc: ' ' },
  { name: 'Blueberries', price: 290, size: 'package', desc: ' ' },
  { name: 'Broccoli', price: 189, size: 'piece', desc: ' ' },
  { name: 'Cabbage', price: 99, size: 'piece', desc: ' ' },
  { name: 'Carrots', price: 147, size: 'bag', desc: ' ' },
  { name: 'Fennel', price: 175, size: 'piece', desc: ' ' },
  { name: 'Butternut Squash', price: 305, size: 'piece', desc: ' ' },
  { name: 'Hokkaido Pumpkin', price: 292, size: 'piece', desc: ' ' },
  { name: 'Mangos', price: 170, size: 'piece', desc: ' ' },
  { name: 'Mushrooms', price: 187, size: 'package', desc: ' ' },
  { name: 'Papayas', price: 204, size: 'piece', desc: ' ' },
  { name: 'Peaches', price: 213, size: 'bag', desc: ' ' },
  { name: 'Pears', price: 59, size: 'piece', desc: ' ' },
  { name: 'Potatoes', price: 119, size: 'bag', desc: ' ' },
  { name: 'Radicchio', price: 200, size: 'piece', desc: ' ' },
  { name: 'Tomatoes', price: 197, size: 'package', desc: ' ' },
];

exports.up = async function up(sql) {
  console.log('Adding products to the products table...');

  for (const product of products) {
    await sql`
		INSERT INTO products
		(product_name, product_price, product_size, product_desc)
		VALUES
		(${product.name}, ${product.price}, ${product.size}, ${product.desc});
`;
  }
};

// (there is also a shortcut available (instead of looping) at the postgres documentation

exports.down = async function down(sql) {
  console.log('Deleting products from the products table');
  for (const product of products) {
    await sql`
		DELETE FROM products
		WHERE
		product_name = ${product.name} AND product_price = ${product.price} AND product_size = ${product.size} AND product_desc = ${product.desc};
`;
  }
};
