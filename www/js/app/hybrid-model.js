angular.module('netanimations.hybridmodel', [])

.controller('HybridModelCtrl', function($state, $scope, $ionicPopup, $translate, $compile) {

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
  var audio = document.createElement('audio');
  var audiovisualPreference = $scope.audiovisual;

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
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'HYBRID_MODEL_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'EXAMPLE', 'HYBRID_MODEL_PRESENTATION_3',"step2");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/3-4.ogg')}});
    tl.to(focus,10,show);
    tl.to(message,1,delayShow);
  }else{
    tl.to(focus,1,show);
    tl.to(message,1,delayShow);
  }


  tl.add("step4");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_4',"step3");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/4-5.ogg')}});
    tl.to(message,6,sendDown);
    tl.to(segment1,1,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,0,sendLeft);
    tl.to(segment3,0,sendLeft);
    tl.to(segment4,0,sendLeft);
  }else{
    tl.to(message,1,sendDown);
    tl.to(segment1,1,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,0,sendLeft);
    tl.to(segment3,0,sendLeft);
    tl.to(segment4,0,sendLeft);
  }

  tl.add("step5");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_5',"step4");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/5-6.ogg')}});
    tl.to(message,1,sendDown);
    tl.to(segment1,1,delaySendDown);
    tl.to(segment2,6,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment3,0,sendLeft);
    tl.to(segment4,0,sendLeft);
  }else{
    tl.to(message,1,sendDown);
    tl.to(segment1,1,delaySendDown);
    tl.to(segment2,1,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment3,0,sendLeft);
    tl.to(segment4,0,sendLeft);
  }

  tl.add("step6");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_6',"step5");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/6-7.ogg')}});
    tl.to(message,1,sendDown);
    tl.to(segment1,1,delaySendDown);
    tl.to(segment2,1,delaySendDown);
    tl.to(segment3,6,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment4,0,sendLeft);
  }else{
    tl.to(message,1,sendDown);
    tl.to(segment1,1,delaySendDown);
    tl.to(segment2,1,delaySendDown);
    tl.to(segment3,1,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment4,0,sendLeft);
  }

  tl.add("step7");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_7',"step6");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/7-8_14-15.ogg')}});
    tl.to(message,1,sendDown);
    tl.to(segment1,1,delaySendDown);
    tl.to(segment2,1,delaySendDown);
    tl.to(segment3,1,delaySendDown);
    tl.to(segment4,6,show);
    tl.to(message,1,sendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment4,1,delaySendLeft);
  }else{
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
  }

  tl.add("step8");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_8',"step7");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/8-9.ogg')}});
  }
  //the audio 8-9.ogg has the same time that a block animation, so, isn't necessary a "else" statement
  tl.to(message,1,sendLeft);
  tl.to(segment1,1,delaySendLeft);
  tl.to(segment2,1,delaySendLeft);
  tl.to(segment3,1,delaySendLeft);
  tl.to(segment4,1,delaySendLeft);
  /*Segments disappear from layers*/
  tl.set(message,insertFadeout).set(segment1,insertFadeout).set(segment2,insertFadeout).set(segment3,insertFadeout).set(segment4,insertFadeout);
  tl.to(message,1,delayHide);
  tl.to(segment1,1,delayHide);
  tl.to(segment2,1,delayHide);
  tl.to(segment3,1,delayHide);
  tl.to(segment4,1,delayHide);
  tl.set(message,removeFadeout).set(segment1,removeFadeout).set(segment2,removeFadeout).set(segment3,removeFadeout).set(segment4,removeFadeout);
  /*Segments appear in the pipe*/
  tl.set(message,pipePosition).set(segment1,pipePosition).set(segment2,pipePosition).set(segment3,pipePosition).set(segment4,pipePosition);
  tl.set(segment4,show).set(segment3,show).set(segment2,show).set(segment1,show).set(message,show);
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


  tl.add("step9");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_9',"step8");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/9-10.ogg')}});
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
    tl.to(focus,0.5,{top:"+="+transform(patternHeight, patternWidth, height, width, 130, 'y', true)});
  }else{
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
  }


  tl.add("step10");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'EXAMPLE', 'HYBRID_MODEL_PRESENTATION_10',"step9");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/10-11.ogg')}});
    tl.set(message,routerPosition).set(segment1,routerPosition).set(segment2,routerPosition).set(segment3,routerPosition).set(segment4,routerPosition);
    tl.set(message,sendDown).set(message,sendDown).set(message,sendDown).set(message,sendDown).set(segment1,sendDown).set(segment1,sendDown)
    .set(segment1,sendDown).set(segment2,sendDown).set(segment2,sendDown).set(segment3,sendDown);
    tl.to(segment4,8,show);
    tl.to(segment3,1,delayShow);
    tl.to(segment2,1,delayShow);
    tl.to(segment1,1,delayShow);
    tl.to(message,1,delayShow);
  }else{
    /*Segments appear in router's layers*/
    tl.set(message,routerPosition).set(segment1,routerPosition).set(segment2,routerPosition).set(segment3,routerPosition).set(segment4,routerPosition);
    tl.set(message,sendDown).set(message,sendDown).set(message,sendDown).set(message,sendDown).set(segment1,sendDown).set(segment1,sendDown)
    .set(segment1,sendDown).set(segment2,sendDown).set(segment2,sendDown).set(segment3,sendDown);
    tl.to(segment4,1,show);
    tl.to(segment3,1,delayShow);
    tl.to(segment2,1,delayShow);
    tl.to(segment1,1,delayShow);
    tl.to(message,1,delayShow);
  }

  tl.add("step11");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_11',"step10");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/11-12_17-18.ogg')}});
    tl.to(segment4,4,sendRight);
    tl.to(segment3,1,delaySendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }else{
    tl.to(segment4,1,sendRight);
    tl.to(segment3,1,delaySendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }


  tl.add("step12");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_12',"step11");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/12-13_18-19.ogg')}});
    tl.to(segment4,0,insertFadeout);
    tl.to(segment4,3,hide);
    tl.to(segment4,0,removeFadeout);
    tl.to(segment3,3,sendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }else{
    tl.to(segment4,0,insertFadeout);
    tl.to(segment4,1,hide);
    tl.to(segment4,0,removeFadeout);
    tl.to(segment3,1,sendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }

  tl.add("step13");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_13',"step12");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/13-14.ogg')}});
    tl.to(segment3,4,sendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(message,1,delaySendLeft);
  }else{
    tl.to(segment3,1,sendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(message,1,delaySendLeft);
  }

  tl.add("step14");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_14',"step13");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/7-8_14-15.ogg')}});
    tl.to(segment4,4,show);
    tl.to(segment4,4,sendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(message,1,delaySendLeft);
  }else{
    tl.to(segment4,1,show);
    tl.to(segment4,1,sendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(message,1,delaySendLeft);
  }

  tl.add("step15");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_15',"step14");
  });

  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/15-16.ogg')}});
    tl.to(segment4,1,sendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(message,1,delaySendLeft);

    /*Segments disappear from router's layers*/
    tl.set(segment4,insertFadeout).set(segment3,insertFadeout).set(segment2,insertFadeout).set(segment1,insertFadeout).set(message,insertFadeout);

    tl.to(segment4,1,delayHide);
    tl.to(segment3,1,delayHide);
    tl.to(segment2,1,delayHide);
    tl.to(segment1,1,delayHide);
    tl.to(message,1,delayHide);

    tl.set(segment4,removeFadeout).set(segment3,removeFadeout).set(segment2,removeFadeout).set(segment1,removeFadeout).set(message,removeFadeout);

    tl.to(focus,0.5,{height: transform(patternHeight, patternWidth, height, width, 220, 'y', false)});
    tl.to(focus,0.5,{top:"+="+transform(patternHeight, patternWidth, height, width, 200, 'y', false)});

    /*Segments appear in pipe (second piece)*/
    tl.set(message,pipePosition2).set(segment1,pipePosition2).set(segment2,pipePosition2).set(segment3,pipePosition2).set(segment4,pipePosition2);
    tl.set(segment4,show).set(segment3,show).set(segment2,show).set(segment1,show).set(message,show);
    tl.to(segment4,0.5,sendDown);
    tl.to(segment4,1,sendDown);
    tl.to(segment3,1,delaySendDown);
    tl.to(segment4,0.5,sendDown);
    tl.to(segment3,1,delaySendDown);
    tl.to(segment2,1,delaySendDown);
    tl.to(segment4,0.5,sendDown);
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
  }else{
    tl.to(segment4,1,sendLeft);
    tl.to(segment3,1,delaySendLeft);
    tl.to(segment2,1,delaySendLeft);
    tl.to(segment1,1,delaySendLeft);
    tl.to(message,1,delaySendLeft);

    /*Segments disappear from router's layers*/
    tl.set(segment4,insertFadeout).set(segment3,insertFadeout).set(segment2,insertFadeout).set(segment1,insertFadeout).set(message,insertFadeout);

    tl.to(segment4,1,delayHide);
    tl.to(segment3,1,delayHide);
    tl.to(segment2,1,delayHide);
    tl.to(segment1,1,delayHide);
    tl.to(message,1,delayHide);

    tl.set(segment4,removeFadeout).set(segment3,removeFadeout).set(segment2,removeFadeout).set(segment1,removeFadeout).set(message,removeFadeout);

    tl.to(focus,1,{height: transform(patternHeight, patternWidth, height, width, 220, 'y', false)});
    tl.to(focus,1,{top:"+="+transform(patternHeight, patternWidth, height, width, 200, 'y', false)});

    /*Segments appear in pipe (second piece)*/
    tl.set(message,pipePosition2).set(segment1,pipePosition2).set(segment2,pipePosition2).set(segment3,pipePosition2).set(segment4,pipePosition2);
    tl.set(segment4,show).set(segment3,show).set(segment2,show).set(segment1,show).set(message,show);
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
  }


  tl.add("step16");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'HYBRID_MODEL_PRESENTATION_16',"step15");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/16-17.ogg')}});
    tl.set(message,serverPosition).set(segment1,serverPosition).set(segment2,serverPosition).set(segment3,serverPosition).set(segment4,serverPosition);
    tl.set(message,sendDown).set(message,sendDown).set(message,sendDown).set(message,sendDown).set(segment1,sendDown).set(segment1,sendDown).set(segment1,sendDown).set(segment2,sendDown).set(segment2,sendDown).set(segment3,sendDown);
    tl.to(segment4,9,show);
    tl.to(segment3,1,delayShow);
    tl.to(segment2,1,delayShow);
    tl.to(segment1,1,delayShow);
    tl.to(message,1,delayShow);
  }else{
    tl.set(message,serverPosition).set(segment1,serverPosition).set(segment2,serverPosition).set(segment3,serverPosition).set(segment4,serverPosition);
    tl.set(message,sendDown).set(message,sendDown).set(message,sendDown).set(message,sendDown).set(segment1,sendDown).set(segment1,sendDown).set(segment1,sendDown).set(segment2,sendDown).set(segment2,sendDown).set(segment3,sendDown);
    tl.to(segment4,1,show);
    tl.to(segment3,1,delayShow);
    tl.to(segment2,1,delayShow);
    tl.to(segment1,1,delayShow);
    tl.to(message,1,delayShow);
  }

  tl.add("step17");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_11',"step16");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/11-12_17-18.ogg')}});
    tl.to(segment4,4,sendRight);
    tl.to(segment3,1,delaySendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }else{
    tl.to(segment4,1,sendRight);
    tl.to(segment3,1,delaySendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }

  tl.add("step18");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_12',"step17");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/12-13_18-19.ogg')}});
    tl.to(segment4,0,insertFadeout);
    tl.to(segment4,5,hide);
    tl.to(segment4,0,removeFadeout);
    tl.to(segment3,1,sendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }else{
    tl.to(segment4,0,insertFadeout);
    tl.to(segment4,1,hide);
    tl.to(segment4,0,removeFadeout);
    tl.to(segment3,1,sendRight);
    tl.to(segment2,1,delaySendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }

  tl.add("step19");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_17',"step18");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/19-20.ogg')}});
    tl.to(segment3,0,insertFadeout);
    tl.to(segment3,6,hide);
    tl.to(segment3,0,removeFadeout);
    tl.to(segment2,1,sendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }else{
    tl.to(segment3,0,insertFadeout);
    tl.to(segment3,1,hide);
    tl.to(segment3,0,removeFadeout);
    tl.to(segment2,1,sendRight);
    tl.to(segment1,1,delaySendRight);
    tl.to(message,1,delaySendRight);
  }

  tl.add("step20");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_18',"step19");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/20-21.ogg')}});
    tl.to(segment2,0,insertFadeout);
    tl.to(segment2,6,hide);
    tl.to(segment2,0,removeFadeout);
    tl.to(segment1,1,sendRight);
    tl.to(message,1,delaySendRight);
  }else{
    tl.to(segment2,0,insertFadeout);
    tl.to(segment2,1,hide);
    tl.to(segment2,0,removeFadeout);
    tl.to(segment1,1,sendRight);
    tl.to(message,1,delaySendRight);
  }

  tl.add("step21");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_19',"step20");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/hybrid/21-22.ogg')}});
    tl.to(segment1,0,insertFadeout);
    tl.to(segment1,6,hide);
    tl.to(segment1,0,removeFadeout);
  }else{
    tl.to(segment1,0,insertFadeout);
    tl.to(segment1,1,hide);
    tl.to(segment1,0,removeFadeout);
  }

  //end
  tl.call(function() {
    endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'ANIMATION_END',"step21","step1");
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
