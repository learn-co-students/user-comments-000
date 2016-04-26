'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

function hideErrors(){
  $('#com-name-error').hide();
  $('#com-email-error').hide();
  $('#comment-error').hide();
};

function hideForm(){
  $('form').hide();
};

function addCommentListener(){
  $("#show-comment-form").click(function(){
    $('form').show();
  });
};

function cancelListener() {
  $("#cancel").click(function(){
    $('form').hide();
  });
};

function submitCommentListener() {
  $("form").submit(function(event){
    var validName = $("#comment-name").val().length > 2;
    var validEmail = $("#com-email").val().match(/[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[net|com|biz|gov|edu|us]+/) !== null; 
    var validComment = $("#comment").val().length > 0;

    if ( validName && validEmail && validComment ) {
      event.preventDefault();

      $( ".newcomment" ).clone().prependTo(".newcomment");
      $( ".name" ).first().html($("#comment-name").val())
      $( ".email" ).first().html($("#com-email").val())
      $( ".comment" ).first().html($("#comment").val())
      $( ".date" ).first().html(new Date())
      $('form').hide();

    } else {
      switch(false) {
        case validName:
          $('#com-name-error').show();
        case validEmail:
          $('#com-email-error').show();
        case validComment:
          $('#comment-error').show();
      }
      event.preventDefault();

    }

  });
};