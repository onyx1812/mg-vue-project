module.exports = (db, callback) => {

	const tables = [
		{
			name: 'users',
			sql: 'ID INT AUTO_INCREMENT, PRIMARY KEY(ID), user_login VARCHAR(60), user_pass VARCHAR(255), user_name VARCHAR(255), user_email VARCHAR(100), user_registered DATETIME DEFAULT NOW(), user_role INT(1) DEFAULT "0"'
		},
		{
			name: 'posts',
			sql: 'ID INT AUTO_INCREMENT, PRIMARY KEY(ID), post_author INT(20), post_date DATETIME DEFAULT NOW(), post_content LONGTEXT, post_title TEXT, post_excerpt TEXT, post_status VARCHAR(20), post_modified DATETIME'
		}
	]
	let i = 0;
	tables.forEach(table => {
		let sql = `SELECT 1 FROM ${table.name} LIMIT 1`;
		db.query(sql, (err, result) => {
			if(result){
				console.log(`Tabsle "${table.name}" exist!`);
				i++
				if(tables.length === i){
					if(callback) callback('end');
				}
			} else{
				sql = `CREATE TABLE ${table.name}(${table.sql})`
				db.query(sql, (err, result) => {
					if(err) throw err
					i++
					console.log(`Table "${table.name}" created!`);
					const date = new Date();
					if(table.name == 'users'){
						let user = {
							user_login: 'admin',
							user_pass: 'qwerty123456',
							user_name: 'Admin Admin',
							user_email: 'admin@example.com',
							user_registered: date,
							user_role: 1
						};
						sql = 'INSERT INTO users SET ?';
						db.query(sql, user, (err, result) => {
							if(err) throw err
							console.log('User added')
							console.log('    user: admin')
							console.log('    pass: qwerty123456')
						});
					}
					else if(table.name == 'posts'){
						let post = {
							post_title: 'First post',
							post_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste fuga nesciunt reprehenderit placeat pariatur nostrum velit ullam quis perspiciatis mollitia!',
							post_excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
							post_author: 1,
							post_date: date,
							post_status: 'published',
							post_modified: date
						};
						sql = 'INSERT INTO posts SET ?';
						db.query(sql, post, (err, result) => {
							if(err) throw err
							console.log('Post added')
							if(tables.length === i){
								if(callback) callback('end');
							}
						});
					}
				})
			}
		})
	})
}