$(document).ready(function () {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users',
    method: 'GET',
    dataType: 'JSON'
  }).done(function (users) {
    users.forEach(function (user) {
      var list = $('.user-list')
      var li = '<li data-user-id="' + user.id + '"><strong>' + user.first_name + ' - ' + user.last_name + '</strong>: ' + user.phone_number + '</li>' + '<button class="btn blue edit-button">Edit</button>' + '<button class="btn red delete-button">Delete</button>'
      list.append(li)
    });
  });
  $('.delete-button').on('click', function () {
    var userId = $(this).data('user-id') // Grab a User ID
    console.log('Selected ' + userId)
    // Code
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      method: 'POST',
      dataType: 'JSON'
    }).done( function(users) {
      var list = $('.user-list')
      var li = '<a><li data-user-id="' + user.id + '">' + user.first_name + '-' + user.last_name + ': ' + user.phone_number + '</li></a>'
      list.append(li)
    });
  });
});
