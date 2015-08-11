angular.module('netanimations.purealoha', [])
.controller('PureAlohaCtrl', function($scope, $ionicPopup, $translate) {
  TweenLite.defaultEase = Power1.easeInOut;
  $scope.end = false;
  var segment1 = "#segment-1";
  var segment2 = "#segment-2";
  var patternHeight = 595;
  var patternWidth = 350;
  var realHeight = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var realWidth = window.innerWidth;
  var boxWidth = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 40, 'x');
  var boxHeight = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 34, 'y');
  var initialSeg1Top = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 59, 'y');
  var initialSeg1Left = window.innerWidth / 2;
  var initialSeg2Top = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 208, 'y');
  var initialSeg2Left = window.innerWidth / 2;
  var initialPosition1 = {top: initialSeg1Top, left: initialSeg1Left };
  var initialPosition2 = {top: initialSeg2Top, left: initialSeg2Left};
  var rotate90 = {rotation: 90};
  var rotate0 = {rotation: 0};
  var hide = {opacity: 0};
  var show = {opacity: 1};
  var downScale = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 140, 'y');
  var downScale2 = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 180, 'y');
  var rightAndLeftScale = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 118, 'x');
  var colisionMovementScale = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 40, 'y');
  var crossingPipeScale = transformViewPort(patternHeight, patternWidth, realHeight, realWidth, 360, 'y');
  var sendDown = {top: "+="+downScale};
  var sendDown2 = {top: "+="+downScale2};
  var sendRight = {left: "+="+rightAndLeftScale};
  var sendLeft = {left: "-="+rightAndLeftScale};
  var tl = new TimelineMax();

  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };
  tl.to(segment1,0, {width:boxWidth});
  tl.to(segment2,0, {width:boxWidth});
  tl.to(segment1,0, {height:boxHeight});
  tl.to(segment2,0, {height:boxHeight});
  tl.to(segment1, 0, initialPosition1);
  tl.to(segment2, 0, hide);
  tl.to(segment2, 0, initialPosition2);

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_1']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_1
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_2']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_2
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_3']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_3
      }).then(function() {
        tl.resume();
      });
    });
  });

  //Host A sends first segment
  tl.to(segment1, 2, sendRight);
  tl.to(segment1, 0.5, rotate90);
  tl.to(segment1, 2, sendDown);

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_4']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_4
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_5']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_5
      }).then(function() {
        tl.resume();
      });
    });
  });

  //Host B sends a segment and there's a colision
  tl.to(segment2, 0.5, show);
  tl.to(segment2, 2, sendRight);
  tl.to(segment1, 2, {top:"+="+colisionMovementScale, delay: -2});
  tl.to(segment1, 1, {scale:0, opacity:0});
  tl.to(segment2, 1, {scale:0, opacity:0, delay: -1});

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_6']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_6
      }).then(function() {
        tl.resume();
      });
    });
  });

  //Host A sends the segment to Host C
  tl.to(segment1, 0, initialPosition1);
  tl.to(segment1, 0, rotate0);
  tl.to(segment1, 0, {scale: 1, opacity: 1});
  tl.to(segment1, 2, sendRight);
  tl.to(segment1, 0.5, rotate90);
  tl.to(segment1, 4, {top: "+="+crossingPipeScale});
  tl.to(segment1, 0.5, rotate0);
  tl.to(segment1, 2, sendLeft);
  tl.to(segment1, 0.5, hide);

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_7']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_7
      }).then(function() {
        tl.resume();
      });
    });
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();

    $translate(['INFO', 'PURE_ALOHA_PRESENTATION_8']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.PURE_ALOHA_PRESENTATION_8
      }).then(function() {
        tl.resume();
      });
    });
  });

  //Host B sends segment to Host C
  tl.to(segment2, 0, initialPosition2);
  tl.to(segment2, 0, rotate0);
  tl.to(segment2, 0, {scale: 1, opacity: 1});
  tl.to(segment2, 2, sendRight);
  tl.to(segment2, 0.5, rotate90);
  tl.to(segment2, 2, sendDown2);
  tl.to(segment2, 0.5, rotate0);
  tl.to(segment2, 2, sendLeft);
  tl.to(segment2, 1, hide);

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

function transformViewPort(patternHeight, patternWidth, realHeight, realWidth, value, coordinate){
  var patternAspectRatio = patternWidth/patternHeight;
  var realAspectRatio = realWidth/realHeight;
  if(patternAspectRatio == realAspectRatio){
    return value;
  } else if(patternAspectRatio > realAspectRatio){
    var vMax = (realWidth/patternAspectRatio);
    if(coordinate == 'x'){
        return value*(realWidth/patternWidth);
    }else{
        return (value*(realHeight/patternHeight)) + ((realHeight-vMax)/2);
    }
  } else {
    var uMax = patternAspectRatio*realHeight;
    if(coordinate == 'x'){
      return (value*(realWidth/patternWidth)) + ((realWidth - uMax)/2);
    }else{
      return value*(realHeight/patternHeight);
    }
  }
}
