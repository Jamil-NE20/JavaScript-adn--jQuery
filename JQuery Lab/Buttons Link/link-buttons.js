function attachEvents() {
  function buttonClicked() {
    $('.selected').removeClass('selected'); // removes one or more class names from the selected elements
    $(this).addClass('selected'); // "this": used to select the current element, event source
    }
    $('a.button').on('click', buttonClicked); // .button: class used on a specific group of elements
  }
