angular.module('netanimations.intraasrouting', [])
.controller('IntraAsRoutingCtrl', function($scope, $ionicPopup, $translate) {
  TweenLite.defaultEase = Power1.easeInOut;
  var tl = new TimelineMax();
  $scope.end = false;
  var segment = "#segment";
  var bg2 = "../img/intra-as-routing/intra-routing-2.svg";
  var patternHeight = 595;
  var patternWidth = 350;
  var width = window.innerWidth;
  var height = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var boxWidth = transform(patternHeight, patternWidth, height, width, 20, 'x', true);
  var boxHeight = transform(patternHeight, patternWidth, height, width, 20, 'y', true);
  var transmission1Top = transform(patternHeight, patternWidth, height, width, 480, 'y', false);
  var transmission1Left = transform(patternHeight, patternWidth, height, width, 215, 'x', false);
  var transmission2Top = transform(patternHeight, patternWidth, height, width, 445, 'y', false);
  var transmission2Left = transform(patternHeight, patternWidth, height, width, 253, 'x', false);
  var crossingPipeScale = transform(patternHeight, patternWidth, height, width, 120, 'y', false);
  var crossingPipeScale2 = transform(patternHeight, patternWidth, height, width, 58, 'y', false);
  var crossingRouter1c = transform(patternHeight, patternWidth, height, width, 55, 'y', false);
  var crossingRouter3cTop = transform(patternHeight, patternWidth, height, width, 18, 'y', false);
  var crossingRouter3cLeft = transform(patternHeight, patternWidth, height, width, 30, 'x', false);
  var crossingHalfRouterTop = transform(patternHeight, patternWidth, height, width, 30, 'y', false);
  var crossingHalfRouterLeft = transform(patternHeight, patternWidth, height, width, 28, 'y', false);
  var crossingAllRouterTop = transform(patternHeight, patternWidth, height, width, 60, 'y', false);
  var crossingAllRouterLeft = transform(patternHeight, patternWidth, height, width, 70, 'y', false);
  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };
  
  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_1']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_1
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_2']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_2
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_3']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_3
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_4']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_4
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_5']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_5
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_6']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_6
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_7']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_7
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_8']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_8
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //change background to bg2
  tl.to('.bg',0.5,{opacity:0});
  tl.to('.bg',2,{className:"+=intra-as-bg2",opacity:1});
  tl.to('.bg',0.5,{opacity:0});
  tl.to('.bg',0,{className:"-=intra-as-bg2"});
  tl.to('.bg',0.5,{opacity:1});


  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'INTRA_AS_PRESENTATION_9']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_9
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //show 1b router's table
  tl.to('.r1b',3,{className:"-=hide"});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'INTRA_AS_PRESENTATION_13']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_13
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //hidding 1b router's table
  tl.to('.r1b',1,{opacity:0});
  tl.to('.r1b',0,{className:"+=hide"});

  //sending data from 1b to X throwing by 1a
  tl.set(segment,{width:boxWidth});
  tl.set(segment,{height:boxHeight});
  tl.set(segment,{top: transmission1Top});
  tl.set(segment,{left: transmission1Left});
  tl.to(segment,0,{opacity:0});
  tl.to(segment,1,{className:"-=hide"});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{left:"-="+crossingPipeScale});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{top:"-="+crossingHalfRouterTop});
  tl.set(segment,{left:"-="+crossingHalfRouterLeft});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{top:"-="+crossingPipeScale});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{top:"-="+crossingAllRouterTop});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{top:"-="+crossingPipeScale});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{top:"-="+crossingAllRouterTop});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{top:"-="+crossingPipeScale2});
  tl.to(segment,1,{left:"+="+crossingPipeScale2});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{left:"+="+crossingAllRouterLeft});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{left:"+="+crossingPipeScale2});
  tl.to(segment,1,{top:"+="+crossingPipeScale2});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{left:"+="+crossingHalfRouterLeft});
  tl.set(segment,{top:"+="+(crossingHalfRouterTop+12)});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{left:"+=100"});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'INTRA_AS_PRESENTATION_10']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_10
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove


  //showing 1c router's table
  tl.to('.r1c',0,{opacity:0});
  tl.to('.r1c',0,{className:"-=hide"});
  tl.to('.r1c',1,{opacity:1});
  tl.to('.r1c',3,{opacity:1}); //procurar outra alternativa para manter a tabela na tela por mais tempo

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'INTRA_AS_PRESENTATION_11']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_11
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //changing 1b router's table
  tl.to('.r1c',1,{opacity:0});
  tl.to('.r1c',0,{className:"+=hide"});
  tl.to('.r1b',0,{opacity:0});
  tl.to('.r1b',0,{className:"-=hide"});
  tl.to('.r1b',1,{opacity:1});
  tl.to("#x-1",1,{opacity:0});
  tl.call(function(){document.getElementById("x-1").innerHTML = "1c"});
  tl.to("#x-1",2,{opacity:1});
  tl.to("#x-2",1,{opacity:0});
  tl.call(function(){document.getElementById("x-2").innerHTML = "3"});
  tl.to("#x-2",2,{opacity:1});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'INTRA_AS_PRESENTATION_12']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.INTRA_AS_PRESENTATION_12
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //hidding 1b router's table and sending data from 1b to X
  tl.to('.r1b',1,{opacity:0});
  tl.to('.r1b',0,{className:"+=hide"});
  tl.set(segment,{width:boxWidth});
  tl.set(segment,{height:boxHeight});
  tl.set(segment,{top: transmission2Top});
  tl.set(segment,{left: transmission2Left});
  tl.to(segment,0,{opacity:0});
  tl.to(segment,1,{className:"-=hide"});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,2,{top:"-="+crossingPipeScale});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{top:"-="+crossingRouter1c});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,2,{top:"-="+crossingPipeScale});
  tl.to(segment,1,{opacity:0});
  tl.set(segment,{top:"-="+crossingRouter3cTop});
  tl.set(segment,{left:"+="+crossingRouter3cLeft});
  tl.to(segment,1,{opacity:1});
  tl.to(segment,1,{left:"+=100"});
  //end
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
