angular.module('netanimations.intraasrouting', [])
.controller('IntraAsRoutingCtrl', function($state, $scope, $ionicPopup, $translate) {
  $scope.end = false;

  var tl = new TimelineLite();

  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

  TweenLite.defaultEase = Power1.easeInOut;

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

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, 'INFO', 'INTRA_AS_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_3',"step2");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step4");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_4',"step3");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step5");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_5',"step4");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step6");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_6',"step5");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step7");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_7',"step6");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step8");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_8',"step7");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
  //change background to bg2
  tl.to('.bg',0.5,{opacity:0});
  tl.to('.bg',2,{className:"+=intra-as-bg2",opacity:1});
  tl.to('.bg',0.5,{opacity:0});
  tl.to('.bg',0,{className:"-=intra-as-bg2"});
  tl.to('.bg',0.5,{opacity:1});

  tl.add("step9");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_9',"step8");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
  //show 1b router's table
  tl.to('.r1b',3,{className:"-=hide"});

  tl.add("step10");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_10',"step9");
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

  tl.add("step11");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_11',"step10");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
  //showing 1c router's table
  tl.to('.r1c',0,{opacity:0});
  tl.to('.r1c',0,{className:"-=hide"});
  tl.to('.r1c',1,{opacity:1});
  tl.to('.r1c',3,{opacity:1}); //procurar outra alternativa para manter a tabela na tela por mais tempo

  tl.add("step12");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_12',"step11");
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

  tl.add("step13");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'INFO', 'INTRA_AS_PRESENTATION_13',"step12");
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
    endPopup(tl,$translate, $ionicPopup, $state, $scope, 'END', 'ANIMATION_END',"step13","step1");
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
