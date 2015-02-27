$(document).ready(function() {

  // $.ajax({
  //   url: 'http://ig-hacker-news.herokuapp.com/users',
  //   type: 'POST',
  //   data: {user: {name: 'steve jobs', about: 'god or anti-god?', email: 'steve@apple.com'}},
  //   dataType: 'JSON'
  // })
  // .done(function(results) {
  //   console.log("here is another user I just created, click on the triangle to expand");
  //   console.table(results);
  // });
 $('#getUsers').on('click', AllUsers.get_all_users);
 $('#newUser').on('click', AllUsers.newUser);
});

// modify this file so that on index.html,
// a visitor can see a list of all the users,
// fill out a form, hit submit,
// and see the new user added to the list of users

var AllUsers = AllUsers || {};

AllUsers.get_all_users = function(){
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'GET',
  })
  .done(function(results) {
    console.log("here are all the users in my database")
    console.log(results);
    AllUsers.list_all_users(results);
  });
}

AllUsers.list_all_users = function(users){
 for (var i = 0; i < users.length; i++) {
   AllUsers.list_one_user(users[i]);
 };
}

AllUsers.list_one_user= function(user){
  var html = '';
  html += '<h3>' + user.name + '</h3>';
  $('#Users').append(html);
}

AllUsers.newUser = function(event){
  event.preventDefault();
  $.ajax({
    url: 'http://ig-hacker-news.herokuapp.com/users',
    type: 'POST',
    dataType: 'json',
    data: {user: {
      name: JSON.stringify($('name').val()),
      about: JSON.stringify($('about').val())
    }
  }
  })
  .done(function(data) {
    console.log(data);

  });

}
