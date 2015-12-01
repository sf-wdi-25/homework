$(document).ready(function(){
  console.log("here's your mock data to start with:");
  console.log(GLOBAL_MOCK_DATA_OBJECT);

  var url = "http://api.giphy.com/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC&limit=100";
  var start = 0;

  $('#search').change(function () {
    var input = $('#search').val().replace(' ', '+');
    url = 'http://api.giphy.com/v1/gifs/search?q='+ input +'&api_key=dc6zaTOxFJmzC&limit=100';
    $('#gifBox').html("");
    placeGif(0);
  });
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      start += 25;
      placeGif(start);
    }
  });


  function placeGif(num) {
    $.ajax({
      method: 'GET',
      url: url,
      success: function (response) {
        for (var i = num; i < num+25; i++) {
          var gif = response.data[i].images.fixed_height.url;
          $('#gifBox').append('<img src="' + gif + '" >');
        }
      }
    });
  }
  placeGif(0);
});
