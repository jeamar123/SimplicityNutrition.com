$( document ).ready( function() {

    var url_path = 'http://localhost/SimplicityNutrition.com/';
    
    new WOW().init();
    
    $( '#banner-content' ).layerSlider({
        autostart: true,
        skin: 'v5',
        twoWaySlideshow : true,
        skinsPath: url_path + 'skins/',
        responsiveUnder: 960,
        layersContainer: 960,
        hoverBottomNav: true,
        thumbnailNavigation : 'hover',
        durationIn : 10000,
        durationOut : 10000
    });


} );