$(document).ready(function() {
	const amenities_list = [];

	//listen for changes on checkboxes
	$('input[type="checkbox"]').change(function() {
		//get amenity id
		const amenityId = $(this).data('amenity_id') || $(this).val();
		//check if box is checked
		if ($(this).is(':checked')) {
			if (!amenities_list.includes(amenityId)) {
				amenities_list.push(amenityId);
			}
		}
		else {
			const index = amenities_list.indexOf(amenityId);
			if (index !== -1) {
				amenities_list.splice(index, 1);
			}
		}
		//update the h4
		const amenitiesText = amenities_list.join(', ');
		$('#amenities h4').text(amenitiesText);
	});
});

