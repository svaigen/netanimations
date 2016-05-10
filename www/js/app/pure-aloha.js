angular.module('netanimations.purealoha', [])
.controller('PureAlohaCtrl', function($state, $scope, $ionicPopup, $translate) {
  TweenLite.defaultEase = Power1.easeInOut;
  $scope.end = false;
  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };
  var segment1 = "#segment-1";
  var segment2 = "#segment-2";
  var patternHeight = 595;
  var patternWidth = 350;
  var width = window.innerWidth;
  var height = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var boxWidth = transform(patternHeight, patternWidth, height, width, 40, 'x', true);
  var boxHeight = transform(patternHeight, patternWidth, height, width, 34, 'y', true);
  var initialSeg1Top = transform(patternHeight, patternWidth, height, width, 59, 'y', false);
  var initialSeg1Left = window.innerWidth / 2;
  var initialSeg2Top = transform(patternHeight, patternWidth, height, width, 208, 'y', false);
  var initialSeg2Left = window.innerWidth / 2;
  var initialPosition1 = {top: initialSeg1Top, left: initialSeg1Left };
  var initialPosition2 = {top: initialSeg2Top, left: initialSeg2Left};
  var rotate90 = {rotation: 90};
  var rotate0 = {rotation: 0};
  var hide = {opacity: 0};
  var show = {opacity: 1};
  var downScale = height * 0.23;
  var downScale2 = height * 0.3;
  var rightAndLeftScale = transform(patternHeight, patternWidth, height, width, 118, 'x',false);
  var colisionMovementScale = transform(patternHeight, patternWidth, height, width, 40, 'y', false);
  var crossingPipeScale = transform(patternHeight, patternWidth, height, width, 360, 'y', false);
  var sendDown = {top: "+="+downScale};
  var sendDown2 = {top: "+="+downScale2};
  var sendRight = {left: "+="+rightAndLeftScale};
  var sendLeft = {left: "-="+rightAndLeftScale};
  var tl = new TimelineMax();

  tl.to(segment1,0, {width:boxWidth});
  tl.to(segment2,0, {width:boxWidth});
  tl.to(segment1,0, {height:boxHeight});
  tl.to(segment2,0, {height:boxHeight});
  tl.to(segment1, 0, initialPosition1);
  tl.to(segment2, 0, hide);
  tl.to(segment2, 0, initialPosition2);

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, 'INFO', 'PURE_ALOHA_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_3',"step2");
  });
  //Host A sends first segment
  tl.to(segment1, 2, sendRight);
  tl.to(segment1, 0.5, rotate90);
  tl.to(segment1, 2, sendDown);

  tl.add("step4");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_4',"step3");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step5");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_5',"step4");
  });
  //Host B sends a segment and there's a colision
  tl.to(segment2, 0.5, show);
  tl.to(segment2, 2, sendRight);
  tl.to(segment1, 2, {top:"+="+colisionMovementScale, delay: -2});
  tl.to(segment1, 1, {scale:0, opacity:0});
  tl.to(segment2, 1, {scale:0, opacity:0, delay: -1});

  tl.add("step6");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_6',"step5");
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

  tl.add("step7");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_7',"step6");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step8");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'PURE_ALOHA_PRESENTATION_8',"step7");
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

  tl.call(function() {
    endPopup(tl,$translate, $ionicPopup, $state, $scope, 'END', 'ANIMATION_END',"step8","step1");
  });
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
