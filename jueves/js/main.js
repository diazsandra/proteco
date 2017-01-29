//Archivo de angular
(function(){
  'use strict';
          //nombre de la app en html     //nombre en js
  angular.module("myApp",[]).controller("movieCtrl",movieCtrl);

  function movieCtrl(){
    var movie = this;
    //movie.nombre= [{'nombre':'Sandra', 'edad':22},{'nombre':'Donaldo','edad':20},{'nombre':'Luis','edad':21}];
    movie.collection= [
      {
        'img':'http://disdb.com/images/disney/13.jpg',
        'name': 'El Rey León',
        'cast': ['J. Earl Jones', 'Nathan Lane', 'M. Broderick'],
        'year': 1995,
        'category': 'Infantil'
      },
      {
        'img':'http://drwallpaper.com/wp-content/uploads/ktz/rogue_one__a_star_wars_story_wallpaper_HD_background_download_mobile_iphone_6s_galaxy18-mqblsejmsaphkvgur5xyk1awtdrfnepbp8tg52l212.jpg',
        'name': 'Rogue One',
        'cast': ['Felicity Jones', 'Diego Luna', 'Donnie Yen'],
        'year': 2016,
        'category': 'Fantasía'
      },
      {
        'img':'http://pics.filmaffinity.com/midnight_in_paris-224118489-large.jpg',
        'name': 'Media noche en París',
        'cast': ['Owen Wilson', 'R. McAdams', 'Marion Cotillard'],
        'year': 2011,
        'category': 'Drama'
      },
      {
        'img':'https://upload.wikimedia.org/wikipedia/fa/a/ab/La_La_Land_(film).png',
        'name': 'La la land',
        'cast': ['Ryan Gosling', 'Emma Stone', 'John Legend'],
        'year': 2016,
        'category': 'Drama'
      },
      {
        'img':'http://3.bp.blogspot.com/-3s72ltKB9cU/VcUgQ7Mbt0I/AAAAAAAAAQQ/1eSlzxvQxMk/s275/el-gran-pez.jpg',
        'name': 'El gran pez',
        'cast': ['Albert Finney', 'Ewan McGregor', 'Bonham Carter'],
        'year': 2004,
        'category': 'Fantasía'
      },
      {
        'img':'http://www.labutaca.net/peliculas/wp-content/uploads/2010/01/shutter-island-cartel.jpg',
        'name': 'La isla siniestra',
        'cast': ['Leonardo DiCaprio', 'Mark Ruffalo', 'Ben Kingsley'],
        'year': 2010,
        'category': 'Suspenso'
      }
    ];
  }

})();
