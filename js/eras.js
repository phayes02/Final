/*This is jQuery being used to control butttons*/
$(document).ready(function(){

    $('[data-switch]').on('click', function (e) {
      var $page = $('#page-2'),
          blockToShow = e.currentTarget.getAttribute('data-switch');
  
      // Hide all children.
      $page.children().hide();
  
      // And show the requested component.
      $page.children(blockToShow).show();
  });
    
    });