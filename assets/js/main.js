$(document).ready(function(){
  var source = window.innerWidth > 575 ? 'src' : 'src-xs' ;
  $('.js-lazy-img').each(function(index, item){
    $(item).prop('src', $(item).data(source));
  });
});

var animationItems = $('[data-animation]');
$(document).on('scroll', function(){
  var position = window.pageYOffset + (window.innerHeight / 2);
  animationItems.each(function(index, item){
    if(position >= $(item).offset().top){
      $(item).find('img, p').addClass('active');
    }
  })
})

function googleLocationMap() {
    // var lagLng = new google.maps.LatLng(43.315223,21.895707);
    var center = {
      lat: 43.315210,
      lng: 21.895739
    };

    var options = {
        center: center,
        zoom: 17,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    };

    var map = new google.maps.Map(document.querySelector(".js-map"),options);
    var link = 'https://www.google.com/maps/dir/?api=1&destination='+ center.lat +','+ center.lng
    var infowindow = new google.maps.InfoWindow({
        content: '<strong>Thema Cafe</strong><br/> Prijezdina 14-16<br/> Niš<br/> Serbia<br/><a href="'+ link +'" target="_blank">Putokaz</a>'
    });

    var marker = new google.maps.Marker({
        position: center,
        map: map,
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
