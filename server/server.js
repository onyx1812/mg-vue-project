const express = require('express')
const fs = require('fs')
const path = require('path')
const http = require('http')
const mysql = require('mysql')
const reload = require('reload')
const ejs = require('ejs')
const port = process.env.PORT || 9000
const history = require('connect-history-api-fallback')
const app = express()
app.use(history())
const server = http.createServer(app)

/*-------------------------------------------
Create connection
-------------------------------------------*/
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mg-vue-project'
});

/*-------------------------------------------
Connect DB
-------------------------------------------*/
db.connect(err => {
	if(err){ throw err }
});

const frontPath = path.join(__dirname, '../front/dist/')
const backPath = path.join(__dirname, '../back/dist/')

app.set("view options", {layout: false});
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(frontPath));
app.set('views', path.join(backPath));
app.use(express.static(frontPath))
app.use(express.static(backPath))
app.use(express.json())
// //-------------------------Create DB-------------------------
// app.get('/create_db', (req, res) => {
//		 let sql = 'CREATE DATABASE vue_blog';
//		 db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 res.send('Database created...');
//		 });
// });

/*--------------------------------------------------
														U S E R S
--------------------------------------------------*/

//		 db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 res.send('Users table created...');
//		 });
// });

// //-------------------------User add / Registration-------------------------
// //	http://localhost:9000/user/add/?user_login=admin&user_pass=123456&user_name=Admin%20Admin&user_email=admin@gmail.com
// app.get('/user/add/', (req, res) => {
//		 let date = new Date();
//		 let post = {
//				 user_login: req.query.user_login,
//				 user_pass: req.query.user_pass,
//				 user_name: req.query.user_name,
//				 user_email: req.query.user_email,
//				 user_registered: date
//		 };
//		 let sql = 'INSERT INTO users SET ?';
//		 let query = db.query(sql, post, (err, result) => {
//				 if(err) throw err;
//				 res.send('User added');
//		 });
// });

// //-------------------------User login-------------------------
// //	http://localhost:9000/user/?user_email=admin@gmail.com
// //	http://localhost:9000/user/?user_login=admin
// app.get('/user/', (req, res) => {
//		 let user_login = req.query.user_login;
//		 let user_email = req.query.user_email;

//		 if(user_email){
//				 let sql = `SELECT * FROM users WHERE user_email = "${user_email}"`;
//				 let query = db.query(sql, (err, result) => {
//						 if(err) throw err;
//						 if(result.length === 0){
//								 res.send(false);
//						 } else {
//								 res.send(result);
//						 }
//				 });
//		 } else if(user_login){
//				 let sql = `SELECT * FROM users WHERE user_login = "${user_login}"`;
//				 let query = db.query(sql, (err, result) => {
//						 if(err) throw err;
//						 if(result.length === 0){
//								 res.send(false);
//						 } else {
//								 res.send(result);
//						 }
//				 });
//		 }

// });

// /*--------------------------------------------------
//														 P O S T S
// --------------------------------------------------*/

// //-------------------------Create table posts-------------------------
// app.get('/create-table-posts', (req, res) => {
//		 let sql = `CREATE TABLE posts(
//				 ID INT AUTO_INCREMENT,
//				 PRIMARY KEY(ID),
//				 post_author INT(20),
//				 post_date DATETIME DEFAULT NOW(),
//				 post_content LONGTEXT,
//				 post_title TEXT,
//				 post_excerpt TEXT,
//				 post_status VARCHAR(20),
//				 post_modified DATETIME
//		 )`;

//		 db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 res.send('Posts table created...');
//		 });
// });

// //-------------------------Post add-------------------------
// //	http://localhost:9000/post/add/?post_title=Post%201&post_content=Some%20long%20content&post_excerpt=Short%20content
// app.get('/post/add/', (req, res) => {
//		 let date = new Date();
//		 let post = {
//				 post_title: req.query.post_title,
//				 post_content: req.query.post_content,
//				 post_excerpt: req.query.post_excerpt,
//				 post_author: 1,
//				 post_date: date,
//				 post_status: 'published',
//				 post_modified: date
//		 };
//		 let sql = 'INSERT INTO posts SET ?';
//		 let query = db.query(sql, post, (err, result) => {
//				 if(err) throw err;
//				 res.send('Post added');
//		 });
// });

// //-------------------------Post update-------------------------
// //	http://localhost:9000/post/update/?id=2&post_title=Post%20UPDATED&post_content=Some%20long%20content&post_excerpt=Short%20content
// app.get('/post/update/', (req, res) => {
//		 let date = new Date();
//		 let post = {
//				 post_title: req.query.post_title,
//				 post_content: req.query.post_content,
//				 post_excerpt: req.query.post_excerpt,
//				 post_status: 'published',
//				 post_modified: date
//		 };
//		 let sql = `UPDATE posts SET ? WHERE ID = ${req.query.id}`;
//		 let query = db.query(sql, post, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('Post updated');
//		 });
// });

// //-------------------------Post by id-------------------------
// //	http://localhost:9000/post/?id=2
// app.get('/post/', (req, res) => {
//		 let sql = `SELECT * FROM posts WHERE ID = ${req.query.id}`;
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 if(result.length === 0){
//						 res.send(false);
//				 } else {
//						 res.send(result);
//				 }
//		 });
// });

// //-------------------------Post delete-------------------------
// //	http://localhost:9000/post/delete/?id=3
// app.get('/post/delete/', (req, res) => {
//		 let sql = `DELETE FROM posts WHERE ID = ${req.query.id}`;
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('deleted');
//		 });
// });


// // Insert post 1
// app.get('/addpost1', (req, res) => {
//		 let post = {title:'Post One', body:'This is post number one'};
//		 let sql = 'SELECT * FROM posts';
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('All Posts');
//		 });
// });

// // Insert post 2
// app.get('/addpost2', (req, res) => {
//		 let post = {title:'Post Two', body:'This is post number two'};
//		 let sql = 'INSERT INTO posts SET ?';
//		 let query = db.query(sql, post, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('Post 2 added...');
//		 });
// });

// // Select posts
// app.get('/getposts', (req, res) => {
//		 let sql = 'SELECT * FROM posts';
//		 let query = db.query(sql, (err, results) => {
//				 if(err) throw err;
//				 console.log(results);
//				 res.send('Posts fetched111...');
//		 });
// });

// // Select single post
// app.get('/getpost/:id', (req, res) => {
//		 let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('Post fetched...');
//		 });
// });

// // Update post
// app.get('/updatepost/:id', (req, res) => {
//		 let newTitle = 'Updated Title';
//		 let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('Post updated...');
//		 });
// });

// // Delete post
// app.get('/deletepost/:id', (req, res) => {
//		 let newTitle = 'Updated Title';
//		 let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 console.log(result);
//				 res.send('Post deleted...');
//		 });
// });

// //-------------------------Posts-------------------------
// //	http://localhost:9000/posts/
// app.get('/posts/', (req, res) => {
//		 let sql = 'SELECT * FROM posts';
//		 let query = db.query(sql, (err, result) => {
//				 if(err) throw err;
//				 res.send(result);
//		 });
// });

/*-------------------------------------------
ROUTING
-------------------------------------------*/
app.get('/api', (req, res) => {
	res.send('Hello, World! 123');
});

app.post('/api/user/', (req, res) => {
	const email = req.body.email;
	const pass = req.body.password;
	const sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${pass}"`;
	db.query(sql, (err, result) => {
		if(err) throw err;
		if(result.length === 0){
			res.send(false);
		} else {
			res.send(result);
		}
	});
});

app.post('/api/user/add', (req, res) => {
	const date = new Date();
	const user = {
		password: req.body.password,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		phone: req.body.phone,
		country: req.body.country,
		city: req.body.city,
		address: req.body.address,
		registered: date,
		role: 0
	};
	let sql = 'INSERT INTO users SET ?';
	db.query(sql, user, (err, result) => {
		if(err){
			if( err.code == 'ER_DUP_ENTRY'){
				res.send( JSON.stringify('exist') );
			} else {
				throw err;
			}
		} else {
			// res.send( JSON.stringify(result.insertId) );
			let sql = `SELECT * FROM users WHERE ID = "${result.insertId}"`;
			db.query(sql, (err, result) => {
				if(err) throw err;
				if(result.length === 0){
					res.send(false);
				} else {
					res.send(result);
				}
			});
		}
	});
});

app.post('/api/user/update', (req, res) => {
	const date = new Date();
	const user = {
		password: req.body.password,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		phone: req.body.phone,
		country: req.body.country,
		city: req.body.city,
		address: req.body.address,
		registered: date,
		role: 0
	};
	let sql = `UPDATE users SET ? WHERE email = "${req.body.email}"`;
	db.query(sql, user, (err, result) => {
		if(err) throw err;
		// res.send(result);
		let sql = `SELECT * FROM users WHERE email = "${req.body.email}"`;
		db.query(sql, (err, result) => {
			if(err) throw err;
			if(result.length === 0){
				res.send(false);
			} else {
				res.send(result);
			}
		});
	});
});


const stripe = require('stripe')('sk_test_Tdn64ZHF8E2SG6RF1nONNQUh');
app.post('/api/payment/stripe', (req, res) => {

	let token_id = null;

	const address_arr = {
		city: req.body.city,
		country: req.body.country,
		line1: req.body.address,
		postal_code: req.body.postal_code,
		state: req.body.state,
	};

	stripe.tokens.create({
		card: {
			number: req.body.card_number,
			exp_month: Number(req.body.expiry_month),
			exp_year: Number(req.body.expiry_year),
			cvc: req.body.card_code,
		},
	}, (err, token) => {
		if(err) res.send(JSON.stringify(err));
		stripe.customers.create({
			source: token.id,
			email: req.body.email,
			name: req.body.first_name+' '+req.body.last_name,
			phone: req.body.phone,
			address: address_arr,
			shipping: {
				address: address_arr,
				name: req.body.first_name+' '+req.body.last_name,
				phone: req.body.phone
			}
		}, (err, customer) => {
			if(err) res.send(JSON.stringify(err));
			stripe.charges.create({
				amount: Number(req.body.amount) * 100,
				currency: req.body.currency,
				description: req.body.order_id,
				customer: customer.id,
				receipt_email: req.body.email,
				shipping: {
					address: address_arr,
					name: req.body.first_name+' '+req.body.last_name,
					phone: req.body.phone
				},
				metadata: {
					order_id: req.body.order_id
				}
			}, (err, charge) => {
				if(err) res.send(JSON.stringify(err));
				const result = {
					status: charge.status,
					order_id: req.body.order_id
				};
				res.send(result);
			});
		});
	});

});

app.get('/', (req, res) => {
	res.render(path.join(frontPath+'index.html'))
});

app.get('/admin', (req, res) => {
	res.render(path.join(backPath+'index.html'))
});

/*-------------------------------------------
Server Listen
-------------------------------------------*/
reload(app).then(function (reloadReturned) {
	server.listen(port, () => {
console.log(`----------------------------------------------------------
		 Server has been started on http://localhost:${port}
----------------------------------------------------------`)
	})
}).catch(function (err) {
	console.error('Reload could not start, could not start server/sample app', err)
})