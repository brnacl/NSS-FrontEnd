'use strict';

$(document).ready(initialize);
function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
}

function searchFlickr() {
  $('#photos').empty();
  var API_KEY = '37a271b2abc90d31f11f13db1a30a022',
    PER_PAGE = '30';

  var page = 1,
    query = $('#query').val(),
    url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
    $.getJSON(url, results);

}

function results(data) {
  for(var i = 0; i < data.photos.photo.length; i++){
    createImage(data.photos.photo[i]);
  }
}

function createImage(photo){
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image',url);
  $('#photos').prepend($div);
}