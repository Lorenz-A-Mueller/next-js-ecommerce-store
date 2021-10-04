import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

dotenvSafe.config();
const sql = postgres();

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;

  return products.map((product) => {
    return camelcaseKeys(product);
  });
}

export async function getProduct(id) {
  const product = await sql`
  SELECT * FROM products
  WHERE product_id = ${id}
  `;
  return camelcaseKeys(product[0]);
}

export async function getUsers() {
  const users = await sql`
  SELECT * FROM users;
  `;

  return users.map((user) => {
    return camelcaseKeys(user);
  });
}

export async function getUser(id) {
  const user = await sql`
  SELECT * FROM users
  WHERE id = ${id};
  `;
  return camelcaseKeys(user[0]);
}

// export const products = [
//   {
//     id: '1',
//     name: 'Apple',
//     image: 'apple.jpeg',
//     price: 1.99,
//     size: 'kg',
//     desc: 'Gala apples from Austria',
//   },
//   { id: '2', name: 'Radish', image: 'radish.jpeg', price: 1.23, size: 'kg' },
//   { id: '3', name: 'Banana', image: 'banana.jpeg', price: 2.04, size: 'kg' },
//   { id: '4', name: 'Onion', image: 'onion.jpeg', price: 1.11, size: 'kg' },
//   {
//     id: '5',
//     name: 'Lettuce',
//     image: 'lettuce.jpeg',
//     price: 1.01,
//     size: 'piece',
//   },
//   {
//     id: '6',
//     name: 'Pineapple',
//     image: 'pineapple.jpeg',
//     price: 2.51,
//     size: 'piece',
//   },
//   {
//     id: '7',
//     name: 'Peanut',
//     image: 'peanut.jpeg',
//     price: 2.59,
//     size: 'bag',
//   },
//   {
//     id: '8',
//     name: 'Raspberry',
//     image: 'raspberry.jpeg',
//     price: 2.99,
//     size: 'package',
//   },
//   {
//     id: '9',
//     name: 'Strawberry',
//     image: 'strawberry.png',
//     price: 2.59,
//     size: 'package',
//   },
//   {
//     id: '10',
//     name: 'Blueberry',
//     image: 'blueberry.jpeg',
//     price: 2.49,
//     size: 'package',
//   },
//   {
//     id: '11',
//     name: 'Brokkoli',
//     image: 'brokkoli.jpeg',
//     price: 1.89,
//     size: 'piece',
//   },
//   {
//     id: '12',
//     name: 'Cabbage',
//     image: 'cabbage.jpeg',
//     price: 0.99,
//     size: 'piece',
//   },
//   { id: '13', name: 'Carrot', image: 'carrot.jpeg', price: 1.47, size: 'kg' },
//   { id: '14', name: 'Fennel', image: 'fennel.jpeg', price: 1.75, size: 'kg' },
//   {
//     id: '15',
//     name: 'Butternut Squash',
//     image: 'butternut.jpeg',
//     price: 3.05,
//     size: 'kg',
//   },
//   {
//     id: '16',
//     name: 'Hokkaido',
//     image: 'hokkaido.jpeg',
//     price: 2.92,
//     size: 'kg',
//   },
//   { id: '17', name: 'Mango', image: 'mango.jpeg', price: 1.7, size: 'piece' },
//   {
//     id: '18',
//     name: 'Mushrooms',
//     image: 'mushrooms.jpeg',
//     price: 1.87,
//     size: 'package',
//   },
//   {
//     id: '19',
//     name: 'Papaya',
//     image: 'papaya.jpeg',
//     price: 2.04,
//     size: 'piece',
//   },
//   { id: '20', name: 'Peach', image: 'peach.jpeg', price: 2.13, size: 'kg' },
//   { id: '21', name: 'Pear', image: 'pear.jpeg', price: 1.59, size: 'kg' },
//   {
//     id: '22',
//     name: 'Potato',
//     image: 'potato.jpeg',
//     price: 1.19,
//     size: 'bag',
//   },
//   {
//     id: '23',
//     name: 'Radicchio',
//     image: 'radicchio.jpeg',
//     price: 2.0,
//     size: 'piece',
//   },
//   { id: '24', name: 'Tomato', image: 'tomato.jpeg', price: 1.97, size: 'kg' },
// ];

export const users = [
  {
    id: '1',
    userName: 'lorenz.a.mueller@gmail.com',
    password: '1234',
    firstName: 'Lorenz',
    lastName: 'Mueller',
  },
  {
    id: '2',
    userName: 'lorenzarthur91@gmail.com',
    password: '4321',
    firstName: 'Arthur',
    lastName: 'Mueller',
  },
];
