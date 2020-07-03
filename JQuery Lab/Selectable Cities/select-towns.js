function attachEvents() {
    // attr() sets or returns attributes and values of the selected elements
    function select() {
        if($(this).attr('data-selected')){   
            $(this).removeAttr('data-selected'); 
            $(this).css('background', "");
        } 
        else {
            $(this).attr("data-selected", true); //
            $(this).css('background',"#DDD");
        }
    }
    $('#items li').on('click', select); 

    $('#showTownsButton').on('click', function () {
        let towns = $('ul#items li[data-selected]')
                    .toArray().map(li => li.textContent).join(', ');
        
        $('#selectedTowns').text('Selecter towns: ' + towns);
            
    });
}

