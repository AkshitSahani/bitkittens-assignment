$(document).ready(function(){
  $('.summon-cats').on('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      // console.log(data.cats[0]['photo']);
      var array = [];
      for (var i = 0; i < data.cats.length; i++){
        array.push($('<img>').attr('src', data.cats[i]['photo']).attr('alt', 'Photo of: ' + data.cats[i]['name']));
      }
      var array2 = ['#cat1', '#cat2', '#cat3'];

      for (var i = 0; i < array.length; i++){
        $(array2[i]).html(array[i]);
      }
      })
      //solution for one cat:
      // var one = $('<img>');
      // $(one).attr('src', data.cats[0]['photo']);
      // $(one).attr('alt', 'Photo of: ' + data.cats[0]['name']);
      // $('.cat-box').html(one);
    })
  })
