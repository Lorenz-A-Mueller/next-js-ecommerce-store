exports.up = async function up(sql) {
  console.log('Adding users to the users table...');

  await sql`
		INSERT INTO users
		(user_name, password, first_name, last_name)
		VALUES
		('test.test@gmail.com', 'MyTestPassword1', 'test', 'test');
`;
};

exports.down = async function down(sql) {
  console.log('Deleting users from the users table');
  await sql`
		DELETE FROM users
		WHERE
		user_name = 'test.test@gmail.com'
`;
};
