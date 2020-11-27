$(document).ready(function()
{

	// Check for click events on the navbar burger icon
	$(".navbar-burger").click(function()
	{

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");

	});

	var pics = [];
	for (i = 0; i < (5 + 17); i++)
	{
		var new_pic = random_pic();
		while (pics.includes(new_pic))
		{
			new_pic = random_pic();
		}
		console.log(new_pic);
		$(".portfolio").append('<div class="portfolio__item"><img src="' + new_pic + '" alt="portfolio image"></div>');
		pics.push(new_pic);
	}

});

function random_pic()
{
	var dir_jpg = "images/jpg-by-number/";
	var dir_png = "images/png-by-number/";
	var rand_jpg = Math.floor(Math.random() * 17 + 1);
	var rand_png = Math.floor(Math.random() * 5 + 1);
	var jpg_or_png = Math.floor(Math.random() * 2);

	if (jpg_or_png === 0)
	{
		return dir_jpg + rand_jpg + ".jpg";
	}
	else
	{
		return dir_png + rand_png + ".png";
	}
}
