 function initMap() {
        var uluru = {lat: 50.45, lng: 30.48};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru,
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#787e88"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#40444f"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"weight":1.2},{"hue":"#ff0000"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#40444f"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#40444f"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#40444f"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#40444f"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#40444f"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#40444f"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#232831"},{"weight":"0"}]}],
            disableDefaultUI: true
        });

     var locations = [
         ['Kiev', 50.4519704,30.4839206,17],
         ['Hamburg', 53.5483588,9.9852355,17],
         ['Minsk', 53.8839691,27.524763,12],
     ];

     var infowindow = new google.maps.InfoWindow();

     var marker, i;

     for (i = 0; i < locations.length; i++) {
         marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
             map: map
         });

         google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
                 infowindow.setContent(locations[i][0]);
                 infowindow.open(map, marker);
             }
         })(marker, i));
     }
    }