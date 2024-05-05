$(document).ready(function() {
	const apiUrl = "http://0.0.0.0:5001/api/v1/places_search/";
	const dictload = {};

	$.ajax({
		url: apiUrl,
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(dictload),
		success: function(response) {
			$(".places").empty();

			//loop thru response and create an article tag for each place
			response.forEach(place => {
				const article = $("<article></article>");

				let description = place.description;
				description = description.replace(/Owner:.*/g, "").trim();

				article.append(`<h2>${place.name}</h2>`);
				article.append(`<p>${description}</p>`);

				$(".places").append(article);
			});
		}
	});
});
