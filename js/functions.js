/*
*   ToDo-List v1.0
*   Thomas Naylor
*
*
*
*/

$(document).ready(function() {
  // global variables
  var listItem = '';
  var demoList = ['demo list','shopping', 'clean Pool', 'wash Car', 'washing'];

  // add demolist array to the page
  $.each(demoList, function(i) {
    $('#todo ul').prepend('<li><span><i class="fas fa-trash-alt"></i></span>' + demoList[i] + '</li>');
  });

  // add css line-through style to completed todo's
  $('#todo ul').on('click', 'li', function() {
    $(this).toggleClass('complete');
  });

  // fade and remove completed todo from the DOM
  $('#todo ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(1000, function() {
      $(this).remove();
    });

    // pass the selected to do text to the remove function to be removed from array
    listItem = $(this).parent().text();
    console.log(listItem);
    removeItem(listItem);

    e.stopPropagation();
  });

  // add new todo to list using enter key
  $('#todo input[type="text"]').keypress(function(e) {
    if(e.which === 13) {
      listItem = $(this).val();
      $(this).val('');
      updateItem(listItem);
    }
  });

  // add new todo to the list using '+' sign
  $('#todo #add').on('click', function() {
      listItem = $('#todo input[type="text"]').val();
      $('#todo input[type="text"]').val('');
      updateItem(listItem);
  });

  // add new todo it to the array and updates the DOM
  // basic checks to make sure data entered is valid
  function updateItem(item) {
    var lcaseItem = item.toLowerCase();

    if(lcaseItem === '' || lcaseItem === null || lcaseItem === undefined) {
      $('#todo input[type="text"]').attr('placeholder', 'Cannot be empty');
    } else {
      demoList.push(lcaseItem);
      $('#todo ul').prepend('<li><span><i class="fas fa-trash-alt"></i></span>' + lcaseItem + '</li>');
      $('#todo input[type="text"]').attr('placeholder', 'Add New Item');
    }
  }

  // remove seleced todo from the array
  function removeItem(item) {
    var lcaseItem = item.toLowerCase();

    $.each(demoList, function(i) {
      if (demoList[i] === item) {
          demoList.splice(i, 1);
      }
    });
  }
});
