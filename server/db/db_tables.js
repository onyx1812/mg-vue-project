module.exports = (db, callback) => {

	const tables = [
		{
			name: 'users',
			sql: 'ID INT AUTO_INCREMENT, PRIMARY KEY(ID), password VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(100), phone VARCHAR(20), country VARCHAR(255), city VARCHAR(255), address VARCHAR(255), balance DECIMAL(15,2), story LONGTEXT, registered DATETIME DEFAULT NOW(), role INT(1) DEFAULT "0", UNIQUE KEY unique_email (email)'
		},
		{
			name: 'posts',
			sql: 'ID INT AUTO_INCREMENT, PRIMARY KEY(ID), post_author INT(20), post_date DATETIME DEFAULT NOW(), post_content LONGTEXT, post_title TEXT, post_excerpt TEXT, post_status VARCHAR(20), post_modified DATETIME'
		}
	]
	let i = 0;
	const json = {
		games: [
			{
				items: [{item:1, bet: '1.00'}, {item:30, bet: '2.00'}, {item:24, bet: '2.50'}],
				rate: '1.00',
				won: '20',
				result: 0,
				date: '01-04-2020, 20:22:56'
			},
			{
				items: [{item:1, bet: '1.00'}, {item:30, bet: '2.00'}, {item:24, bet: '2.50'}],
				rate: '1.00',
				won: '30',
				result: 1,
				date: '01-05-2020, 20:28:59'
			}
		]
	};
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
							password: '9J8iak45@',
							first_name: 'Max',
							last_name: 'Globa',
							email: 'onyx18121990@gmail.com',
							phone: '+380731817768',
							country: 'UA',
							city: 'Mykolaiv',
							address: '38A Lazurna, 64 apt.',
							balance: 100.00,
							story: JSON.stringify(json),
							registered: date,
							role: 1
						};
						sql = 'INSERT INTO users SET ?';
						db.query(sql, user, (err, result) => {
							if(err) throw err
							console.log('User added')
							console.log('    user: onyx1812')
							console.log('    pass: 9J8iak45@')
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