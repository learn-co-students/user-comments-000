'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here

function hideErrors(){
  $('#com-name-error').hide();
  $('#com-email-error').hide();
  $('#comment-error').hide();

};

function hideForm(){
  $('#add-comment').hide()
  $('#show-comment-form').click(function(){
    $('#add-comment').show()
  })
};

function addCommentListener(){
    var name = $('#comment-name').val();
    var email = $('#com-email').val();
    var comment = $('#comment').val();
    var regex = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/
    var text = '<div class="newcomment"><span class="name">'
    text += name 
    text += '</span><span class="email">'
    text += email 
    text += '</span><span class="date">09/03/2012</span><p class="comment">'
    text += comment
    text += '</p></div>'

     if (name.length < 4) {
      $('#com-name-error').show();
    } else if (regex.test(email) == false) {
      $('#com-email-error').show();
    } else if (comment.length == 0) {
      $('#comment-error').show();
    } else 
    $('.newcomment').after(text);
};

function cancelListener(){
  $('#cancel').click(function(){
    $('#add-comment').hide()
  })

};

function submitCommentListener(){
  $('input[type="submit"]').click(function(){
    var name = $('#comment-name').val()
    var email = $('#com-email').val()
    var comment = $('#comment').val()
    var regex = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/
    if (name.length < 4) {
      $('#com-name-error').show();
    } else if (regex.test(email) == false) {
      $('#com-email-error').show();
    } else if (comment.length == 0) {
      $('#comment-error').show();
    } else 
    addCommentListener()
  });  

};









