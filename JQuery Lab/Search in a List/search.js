function search() {
	let text = $('#searchText').val(); // .val()-returns the attribute value of specified elements
	let towns = $('#towns li').toArray(); //Convert the <li> elements to an array,
	let matchesElements = 0; // counter
	for (let town of towns) {
		
	// indexOf():search the array for a specified item and returns the first index or -1 if it is not present.
		if (town.textContent.indexOf(text) != -1) 
    	{
			matchesElements++;
			$(town).css('font-weight', 'bold');
		}
		else {
			$(town).css('font-weight', '');
		}
	}

	$('div#result').text(matchesElements + ' matches found.') // show the total match .
}