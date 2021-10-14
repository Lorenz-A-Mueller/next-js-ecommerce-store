export async function up(
  sql: (arg: TemplateStringsArray) => Promise<string[]>,
) {
  console.log('Creating users table...');
  await sql`

CREATE TABLE users(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
user_name varchar(50) NOT NULL,
password varchar(20) NOT NULL,
first_name varchar(20) NOT NULL,
last_name varchar(20) NOT NULL
);
	`;
}

export async function down(
  sql: (arg: TemplateStringsArray) => Promise<string[]>,
) {
  console.log('Dropping users table');
  await sql`

	DROP TABLE users;

	`;
}
