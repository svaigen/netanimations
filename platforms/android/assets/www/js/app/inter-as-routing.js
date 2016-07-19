angular.module('netanimations.interasrouting', [])
.controller('InterAsRoutingCtrl', function($state, $scope, $ionicPopup, $translate, $compile) {
  $scope.end = false;

  var tl = new TimelineLite();

  $scope.tl = tl;

  $scope.accessibilityGo = function(op,state){
    switch (op) {
      case 'exit':
        $scope.tl.seek(0);
        $state.go(state);
        break;
      case 'next':
        cleanContentInfo();
        $scope.tl.resume();
        break;
      case 'back':
        cleanContentInfo();
        $scope.tl.seek(state); //checkpoint de retrocesso
        $scope.tl.play();
        break;
      case 'restart':
        cleanContentInfo();
        $scope.tl.seek(state);
        $scope.tl.play();
        break;
    }
  };
  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

  TweenLite.defaultEase = Power1.easeInOut;

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
  var audio = document.createElement('audio');
  var audiovisualPreference = $scope.audiovisual;


  //initialize segment1 and segment2's properties
  tl.set(segment1,{width:boxWidth});
  tl.set(segment1,{height: boxHeight});
  tl.set(segment2,{width:boxWidth});
  tl.set(segment2,{height: boxHeight});

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'INTER_AS_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_3',"step2");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step4");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_4',"step3");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step5");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_5',"step4");
  });
  tl.to('.animationFrame', 2, {x: 0}); //dummy step - do not remove

  tl.add("step6");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_6',"step5");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step7");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_7',"step6");
  });

  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/7-8.ogg')}});
    //change background to bg2
    tl.to('.bg',1,{autoAlpha:0});
    tl.set('.bg',{className:"+=inter-as-bg2",opacity:1});
    tl.to('.bg',2,{autoAlpha:1});
    tl.set('.bg',{className:"-=inter-as-bg1"});
    tl.to('.bg',33,{});
  }else{
    //change background to bg2
    tl.to('.bg',1,{autoAlpha:0});
    tl.set('.bg',{className:"+=inter-as-bg2",opacity:1});
    tl.to('.bg',2,{autoAlpha:1});
    tl.set('.bg',{className:"-=inter-as-bg1"});
  }

  tl.add("step8");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_8',"step7");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/8-9.ogg')}});
    //sending a package from 1c in AS1 to AS2
    tl.set(segment1,{top:transmission1cTo1aTop});
    tl.set(segment1,{left:transmission1cTo1aLeft})
    tl.to(segment1,1,{className: "-=hide"});
    tl.to(segment1,2,{top: "+="+crossingVerticalPipe1});
    tl.to(segment1,2,{left: "-="+crossingHorizontalPipe1});
    tl.to(segment1,1,{autoAlpha:0});
    tl.set(segment1,{top:transmission1aTo2aTop});
    tl.set(segment1,{left:transmission1aTo2aLeft})
    tl.to(segment1,1,{autoAlpha:1});
    tl.to(segment1,2.5,{top:"+="+crossingAS1ToAS2});
    tl.to(segment1,0.5,{autoAlpha:0});
  }else{
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
  }

  tl.add("step9");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_9',"step8");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step10");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_10',"step9");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/10-11.ogg')}});
    //change background to bg3 and return to bg2
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"+=inter-as-bg3"});
    tl.to('.bg',2,{autoAlpha:1});
    tl.to('.bg',9.5,{});
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"-=inter-as-bg3"});
    tl.to('.bg',0.5,{autoAlpha:1});
  }else{
    //change background to bg3 and return to bg2
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"+=inter-as-bg3"});
    tl.to('.bg',2,{autoAlpha:1});
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.to('.bg',0.5,{autoAlpha:1});
    tl.set('.bg',{className:"-=inter-as-bg3"});
  }

  tl.add("step11");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_11',"step10");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step12");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_12',"step11");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step13");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_13',"step12");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/13-14.ogg')}});
    //change background to bg4
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"+=inter-as-bg4"});
    tl.to('.bg',2,{autoAlpha:1});
    tl.to('.bg',19.5,{});
  }else{
    //change background to bg4
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"+=inter-as-bg4"});
    tl.to('.bg',2,{autoAlpha:1});
  }

  tl.add("step14");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_14',"step13");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/14-15.ogg')}});
    //eBGP animation
    tl.set(segment1,{className: "-=hide"});
    tl.set(segment1,{autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,4,{top:"-="+crossingAS1ToAS2});
    tl.to(segment1,1,{autoAlpha:0});
    tl.to(segment1,2,{autoAlpha:1});
    tl.to(segment1,4,{top:"+="+crossingAS1ToAS2});
    tl.to(segment1,0.5,{autoAlpha:0});
  }else{
    //eBGP animation
    tl.set(segment1,{className: "-=hide"});
    tl.set(segment1,{autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1.5,{top:"-="+crossingAS1ToAS2});
    tl.to(segment1,1,{autoAlpha:0});
    tl.to(segment1,2,{autoAlpha:1});
    tl.to(segment1,1.5,{top:"+="+crossingAS1ToAS2});
    tl.to(segment1,0.5,{autoAlpha:0});
  }

  tl.add("step15");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_15',"step14");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/15-16.ogg')}});
    //iBGP animation
    tl.set(segment1,{className: "-=hide"});
    tl.set(segment1,{autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1.5,{top:"-="+crossingAS1ToAS2});
    tl.to(segment1,1,{autoAlpha:0});
    tl.set(segment1,{top:transmission1aTo1bTop,left:transmission1aTo1bLeft});
    tl.set(segment2,{top:transmission1aTo1cTop,left:transmission1aTo1cLeft,className: "-=hide",autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment2,0.5,{autoAlpha:1, delay: -0.5});
    tl.to(segment1,1,{left: "-="+crossingHorizontalPipe1});
    tl.to(segment2,1,{left: "+="+crossingHorizontalPipe1, delay: -1});
    tl.to(segment1,1,{top: "-="+crossingVerticalPipe1});
    tl.to(segment2,1,{top: "-="+crossingVerticalPipe1, delay: -1});
    tl.to(segment1,1,{autoAlpha:0});
    tl.to(segment2,1,{autoAlpha:0,delay:-1});
    tl.to('.bg',3,{});
  }else{
    //iBGP animation
    tl.set(segment1,{className: "-=hide"});
    tl.set(segment1,{autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1.5,{top:"-="+crossingAS1ToAS2});
    tl.to(segment1,1,{autoAlpha:0});
    tl.set(segment1,{top:transmission1aTo1bTop,left:transmission1aTo1bLeft});
    tl.set(segment2,{top:transmission1aTo1cTop,left:transmission1aTo1cLeft,className: "-=hide",autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment2,0.5,{autoAlpha:1, delay: -0.5});
    tl.to(segment1,1,{left: "-="+crossingHorizontalPipe1});
    tl.to(segment2,1,{left: "+="+crossingHorizontalPipe1, delay: -1});
    tl.to(segment1,1,{top: "-="+crossingVerticalPipe1});
    tl.to(segment2,1,{top: "-="+crossingVerticalPipe1, delay: -1});
    tl.to(segment1,1,{autoAlpha:0});
    tl.to(segment2,1,{autoAlpha:0,delay:-1});
  }

  tl.add("step16");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_16',"step15");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/16-17.ogg')}});
    //change background to bg5
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"-=inter-as-bg4"});
    tl.set('.bg',{className:"+=inter-as-bg5"});
    tl.to('.bg',2,{autoAlpha:1});
    tl.to('.bg',5.5,{});
  }else{
    //change background to bg5
    tl.to('.bg',0.5,{autoAlpha:0});
    tl.set('.bg',{className:"-=inter-as-bg4"});
    tl.set('.bg',{className:"+=inter-as-bg5"});
    tl.to('.bg',2,{autoAlpha:1});
  }


  tl.add("step17");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_17',"step16");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/bgp/17-18.ogg')}});
    //ASPATH animation
    tl.set(segment1,{top:transmission2dTo2cTop,left:transmission2dTo2cLeft,className: "-=hide",autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1,{top:"+="+crossingVerticalPipe2});
    tl.to(segment1,1,{left:"+="+crossingHorizontalPipe2});
    tl.to(segment1,0.5,{autoAlpha:0});
    tl.set(segment1,{top:transmission2cTo2aTop,left:transmission2cTo2aLeft});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,2,{top:"-="+crossingVerticalPipe3});
    tl.to(segment1,0.5,{autoAlpha:0});
    tl.set(segment1,{top:transmission2aTo1aTop,left:transmission2aTo1aLeft});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,3,{top:"-="+crossingAS1ToAS2});
    tl.to(segment1,0.5,{autoAlpha:0});
  }else{
    //ASPATH animation
    tl.set(segment1,{top:transmission2dTo2cTop,left:transmission2dTo2cLeft,className: "-=hide",autoAlpha:0});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1,{top:"+="+crossingVerticalPipe2});
    tl.to(segment1,1,{left:"+="+crossingHorizontalPipe2});
    tl.to(segment1,0.5,{autoAlpha:0});
    tl.set(segment1,{top:transmission2cTo2aTop,left:transmission2cTo2aLeft});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1,{top:"-="+crossingVerticalPipe3});
    tl.to(segment1,0.5,{autoAlpha:0});
    tl.set(segment1,{top:transmission2aTo1aTop,left:transmission2aTo1aLeft});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1,{top:"-="+crossingAS1ToAS2});
    tl.to(segment1,0.5,{autoAlpha:0});
  }
  tl.add("step18");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'INTER_AS_PRESENTATION_18',"step17");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'ANIMATION_END',"step18","step1");
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
