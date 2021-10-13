exports.up = async function up(sql) {
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
};

exports.down = async function down(sql) {
  console.log('Dropping users table');
  await sql`

	DROP TABLE users;

	`;
};
