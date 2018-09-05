// Using this api: https://reqres.in/

// We need to wait for the document to be ready so JQuery can see the objects
// it will be attaching events to.
$(document).ready(function() {

  // The selector here is the id 'all_users', which is a div in the html
  $('#all_users').click(function(){

    // This is the URL to the API server we are access.
    let url = 'https://reqres.in/api'

    // Using string interpolation we will build a request for all the users
    let all_users_url = `${url}/users`

    // This is an AJAX request to the API server. As usual, we don't know how
    // long this will take so we need to specify what we want to happen when
    // the request is over. This is done in the callback function.
    $.get(all_users_url, function(response_from_api_server) {

      // Check out what gets logged here, this is the response from the api
      // server. We can use this to inspect the data we get back.
      console.log(response_from_api_server);

      // Log the first users first_name.
      console.log(response_from_api_server['data'][0].first_name);

      // This will make it easier for us to loop through the interesting data.
      // data_we_want will be an array of objects
      data_we_want = response_from_api_server.data

      // Display each user
      for (data_index in data_we_want) {
        // In this loop data_index will be a numerical value [0,...,data_we_want.length]
        // We will use data_index to access specific objects.
        // Once we get a specific object with data_we_want[data_index] we can
        // access any of the properties it has. In this case, I know users
        // have a first_name.

        // .append is a JQuery method which allows you to append html to an element.
        // Take some time to run this code and, using the inspector in Chrome,
        // see how the actual html of your page is changing.
        $('#all_users').append(`<p>${data_we_want[data_index].first_name}</p>`);
      }
    });
  });

});
