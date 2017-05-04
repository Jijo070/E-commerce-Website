var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'https://vignette2.wikia.nocookie.net/asphalt/images/b/b5/Asphalt_Injection_cover_art.jpg/revision/latest?cb=20130604022223',
		title: 'Asphalt 7',
		description: 'Asphalt 7 playstation edition',
		price: 20
		}),
	new Product({
		imagePath: 'https://static.giantbomb.com/uploads/scale_small/4/49445/2492102-halo+sa+22x28+rgb+lo_final.jpg',
		title: 'Halo 5',
		description: 'Halo 5 Spartan Assault',
		price: 40
		}),
	new Product({
		imagePath: 'http://www.rockstargames.com/maxpayne3/img/en_us/pc-cover-sm.jpg',
		title: 'Max Payne 3',
		description: 'Max Payne 3 PC edition',
		price: 80
		}),
	new Product({
		imagePath: 'http://vignette4.wikia.nocookie.net/gtawiki/images/7/76/CoverArt-GTAV.png/revision/latest?cb=20130826184215',
		title: 'GTA V',
		description: 'Grand Theft Auto V',
		price: 100
		}),
	new Product({
		imagePath: 'http://www.andropalace.org/wp-content/uploads/2016/12/clash-of-clans-696x358.jpg',
		title: 'clash-of-clans video game',
		descripton: 'Awesome Game!!!',
		price: 10
		})
];

var done = 0;
for(var i=0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}

