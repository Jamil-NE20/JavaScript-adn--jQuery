function extractText() {
  
    $("div#result").text($("ul#items li") // using .text(): to returns the text content from <ul> item lists. 
        .toArray().map(li => li.textContent).join(", ")); //map text content from the List.

    $(":button").css("background-color", "yellow"); // change the button color
    
        
};
