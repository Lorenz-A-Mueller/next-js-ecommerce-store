export async function up(
  sql: (arg: TemplateStringsArray) => Promise<string[]>,
) {
  console.log('Creating products table...');
  await sql`

CREATE TABLE products(
product_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product_name varchar(30) NOT NULL,
product_price integer NOT NULL,
product_size varchar(10) NOT NULL,
product_desc varchar(1000) NOT NULL
);
	`;
}

export async function down(
  sql: (arg: TemplateStringsArray) => Promise<string[]>,
) {
  console.log('Dropping products table');
  await sql`

	DROP TABLE products;

	`;
}
