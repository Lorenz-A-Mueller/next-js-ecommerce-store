import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

type Product = {
  productId: number;
  productName: string;
  productPrice: number;
  productSize: string;
  productDesc: string;
};

type User = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
};

dotenvSafe.config();
const sql = postgres();

export async function getProducts() {
  const products = await sql<Product[]>`
  SELECT * FROM products;
  `;
  return products.map((product) => {
    return camelcaseKeys(product);
  });
}

export async function getProduct(id: number) {
  const product = await sql<[Product]>`
  SELECT * FROM products
  WHERE product_id = ${id}
  `;
  return camelcaseKeys(product[0]);
}

export async function getUsers() {
  const users = await sql<User[]>`
  SELECT * FROM users;
  `;
  return users.map((user) => {
    return camelcaseKeys(user);
  });
}

export async function getUser(id: number) {
  const user = await sql<[User]>`
  SELECT * FROM users
  WHERE id = ${id};
  `;
  return camelcaseKeys(user[0]);
}

export async function createUser(newUser: string[]) {
  const user = await sql<[User]>`
  INSERT INTO users
  (user_name, password, first_name, last_name)
  VALUES
  (${newUser[0]}, ${newUser[1]}, ${newUser[2]}, ${newUser[3]});
  `;
  return camelcaseKeys(user[0]);
}

export async function deleteUser(userId: number) {
  const user = await sql<[User]>`
  DELETE FROM users
  WHERE
  id = ${userId}
  `;
  return camelcaseKeys(user[0]);
}

export async function patchUser(
  id: number,
  newName: string,
  newPassword: string,
  newFirstName: string,
  newLastName: string,
) {
  const user = await sql<[User]>`
  UPDATE users
  SET
   user_name = ${newName},
   password = ${newPassword},
   first_name = ${newFirstName},
   last_name= ${newLastName}
   WHERE
   id = ${id}
   RETURNING
  id, user_name, password, first_name, last_name;
  `;
  return camelcaseKeys(user[0]);
}
