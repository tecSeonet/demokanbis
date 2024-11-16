var THEMEIM = THEMEIM || {};

(function($) {

  /*!----------------------------------------------
  # This beautiful code written with heart
  # by Sonia Shurmi
  # In Dhaka, BD at the WD IT Solution workstation.
  ---------------------------------------------*/

  // USE STRICT
  "use strict";

  THEMEIM.initialize = {

    init: function() {
      THEMEIM.initialize.general();
      THEMEIM.initialize.mobileMenu();
      THEMEIM.initialize.sectionBackground();
      THEMEIM.initialize.countUp();
      THEMEIM.initialize.countDown();
      THEMEIM.initialize.svg();
      THEMEIM.initialize.owlslider();
      THEMEIM.initialize.slickcarousel();
      THEMEIM.initialize.gmap();
    },

  
    /*=========================================*/
    /*=           gmap function         =*/
    /*=========================================*/
    gmap: function() {
      //gmap3
      $('.map').each(function() {
        var $this = $(this),
          key = $this.data('key'),
          lat = $this.data('lat'),
          lng = $this.data('lng'),
          mrkr = $this.data('mrkr');

        $this.gmap3({
            center: [lat, lng],
            zoom: 9,
            mapTypeId: "shadeOfGrey",
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
          })
          .marker(function(map) {
            return {
              position: map.getCenter(),
              icon: "media/images/home6/map-marker.png"
            };
          })
          .styledmaptype(
            "shadeOfGrey", [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                  },
                  {
                    "lightness": 17
                  }
                ]
              },
              {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                  },
                  {
                    "lightness": 20
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                  },
                  {
                    "lightness": 17
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                  },
                  {
                    "lightness": 29
                  },
                  {
                    "weight": 0.2
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                  },
                  {
                    "lightness": 18
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                  },
                  {
                    "lightness": 16
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                  },
                  {
                    "lightness": 21
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dedede"
                  },
                  {
                    "lightness": 21
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                  },
                  {
                    "color": "#ffffff"
                  },
                  {
                    "lightness": 16
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                  },
                  {
                    "color": "#333333"
                  },
                  {
                    "lightness": 40
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                  },
                  {
                    "lightness": 19
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                  },
                  {
                    "lightness": 20
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                  },
                  {
                    "lightness": 17
                  },
                  {
                    "weight": 1.2
                  }
                ]
              }
            ], {
              name: "Shades of Grey"
            }
          );
      });
    }
  };

  THEMEIM.documentOnReady = {
    init: function() {
      THEMEIM.initialize.init();
    },
  };

  THEMEIM.documentOnLoad = {
    init: function() {
      // $("#loader-wrapper").delay(3000).fadeOut("slow");
      if ($(window).width() > 991) {
        if ($('.megamenu-cookies').length) {
          var $cookies = $('.megamenu-cookies').addClass('seen').delay(0),
            $cookiesRemove = $cookies.children('.remove, .agree');
          $cookiesRemove.on('click', function() {
            $('.megamenu-cookies').removeClass('seen');
          });
        };
        
      }
    },
  };

  THEMEIM.documentOnResize = {
    init: function() {},
  };

  THEMEIM.documentOnScroll = {
    init: function() {
      THEMEIM.initialize.sectionBackground();

      if ($(this).scrollTop() > 150) {
        $('header').addClass("hide-topbar")
      } else {
        $('header').removeClass("hide-topbar")
      }
    },
  };

  // Initialize Functions
  $(document).ready(THEMEIM.documentOnReady.init);
  $(window).on('load', THEMEIM.documentOnLoad.init);
  $(window).on('resize', THEMEIM.documentOnResize.init);
  $(window).on('scroll', THEMEIM.documentOnScroll.init);

})(jQuery);