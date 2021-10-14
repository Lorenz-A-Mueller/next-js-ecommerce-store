export async function up(
  sql: (arg: TemplateStringsArray) => Promise<string[]>,
) {
  console.log('Adding users to the users table...');

  await sql`
		INSERT INTO users
		(user_name, password, first_name, last_name)
		VALUES
		('test.test@gmail.com', 'MyTestPassword1', 'test', 'test');
`;
}

export async function down(
  sql: (arg: TemplateStringsArray) => Promise<string[]>,
) {
  console.log('Deleting users from the users table');
  await sql`
		DELETE FROM users
		WHERE
		user_name = 'test.test@gmail.com'
`;
}
