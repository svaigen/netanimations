angular.module('netanimations.hybridmodel', [])

.controller('HybridModelCtrl', function($state, $scope, $ionicPopup, $translate) {

  $scope.end = false;

  var tl = new TimelineLite();

  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

  TweenLite.defaultEase = Power1.easeInOut;

  var patternHeight = 595;
  var patternWidth = 350;
  var height = window.innerHeight - 44;
  var width = window.innerWidth;
  var segment1 = "#segment-1";
  var segment2 = "#segment-2";
  var segment3 = "#segment-3";
  var segment4 = "#segment-4";
  var focus = "#focus";
  var message = "#message";
  var initialPosition = {top: transform(patternHeight, patternWidth, height, width, 85, 'y', false),
    left: transform(patternHeight, patternWidth, height, width, 295, 'x', false)};
  var pipePosition = {top: transform(patternHeight, patternWidth, height, width, 85, 'y', false),
   left: transform(patternHeight, patternWidth, height, width, 45, 'x', false)};
  var pipePosition2 = {top: transform(patternHeight, patternWidth, height, width, 315, 'y', false),
  left: transform(patternHeight, patternWidth, height, width, 45, 'x', false)};
  var routerPosition = {top: transform(patternHeight, patternWidth, height, width, 140, 'y', false),
   left:transform(patternHeight, patternWidth, height, width, 126, 'x', false)};
  var serverPosition = {top: transform(patternHeight, patternWidth, height, width, 360, 'y', false),
   left:transform(patternHeight, patternWidth, height, width, 124, 'x', false)};
  var rotate90 = {rotation: 90};
  var rotate0 = {rotation: 0};
  var hide = {opacity: 0};
  var delayHide ={opacity:0, delay: -1};
  var show = {opacity: 1};
  var delayShow = {opacity:1, delay: -1};
  var sendDown = {top: "+="+(transform(patternHeight, patternWidth, height, width, 20, 'y', true))};
  var sendDown2 = {top: "+="+(transform(patternHeight, patternWidth, height, width, 60, 'y', true))};
  var sendRight = {left: "+="+transform(patternHeight, patternWidth, height, width, 43, 'x', true)};
  var delaySendRight = {left: "+="+transform(patternHeight, patternWidth, height, width, 43, 'x', true), delay: -1};
  var sendLeft = {left: "-="+transform(patternHeight, patternWidth, height, width, 43, 'x', true)};
  var delaySendLeft = {left:"-="+transform(patternHeight, patternWidth, height, width, 43, 'x', true), delay: -1};
  var delaySendDown = {top:"+="+transform(patternHeight, patternWidth, height, width, 20, 'y', true), delay: -1};
  var delaySendDown2 = {top:"+="+transform(patternHeight, patternWidth, height, width, 60, 'y', true), delay: -1};
  var insertFadeout = {className: "+=fadeout"};
  var removeFadeout = {className: "-=fadeout"};

  /*Starts segments and focus*/
  var boxWidth = transform(patternHeight, patternWidth, height, width, 28, 'x', true);
  var boxHeight = transform(patternHeight, patternWidth, height, width, 20, 'y', true);
  tl.to(message,0, {width: boxWidth});
  tl.to(message,0, {height: boxHeight});
  tl.to(segment1,0, {width: boxWidth});
  tl.to(segment1,0, {height: boxHeight});
  tl.to(segment2,0, {width: boxWidth});
  tl.to(segment2,0, {height: boxHeight});
  tl.to(segment3,0, {width: boxWidth});
  tl.to(segment3,0, {height: boxHeight});
  tl.to(segment4,0, {width: boxWidth});
  tl.to(segment4,0, {height: boxHeight});
  tl.to(message, 0, initialPosition);
  tl.to(message, 0, hide);
  tl.to(segment1, 0, initialPosition);
  tl.to(segment1, 0, hide);
  tl.to(segment2, 0, initialPosition);
  tl.to(segment2, 0, hide);
  tl.to(segment3, 0, initialPosition);
  tl.to(segment3, 0, hide);
  tl.to(segment4, 0, initialPosition);
  tl.to(segment4, 0, hide);
  tl.to(focus,0, hide);

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, 'INFO', 'HYBRID_MODEL_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'EXAMPLE', 'HYBRID_MODEL_PRESENTATION_3',"step2");
  });
  tl.to(focus,1,show);
  tl.to(message,1,delayShow);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step4");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_4',"step3");
  });
  tl.to(message,1,sendDown);
  tl.to(segment1,1,show);
  tl.to(message,1,sendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(segment2,0,sendLeft);
  tl.to(segment3,0,sendLeft);
  tl.to(segment4,0,sendLeft);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step5");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_5',"step4");
  });
  tl.to(message,1,sendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(segment2,1,show);
  tl.to(message,1,sendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment3,0,sendLeft);
  tl.to(segment4,0,sendLeft);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step6");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_6',"step5");
  });
  tl.to(message,1,sendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment3,1,show);
  tl.to(message,1,sendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment3,1,delaySendLeft);
  tl.to(segment4,0,sendLeft);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step7");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_7',"step6");
  });
  tl.to(message,1,sendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment4,1,show);
  tl.to(message,1,sendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment3,1,delaySendLeft);
  tl.to(segment4,1,delaySendLeft);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step8");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_8',"step7");
  });
  tl.to(message,1,sendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment3,1,delaySendLeft);
  tl.to(segment4,1,delaySendLeft);
  /*Segments disappear from layers*/
  tl.to(message,0,insertFadeout);
  tl.to(segment1,0,insertFadeout);
  tl.to(segment2,0,insertFadeout);
  tl.to(segment3,0,insertFadeout);
  tl.to(segment4,0,insertFadeout);
  tl.to(message,1,delayHide);
  tl.to(segment1,1,delayHide);
  tl.to(segment2,1,delayHide);
  tl.to(segment3,1,delayHide);
  tl.to(segment4,1,delayHide);
  tl.to(message,0,removeFadeout);
  tl.to(segment1,0,removeFadeout);
  tl.to(segment2,0,removeFadeout);
  tl.to(segment3,0,removeFadeout);
  tl.to(segment4,0,removeFadeout);
  /*Segments appear in the pipe*/
  tl.to(message,0,pipePosition);
  tl.to(segment1,0,pipePosition);
  tl.to(segment2,0,pipePosition);
  tl.to(segment3,0,pipePosition);
  tl.to(segment4,0,pipePosition);
  tl.to(segment4,0,show);
  tl.to(segment3,0,show);
  tl.to(segment2,0,show);
  tl.to(segment1,0,show);
  tl.to(message,0,show);
  tl.to(segment4,1,sendDown);
  tl.to(segment4,1,sendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment4,1,sendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment4,1,sendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step9");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_9',"step8");
  });
  /*Slide segments in the pipe*/
  tl.to(segment4,1,sendDown2);
  tl.to(segment3,1,delaySendDown2);
  tl.to(segment2,1,delaySendDown2);
  tl.to(segment1,1,delaySendDown2);
  tl.to(message,1,delaySendDown2);

  /*Segments disappear from tube*/
  tl.to(segment4,1,sendDown);
  tl.to(segment4,1,delayHide);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(message,1,delaySendDown);
  tl.to(segment3,1,sendDown);
  tl.to(segment3,1,delayHide);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(message,1,delaySendDown);
  tl.to(segment2,1,sendDown);
  tl.to(segment2,1,delayHide);
  tl.to(segment1,1,delaySendDown);
  tl.to(message,1,delaySendDown);
  tl.to(segment1,1,sendDown);
  tl.to(segment1,1,delayHide);
  tl.to(message,1,delaySendDown);
  tl.to(message,1,sendDown);
  tl.to(message,1,delayHide);
  tl.to(focus,1,{top:"+="+transform(patternHeight, patternWidth, height, width, 130, 'y', true)});
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step10");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'EXAMPLE', 'HYBRID_MODEL_PRESENTATION_10',"step9");
  });
  /*Segments appear in router's layers*/
  tl.to(message,0,routerPosition);
  tl.to(segment1,0,routerPosition);
  tl.to(segment2,0,routerPosition);
  tl.to(segment3,0,routerPosition);
  tl.to(segment4,0,routerPosition);
  tl.to(message,0,sendDown);
  tl.to(message,0,sendDown);
  tl.to(message,0,sendDown);
  tl.to(message,0,sendDown);
  tl.to(segment1,0,sendDown);
  tl.to(segment1,0,sendDown);
  tl.to(segment1,0,sendDown);
  tl.to(segment2,0,sendDown);
  tl.to(segment2,0,sendDown);
  tl.to(segment3,0,sendDown);
  tl.to(segment4,1,show);
  tl.to(segment3,1,delayShow);
  tl.to(segment2,1,delayShow);
  tl.to(segment1,1,delayShow);
  tl.to(message,1,delayShow);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step11");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_11',"step10");
  });
  tl.to(segment4,1,sendRight);
  tl.to(segment3,1,delaySendRight);
  tl.to(segment2,1,delaySendRight);
  tl.to(segment1,1,delaySendRight);
  tl.to(message,1,delaySendRight);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step12");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_12',"step11");
  });
  tl.to(segment4,0,insertFadeout);
  tl.to(segment4,1,hide);
  tl.to(segment4,0,removeFadeout);
  tl.to(segment3,1,sendRight);
  tl.to(segment2,1,delaySendRight);
  tl.to(segment1,1,delaySendRight);
  tl.to(message,1,delaySendRight);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step13");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_13',"step12");
  });
  tl.to(segment3,1,sendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(message,1,delaySendLeft);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step14");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_14',"step13");
  });
  tl.to(segment4,1,show);
  tl.to(segment4,1,sendLeft);
  tl.to(segment3,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(message,1,delaySendLeft);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step15");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_15',"step14");
  });
  tl.to(segment4,1,sendLeft);
  tl.to(segment3,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(message,1,delaySendLeft);

  /*Segments disappear from router's layers*/
  tl.to(segment4,0,insertFadeout);
  tl.to(segment3,0,insertFadeout);
  tl.to(segment2,0,insertFadeout);
  tl.to(segment1,0,insertFadeout);
  tl.to(message,0,insertFadeout);

  tl.to(segment4,1,delayHide);
  tl.to(segment3,1,delayHide);
  tl.to(segment2,1,delayHide);
  tl.to(segment1,1,delayHide);
  tl.to(message,1,delayHide);

  tl.to(segment4,0,removeFadeout);
  tl.to(segment3,0,removeFadeout);
  tl.to(segment2,0,removeFadeout);
  tl.to(segment1,0,removeFadeout);
  tl.to(message,0,removeFadeout);

  tl.to(focus,1,{height: transform(patternHeight, patternWidth, height, width, 220, 'y', false)});
  tl.to(focus,1,{top:"+="+transform(patternHeight, patternWidth, height, width, 200, 'y', false)});

  /*Segments appear in pipe (second piece)*/
  tl.to(message,0,pipePosition2);
  tl.to(segment1,0,pipePosition2);
  tl.to(segment2,0,pipePosition2);
  tl.to(segment3,0,pipePosition2);
  tl.to(segment4,0,pipePosition2);
  tl.to(segment4,0,show);
  tl.to(segment3,0,show);
  tl.to(segment2,0,show);
  tl.to(segment1,0,show);
  tl.to(message,0,show);
  tl.to(segment4,1,sendDown);
  tl.to(segment4,1,sendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment4,1,sendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment4,1,sendDown);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment1,1,delaySendDown);

  /*Segments slide and disappear in pipe*/
  tl.to(segment4,1,sendDown);
  tl.to(segment4,1,delayHide);
  tl.to(segment3,1,delaySendDown);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(message,1,delaySendDown);
  tl.to(segment3,1,sendDown);
  tl.to(segment3,1,delayHide);
  tl.to(segment2,1,delaySendDown);
  tl.to(segment1,1,delaySendDown);
  tl.to(message,1,delaySendDown);
  tl.to(segment2,1,sendDown);
  tl.to(segment2,1,delayHide);
  tl.to(segment1,1,delaySendDown);
  tl.to(message,1,delaySendDown);
  tl.to(segment1,1,sendDown);
  tl.to(segment1,1,delayHide);
  tl.to(message,1,delaySendDown);
  tl.to(message,1,sendDown);
  tl.to(message,1,delayHide);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step16");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_16',"step15");
  });
  tl.to(message,0,serverPosition);
  tl.to(segment1,0,serverPosition);
  tl.to(segment2,0,serverPosition);
  tl.to(segment3,0,serverPosition);
  tl.to(segment4,0,serverPosition);
  tl.to(message,0,sendDown);
  tl.to(message,0,sendDown);
  tl.to(message,0,sendDown);
  tl.to(message,0,sendDown);
  tl.to(segment1,0,sendDown);
  tl.to(segment1,0,sendDown);
  tl.to(segment1,0,sendDown);
  tl.to(segment2,0,sendDown);
  tl.to(segment2,0,sendDown);
  tl.to(segment3,0,sendDown);
  tl.to(segment4,1,show);
  tl.to(segment3,1,delayShow);
  tl.to(segment2,1,delayShow);
  tl.to(segment1,1,delayShow);
  tl.to(message,1,delayShow);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step17");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_11',"step16");
  });
  tl.to(segment4,1,sendRight);
  tl.to(segment3,1,delaySendRight);
  tl.to(segment2,1,delaySendRight);
  tl.to(segment1,1,delaySendRight);
  tl.to(message,1,delaySendRight);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step18");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_12',"step17");
  });
  tl.to(segment4,0,insertFadeout);
  tl.to(segment4,1,hide);
  tl.to(segment4,0,removeFadeout);
  tl.to(segment3,1,sendRight);
  tl.to(segment2,1,delaySendRight);
  tl.to(segment1,1,delaySendRight);
  tl.to(message,1,delaySendRight);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step19");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_17',"step18");
  });
  tl.to(segment3,0,insertFadeout);
  tl.to(segment3,1,hide);
  tl.to(segment3,0,removeFadeout);
  tl.to(segment2,1,sendRight);
  tl.to(segment1,1,delaySendRight);
  tl.to(message,1,delaySendRight);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step20");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_18',"step19");
  });
  tl.to(segment2,0,insertFadeout);
  tl.to(segment2,1,hide);
  tl.to(segment2,0,removeFadeout);
  tl.to(segment1,1,sendRight);
  tl.to(message,1,delaySendRight);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step21");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_19',"step20");
  });
  tl.to(segment1,0,insertFadeout);
  tl.to(segment1,1,hide);
  tl.to(segment1,0,removeFadeout);
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
  //end

  tl.call(function() {
    endPopup(tl,$translate, $ionicPopup, $state, $scope, 'END', 'ANIMATION_END',"step21","step1");
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
