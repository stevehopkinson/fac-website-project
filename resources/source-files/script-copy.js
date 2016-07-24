//Following is the main google maps API function. 
//This part doesn't need any updating to JS. For refactoring, scroll down to 
//the reviewToggle function
//Functionality to add:
//*Review to become 'current' on clicking the relevant map marker
//*Map markers to bounce as you scroll
//*Site to be responsive

var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: {lat: 50.486030, lng: -4.678051}
    });

    var markerBos = new google.maps.Marker({
      position: {lat: 50.694330, lng: -4.678051},
      map: map,
      title: 'Boscastle Farm Shop',
      animation: google.maps.Animation.DROP
    });

    var markerEspress = new google.maps.Marker({
      position: {lat: 50.154003, lng: -5.073161},
      map: map,
      title: 'Espressini',
      animation: google.maps.Animation.DROP
    });

    var markerLib = new google.maps.Marker({
      position: {lat: 50.638301, lng: -4.360462},
      map: map,
      title: 'Liberty Coffee',
      animation: google.maps.Animation.DROP
    });
    
    var markerZion = new google.maps.Marker({
      position: {lat: 50.215248, lng: -5.478531},
      map: map,
      title: 'Mt Zion Coffee',
      animation: google.maps.Animation.DROP
    });

    var markerRel = new google.maps.Marker({
      position: {lat: 50.516030, lng: -4.837569},
      map: map,
      title: 'Relish Food & Drink',
      animation: google.maps.Animation.DROP
    });

    var marker108 = new google.maps.Marker({
      position: {lat: 50.263118, lng: -5.054891},
      map: map,
      title: '108 Coffee House',
      animation: google.maps.Animation.DROP
    });

    var markerHub = new google.maps.Marker({
      position: {lat: 50.213028, lng: -5.479831},
      map: map,
      title: 'Hub St Ives',
      animation: google.maps.Animation.DROP
    });

    var markerAdolfo = new google.maps.Marker({
      position: {lat: 50.505565, lng: -4.884802},
      map: map,
      title: 'Strong Adolofo\'s',
      animation: google.maps.Animation.DROP
    });
 
    var markerWoods = new google.maps.Marker({
      position: {lat: 50.469561, lng: -4.679693},
      map: map,
      title: 'Woods Cafe',
      animation: google.maps.Animation.DROP
    });

    var markerBrew = new google.maps.Marker({
      position: {lat: 50.085494, lng: -5.316743},
      map: map,
      title: 'The Brew House',
      animation: google.maps.Animation.DROP
    });

    var markerVibes = new google.maps.Marker({
      position: {lat: 50.154370, lng: -5.072669},
      map: map,
      title: 'Good Vibes',
      animation: google.maps.Animation.DROP
    });

    var markerSugar = new google.maps.Marker({
      position: {lat: 50.335238, lng: -4.634990},
      map: map,
      title: 'Brown Sugar',
      animation: google.maps.Animation.DROP
    });

    new google.maps.event.addListener(markerSugar, 'click', function(e) {toggleBounce(markerSugar)});
    new google.maps.event.addListener(markerVibes, 'click', function(e) {toggleBounce(markerVibes)});
    new google.maps.event.addListener(markerBrew, 'click', function(e) {toggleBounce(markerBrew)});
    new google.maps.event.addListener(markerHub, 'click', function(e) {toggleBounce(markerHub)});
    new google.maps.event.addListener(markerBos, 'click', function(e) {toggleBounce(markerBos)});
    new google.maps.event.addListener(markerLib, 'click', function(e) {toggleBounce(markerLib)});
    new google.maps.event.addListener(markerRel, 'click', function(e) {toggleBounce(markerRel)});
    new google.maps.event.addListener(markerZion, 'click', function(e) {toggleBounce(markerZion)});
    new google.maps.event.addListener(markerWoods, 'click', function(e) {toggleBounce(markerWoods)});
    new google.maps.event.addListener(marker108, 'click', function(e) {toggleBounce(marker108)});
    new google.maps.event.addListener(markerEspress, 'click', function(e) {toggleBounce(markerEspress)});
    new google.maps.event.addListener(markerAdolfo, 'click', function(e) {toggleBounce(markerAdolfo)});

  function toggleBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() { 
        marker.setAnimation(null); 
      }, 1500);
  }

var sugar = $('#sugar');
var vibes = $('#vibes');
var brew = $('#brew');
var hub = $('#hub');
var bos = $('#boscastle');
var lib = $('#lib');
var relish = $('#relish');
var zion = $('#zion');
var woods = $('#woods');
var caf108 = $('#coffee108');
var espress = $('#espress');
var adolfo = $('#adolfo');

  var bounceCurrent = function(marker, wrapper) {
    wrapper.click(function() {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() { 
        marker.setAnimation(null); 
      }, 1500);
    })
  }

bounceCurrent(markerSugar,sugar);
bounceCurrent(markerVibes,vibes);
bounceCurrent(markerBrew,brew);
bounceCurrent(markerHub,hub);
bounceCurrent(markerBos,bos);
bounceCurrent(markerLib,lib);
bounceCurrent(markerRel,relish);
bounceCurrent(markerZion,zion);
bounceCurrent(markerWoods,woods);
bounceCurrent(marker108,caf108);
bounceCurrent(markerEspress,espress);
bounceCurrent(markerAdolfo,adolfo);

}
//I believe that through to here is all vanilla js, so this 
//should be fine to leave as it is in the refactoring work.

//From here on down is the jquery

//The following function is the scrolling part that 
//shows each review as you scroll down the list
var reviewToggle = function() {
  $('.review-wrapper').click(function() {
    $('.review-wrapper').removeClass('current');
    $('.review-container').hide();
      $(this).addClass('current');
      $(this).children('.review-container').show(); 
  })
 
 //The following variables ensure that you can keep scrolling down or up
 //So the scroll returns to the top/bottom of the list when you reach the 
 //bottom/top of the list, depending on the scroll direction.
  var firstReviewWrap = $('div.review-wrapper:first-of-type');
  var lastReviewWrap = $('div.review-wrapper:last-of-type');
  var currentListing = $('.current');

//This sets the current class to the first review on document loading
  $(document).ready(function() {
    var currentListing = $('.current');
    var nextListing = currentListing.next();
    firstReviewWrap.addClass('current');
    firstReviewWrap.children('.review-container').show();
  });

//This is a one-off event to enable scrolling from the first element on load.
//It's necessary because of the way I constructed the rest of the code.
  $(document).one('bind','keydown',function(evt) {
    if(event.which === 40) {
        firstReviewWrap.removeClass('current');
        firstReviewWrap.children('.review-container').hide();
      } else if(event.which === 38) {
        firstReviewWrap.removeClass('current');
        firstReviewWrap.children('.review-container').hide();
      }
  });

//This is the main scroll function. The key code for the down arrow is 40
//The key code for the up arrow is 38.
  $(document).bind('keydown',function(evt) {
       if(event.which === 40) {
          var currentListing = $('.current');
          var nextListing = currentListing.next();
            currentListing.removeClass('current');
            currentListing.children('.review-container').toggle();
            if(nextListing.length > 0) {
            nextListing.addClass('current');
            $('.current').children('.review-container').toggle();
            } else {
              nextListing = firstReviewWrap;
              nextListing.addClass('current');
              $('.current').children('.review-container').toggle();
            }
        } else if(event.which === 38) {
          var currentListing = $('.current');
          var prevListing = currentListing.prev();
          currentListing.removeClass('current');
          currentListing.children('.review-container').toggle();
          if(prevListing.length > 0) {
          prevListing.addClass('current');
          $('.current').children('.review-container').toggle();  
          } else {
            prevListing = lastReviewWrap;
            prevListing.addClass('current');
            $('.current').children('.review-container').toggle();
          } 
        }
  });
};


$(document).ready(reviewToggle);

  initMap();