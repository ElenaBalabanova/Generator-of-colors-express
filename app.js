import expressHandlebars from 'express-handlebars';

const handlebars = expressHandlebars.create({
	defaultLayout: 'main',
	extname: 'hbs',
	helpers: {
		
	}
});

import express from 'express';
let app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.listen(3001, function () {
	console.log('running');
});

app.get('/', function(req, res) {
	let col = '#6aeba0';
	res.render('form', {
		col: colorRandom()
	});
});

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
function colorRandom() {
	let str = '#';
	for (let i = 0; i<= 5; i++) {
		let randomNum = Math.floor(Math.random()*(arr.length));
		str += arr[randomNum];
	}
	return str;
}


app.use('/public', express.static('views/public/'));





