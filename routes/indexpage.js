module.exports.set = function (app) {
	app.get('/', (req, res) => {
		res.render('index', {
			title: "Sting's Website",

			metadata: {
				description: "Sting's personal website. Why are you reading this?",
				og_title: "Sting's Website",
				og_description: "Sting's personal website. Why are you reading this?",
				og_url: "https://stinggy.com",
				og_image: "https://stinggy.com/android-chrome-512x512.png"
			}
		});
	});
}
