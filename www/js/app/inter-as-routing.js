angular.module('netanimations.interasrouting', [])
.controller('InterAsRoutingCtrl', function($scope, $ionicPopup, $translate) {
  TweenLite.defaultEase = Power1.easeInOut;
  var tl = new TimelineMax();
  $scope.end = false;
  var segment1 = "#segment1";
  var segment2 = "#segment2";
  var bg2 = "../img/inter-as-routing/inter-routing-2.svg";
  var patternHeight = 595;
  var patternWidth = 350;
  var width = window.innerWidth;
  var height = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var boxWidth = transform(patternHeight, patternWidth, height, width, 20, 'x', true);
  var boxHeight = transform(patternHeight, patternWidth, height, width, 20, 'y', true);

  var transmission1cTo1aTop = transform(patternHeight, patternWidth, height, width, 70, 'y', false);
  var transmission1cTo1aLeft = transform(patternHeight, patternWidth, height, width, 262, 'x', false);
  var transmission1aTo2aTop = transform(patternHeight, patternWidth, height, width, 150, 'y', false);
  var transmission1aTo2aLeft = transform(patternHeight, patternWidth, height, width, 162, 'x', false);
  var transmission1aTo1cTop = transform(patternHeight, patternWidth, height, width, 120, 'y', false);
  var transmission1aTo1cLeft = transform(patternHeight, patternWidth, height, width, 186, 'x', false);
  var transmission1aTo1bTop = transform(patternHeight, patternWidth, height, width, 120, 'y', false);
  var transmission1aTo1bLeft = transform(patternHeight, patternWidth, height, width, 139, 'x', false);
  var transmission2dTo2cTop = transform(patternHeight, patternWidth, height, width, 420, 'y', false);
  var transmission2dTo2cLeft = transform(patternHeight, patternWidth, height, width, 62, 'x', false);
  var transmission2cTo2aTop = transform(patternHeight, patternWidth, height, width, 450, 'y', false);
  var transmission2cTo2aLeft = transform(patternHeight, patternWidth, height, width, 162, 'x', false);
  var transmission2aTo1aTop = transform(patternHeight, patternWidth, height, width, 250, 'y', false);
  var transmission2aTo1aLeft = transform(patternHeight, patternWidth, height, width, 162, 'x', false);

  var crossingVerticalPipe1 = transform(patternHeight, patternWidth, height, width, 50, 'y', false);
  var crossingHorizontalPipe1 = transform(patternHeight, patternWidth, height, width, 60, 'x', false);
  var crossingVerticalPipe2 = transform(patternHeight, patternWidth, height, width, 58, 'y', false);
  var crossingHorizontalPipe2 = transform(patternHeight, patternWidth, height, width, 60, 'x', false);
  var crossingVerticalPipe3 = transform(patternHeight, patternWidth, height, width, 140, 'y', false);
  var crossingAS1ToAS2 = transform(patternHeight, patternWidth, height, width, 100, 'y', false);
  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

  //initialize segment1 and segment2's properties
  tl.set(segment1,{width:boxWidth});
  tl.set(segment1,{height: boxHeight});
  tl.set(segment2,{width:boxWidth});
  tl.set(segment2,{height: boxHeight});
  
  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_1']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_1
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_2']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_2
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_3']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_3
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_4']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_4
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_5']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_5
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 2, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_6']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_6
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_7']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_7
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //change background to bg2
  tl.to('.bg',1,{autoAlpha:0});
  tl.set('.bg',{className:"+=inter-as-bg2",opacity:1});
  tl.to('.bg',2,{autoAlpha:1});
  tl.set('.bg',{className:"-=inter-as-bg1"});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_8']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_8
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //sending a package from 1c in AS1 to AS2
  tl.set(segment1,{top:transmission1cTo1aTop});
  tl.set(segment1,{left:transmission1cTo1aLeft})
  tl.to(segment1,1,{className: "-=hide"});
  tl.to(segment1,1,{top: "+="+crossingVerticalPipe1});
  tl.to(segment1,1,{left: "-="+crossingHorizontalPipe1});
  tl.to(segment1,0.5,{autoAlpha:0});
  tl.set(segment1,{top:transmission1aTo2aTop});
  tl.set(segment1,{left:transmission1aTo2aLeft})
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1.5,{top:"+="+crossingAS1ToAS2});
  tl.to(segment1,0.5,{autoAlpha:0});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_9']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_9
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_10']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_10
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //change background to bg3 and return to bg2
  tl.to('.bg',0.5,{autoAlpha:0});
  tl.set('.bg',{className:"+=inter-as-bg3"});
  tl.to('.bg',2,{autoAlpha:1});
  tl.to('.bg',0.5,{autoAlpha:0});
  tl.set('.bg',{className:"-=inter-as-bg3"});
  tl.to('.bg',0.5,{autoAlpha:1});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_11']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_11
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_12']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_12
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_13']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_13
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
  //change background to bg4
  tl.to('.bg',0.5,{autoAlpha:0});
  tl.set('.bg',{className:"+=inter-as-bg4"});
  tl.to('.bg',2,{autoAlpha:1});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_14']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_14
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //eBGP animation
  tl.set(segment1,{className: "-=hide"});
  tl.set(segment1,{autoAlpha:0});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1.5,{top:"-="+crossingAS1ToAS2});
  tl.to(segment1,1,{autoAlpha:0});
  tl.to(segment1,2,{autoAlpha:1});
  tl.to(segment1,1.5,{top:"+="+crossingAS1ToAS2});
  tl.to(segment1,0.5,{autoAlpha:0});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_15']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_15
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //iBGP animation
  tl.set(segment1,{className: "-=hide"});
  tl.set(segment1,{autoAlpha:0});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1.5,{top:"-="+crossingAS1ToAS2});
  tl.to(segment1,1,{autoAlpha:0});
  tl.set(segment1,{top:transmission1aTo1bTop});
  tl.set(segment1,{left:transmission1aTo1bLeft});
  tl.set(segment2,{top:transmission1aTo1cTop});
  tl.set(segment2,{left:transmission1aTo1cLeft});
  tl.set(segment2,{className: "-=hide"});
  tl.set(segment2,{autoAlpha:0});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment2,0.5,{autoAlpha:1, delay: -0.5});
  tl.to(segment1,1,{left: "-="+crossingHorizontalPipe1});
  tl.to(segment2,1,{left: "+="+crossingHorizontalPipe1, delay: -1});
  tl.to(segment1,1,{top: "-="+crossingVerticalPipe1});
  tl.to(segment2,1,{top: "-="+crossingVerticalPipe1, delay: -1});
  tl.to(segment1,1,{autoAlpha:0});
  tl.to(segment2,1,{autoAlpha:0,delay:-1});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_16']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_16
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //change background to bg5
  tl.to('.bg',0.5,{autoAlpha:0});
  tl.set('.bg',{className:"-=inter-as-bg4"});
  tl.set('.bg',{className:"+=inter-as-bg5"});
  tl.to('.bg',2,{autoAlpha:1});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_17']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_17
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //ASPATH animation
  tl.set(segment1,{top:transmission2dTo2cTop});
  tl.set(segment1,{left:transmission2dTo2cLeft});
  tl.set(segment1,{className: "-=hide"});
  tl.set(segment1,{autoAlpha:0});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1,{top:"+="+crossingVerticalPipe2});
  tl.to(segment1,1,{left:"+="+crossingHorizontalPipe2});
  tl.to(segment1,0.5,{autoAlpha:0});
  tl.set(segment1,{top:transmission2cTo2aTop});
  tl.set(segment1,{left:transmission2cTo2aLeft});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1,{top:"-="+crossingVerticalPipe3});
  tl.to(segment1,0.5,{autoAlpha:0});
  tl.set(segment1,{top:transmission2aTo1aTop});
  tl.set(segment1,{left:transmission2aTo1aLeft});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1,{top:"-="+crossingAS1ToAS2});
  tl.to(segment1,0.5,{autoAlpha:0});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTER_AS_PRESENTATION_18']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTER_AS_PRESENTATION_18
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    $translate(['END', 'ANIMATION_END']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.END,
        template: translations.ANIMATION_END
      });
    });
  });

  $scope.end = true;

});

function transform(patternHeight, patternWidth, realHeight, realWidth, value, coordinate, isSize){
  var patternAspectRatio = patternWidth/patternHeight;
  if (coordinate == 'x'){
    var consideredWidth = realHeight * patternAspectRatio;
    var newValue = (value * consideredWidth) / patternWidth;
    if(consideredWidth < realWidth && !isSize){
      return (((realWidth - consideredWidth) / 2) + newValue);
    } else{
      return newValue;
    }
  } else { //coordinate == 'y'
  return (value * (realHeight/patternHeight));
  }
}
