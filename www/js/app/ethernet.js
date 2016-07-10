angular.module('netanimations.ethernet', [])
.controller('EthernetCtrl', function($state, $scope, $ionicPopup, $translate, $compile) {
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

  var segment1 = "#segment-1";
  var segment2 = "#segment-2";
  var segment3 = "#segment-3";
  var ear1 = "#ear-1";
  var ear2 = "#ear-2";
  var ear3 = "#ear-3";
  var trash1= "#trash-1";
  var trash2= "#trash-2";
  var collision1 = "#collision-1";
  var collision2 = "#collision-2";
  var patternHeight = 595;
  var patternWidth = 350;
  var width = window.innerWidth;
  var height = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var boxWidth = transform(patternHeight, patternWidth, height, width, 40, 'x', true);
  var boxHeight = transform(patternHeight, patternWidth, height, width, 34, 'y', true);
  var earWidth = transform(patternHeight, patternWidth, height, width, 60, 'x', true);
  var earHeight = transform(patternHeight, patternWidth, height, width, 60, 'y', true);
  var trashWidth = transform(patternHeight, patternWidth, height, width, 60, 'x', true);
  var trashHeight = transform(patternHeight, patternWidth, height, width, 60, 'y', true);
  var collisionWidth = transform(patternHeight, patternWidth, height, width, 40, 'x', true);
  var collisionHeight = transform(patternHeight, patternWidth, height, width, 34, 'y', true);

  var segInitialLeft = window.innerWidth / 2;
  var segHostATop = transform(patternHeight, patternWidth, height, width, 59, 'y', false);
  var segHostBTop = transform(patternHeight, patternWidth, height, width, 243, 'y', false);
  var segHorizontalCrossing = transform(patternHeight, patternWidth, height, width, 102, 'x', false);
  var segVerticalDownCrossing = transform(patternHeight, patternWidth, height, width, 178, 'y', false);
  var segVerticalUpCrossing = transform(patternHeight, patternWidth, height, width, 184, 'y', false);
  var segDiscard = transform(patternHeight, patternWidth, height, width, 50, 'y', false);
  var earLeft = transform(patternHeight, patternWidth, height, width, 130, 'x', true);
  var ear1Top = transform(patternHeight, patternWidth, height, width, 40, 'y', false);
  var ear2Top = transform(patternHeight, patternWidth, height, width, 230, 'y', false);
  var ear3Top = transform(patternHeight, patternWidth, height, width, 410, 'y', false);
  var trashsLeft = transform(patternHeight, patternWidth, height, width, 175, 'x', false);
  var trash2Top = transform(patternHeight, patternWidth, height, width, 180, 'y', false);
  var audio = document.createElement('audio');
  var audiovisualPreference = $scope.audiovisual;

  var rotate90 = {rotation: 90};
  var rotate0 = {rotation: 0};

  //initializing objects
  tl.set(segment1,{height:boxHeight});
  tl.set(segment1,{width:boxWidth});
  tl.set(segment1,{autoAlpha:0});
  tl.set(segment2,{height:boxHeight});
  tl.set(segment2,{width:boxWidth});
  tl.set(segment2,{autoAlpha:0});
  tl.set(segment3,{height:boxHeight});
  tl.set(segment3,{width:boxWidth});
  tl.set(segment3,{autoAlpha:0});
  tl.set(ear1,{height:earHeight});
  tl.set(ear1,{width:earWidth});
  tl.set(ear1,{autoAlpha:0});
  tl.set(ear2,{height:earHeight});
  tl.set(ear2,{width:earWidth});
  tl.set(ear2,{autoAlpha:0});
  tl.set(ear3,{height:earHeight});
  tl.set(ear3,{width:earWidth});
  tl.set(ear3,{autoAlpha:0});
  tl.set(trash1,{width: trashWidth, height: trashHeight, left: trashsLeft, autoAlpha:0});
  tl.set(trash2,{width: trashWidth, height: trashHeight, left: trashsLeft, top: trash2Top, autoAlpha:0});
  tl.set(collision1,{height:collisionHeight, width: collisionWidth, autoAlpha:0});
  tl.set(collision2,{height:collisionHeight, width: collisionWidth, autoAlpha:0});

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'ETHERNET_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_3',"step2");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step4");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_4',"step3");
  });

  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/4-5.ogg')}});
    //putting segment1 in hostA's adapter
    tl.set(segment1,{top:segHostATop});
    tl.set(segment1,{left:segInitialLeft});
    tl.to('.bg',5,{});
    tl.to(segment1,4,{autoAlpha:1});
  }else{
    //putting segment1 in hostA's adapter
    tl.set(segment1,{top:segHostATop});
    tl.set(segment1,{left:segInitialLeft});
    tl.to(segment1,1,{autoAlpha:1});
  }

  tl.add("step5");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_5',"step4");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step6");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_6',"step5");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/6-7.ogg')}});
    //Host A preparing to send and Host B sending first
    tl.set(ear1,{top:ear1Top,left:earLeft}).set(ear2,{top:ear2Top,left:earLeft}).set(ear3,{top:ear3Top,left:earLeft});
    animateListen(tl,ear1,ear2,ear3,2);
    tl.set(segment2,{top:segHostBTop, left:segInitialLeft}).set(segment3,{top:segHostBTop, left:segInitialLeft});
    tl.to(segment2,2,{autoAlpha:1});
    tl.to(segment3,2,{autoAlpha:1,delay:-2});
    tl.to(segment2,2.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment3,2.5,{left:"+="+segHorizontalCrossing,delay:-2.5});
    tl.to(segment2,2.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment3,2.5,{top:"-="+segVerticalUpCrossing,delay:-2.5});
  }else{
    //Host A preparing to send and Host B sending first
    tl.set(ear1,{top:ear1Top,left:earLeft}).set(ear2,{top:ear2Top,left:earLeft}).set(ear3,{top:ear3Top,left:earLeft});
    animateListen(tl,ear1,ear2,ear3,1);
    tl.set(segment2,{top:segHostBTop, left:segInitialLeft}).set(segment3,{top:segHostBTop, left:segInitialLeft});
    tl.to(segment2,1,{autoAlpha:1});
    tl.to(segment3,1,{autoAlpha:1,delay:-1});
    tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment3,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});
    tl.to(segment2,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment3,1.5,{top:"-="+segVerticalUpCrossing,delay:-1.5});
  }


  tl.add("step7");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_7',"step6");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/7-8.ogg')}});
    //sending packages of host B and discarding from host A
    tl.to(segment1,5,{autoAlpha:0});
    tl.to(segment2,5,{left:"-="+segHorizontalCrossing});
    tl.to(segment3,5,{left:"-="+segHorizontalCrossing,delay:-5});
    tl.to(trash1,1.5,{autoAlpha:1, delay:-1.5});
    tl.to(segment3,2,{top:"-="+segDiscard});
    tl.to(segment3,1,{autoAlpha:0});
    tl.to(segment2,1,{autoAlpha:0,delay:-1});
    tl.to(trash1,1,{autoAlpha:0,delay:-1});
  }else{
    //sending packages of host B and discarding from host A
    tl.to(segment1,1,{autoAlpha:0});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(segment3,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
    tl.to(trash1,1.5,{autoAlpha:1, delay:-1.5});
    tl.to(segment3,1,{top:"-="+segDiscard});
    tl.to(segment3,1,{autoAlpha:0});
    tl.to(segment2,1,{autoAlpha:0,delay:-1});
    tl.to(trash1,1,{autoAlpha:0,delay:-1});
  }

  tl.add("step8");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_8',"step7");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step9");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_9',"step8");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/9-10.ogg')}});
    //sending from host A to host C
    tl.to(segment1,1,{autoAlpha:1});
    tl.to(segment1,2.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment1,2.5,{top:"+="+segVerticalUpCrossing});
    tl.set(segment2,{top:segVerticalUpCrossing+segHostATop,
      left:segInitialLeft+segHorizontalCrossing,
      autoAlpha:1});
    tl.to(segment1,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing, delay:-1.5});
    tl.to(segment1,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(trash2,1.5,{autoAlpha:1,delay:-1.5});
    tl.to(segment2,1,{top:"-="+segDiscard});
    tl.to(segment1,1,{autoAlpha:0,delay:-1});
    tl.to(segment2,1,{autoAlpha:0});
    tl.to(trash2,1,{autoAlpha:0,delay:-1});
  }else{
    //sending from host A to host C
    tl.to(segment1,1,{autoAlpha:1});
    tl.to(segment1,1.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment1,1.5,{top:"+="+segVerticalUpCrossing});
    tl.set(segment2,{top:segVerticalUpCrossing+segHostATop,
      left:segInitialLeft+segHorizontalCrossing,
      autoAlpha:1});
    tl.to(segment1,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing, delay:-1.5});
    tl.to(segment1,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(trash2,1.5,{autoAlpha:1,delay:-1.5});
    tl.to(segment2,1,{top:"-="+segDiscard});
    tl.to(segment1,1,{autoAlpha:0,delay:-1});
    tl.to(segment2,1,{autoAlpha:0});
    tl.to(trash2,1,{autoAlpha:0,delay:-1});
  }

  tl.add("step10");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_10',"step9");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step11");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_11',"step10");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/11-12.ogg')}});
    //putting segment1 in hostA's adapter
    tl.set(segment1,{top:segHostATop});
    tl.set(segment1,{left:segInitialLeft});
    tl.to(segment1,1,{autoAlpha:1});
    tl.to(segment1,5,{left:"+="+segHorizontalCrossing});
  }else{
    //putting segment1 in hostA's adapter
    tl.set(segment1,{top:segHostATop});
    tl.set(segment1,{left:segInitialLeft});
    tl.to(segment1,1,{autoAlpha:1});
    tl.to(segment1,1.5,{left:"+="+segHorizontalCrossing});
  }

  tl.add("step12");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_12',"step11");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/12-13.ogg')}});
    //crashing frame from host A and B
    tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
    tl.to(segment2,0.5,{autoAlpha:1});
    tl.to(segment1,8,{top:"+="+segVerticalUpCrossing});
    tl.to(segment2,8,{left:"+="+segHorizontalCrossing,delay:-8});
  }else{
    //crashing frame from host A and B
    tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
    tl.to(segment2,0.5,{autoAlpha:1});
    tl.to(segment1,1.5,{top:"+="+segVerticalUpCrossing});
    tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});
  }

  tl.add("step13");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_13',"step12");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/13-14.ogg')}});
    //throwing out the crashed frames
    tl.to(trash2,3,{autoAlpha:1});
    tl.to(segment1,1.5,{top:trash2Top,left:trashsLeft,delay:-3});
    tl.to(segment2,1.5,{top:trash2Top,left:trashsLeft,delay:-1.2});
    tl.set(trash2,{autoAlpha:0});
    tl.set(segment1,{autoAlpha:0});
    tl.set(segment2,{autoAlpha:0});
  }else{
    //throwing out the crashed frames
    tl.to(trash2,0.5,{autoAlpha:1});
    tl.to(segment1,1.5,{top:trash2Top,left:trashsLeft,delay:-0.5});
    tl.to(segment2,1.5,{top:trash2Top,left:trashsLeft,delay:-1.2});
    tl.set(trash2,{autoAlpha:0});
    tl.set(segment1,{autoAlpha:0});
    tl.set(segment2,{autoAlpha:0});
  }

  tl.add("step14");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_14',"step13");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/14-15.ogg')}});
    //Host B sends a collision signal
    tl.set(collision1,{top:segHostBTop, left: segInitialLeft});
    tl.to(collision1,2,{autoAlpha:1});
    tl.to(collision1,4,{left:"+="+segHorizontalCrossing});
    tl.set(collision2,{top:segHostBTop, left:segInitialLeft+segHorizontalCrossing, autoAlpha:1});
    tl.to(collision1,1.5,{top:"-="+segVerticalUpCrossing});
    tl.to(collision2,1.5,{top:"+="+segVerticalDownCrossing,delay:-1.5});
    tl.to(collision1,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(collision2,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
    tl.to(collision1,1,{autoAlpha:0});
    tl.to(collision2,1,{autoAlpha:0, delay:-1});
  }else{
    //Host B sends a collision signal
    tl.set(collision1,{top:segHostBTop, left: segInitialLeft});
    tl.to(collision1,0.5,{autoAlpha:1});
    tl.to(collision1,1.5,{left:"+="+segHorizontalCrossing});
    tl.set(collision2,{top:segHostBTop, left:segInitialLeft+segHorizontalCrossing, autoAlpha:1});
    tl.to(collision1,1.5,{top:"-="+segVerticalUpCrossing});
    tl.to(collision2,1.5,{top:"+="+segVerticalDownCrossing,delay:-1.5});
    tl.to(collision1,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(collision2,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
    tl.to(collision1,0.5,{autoAlpha:0});
    tl.to(collision2,0.5,{autoAlpha:0, delay:-0.5});
  }

  tl.add("step15");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_15',"step14");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step16");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_16',"step15");
  });
  if (audiovisualPreference) {
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/16-17.ogg')}});
    //correct Host A's transmission
    tl.set(segment1,{top:segHostATop, left: segInitialLeft});
    tl.to(segment1,1,{autoAlpha:1});
    tl.to(segment1,2.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment1,2.5,{top:"+="+segVerticalUpCrossing});
    tl.set(segment2,{top:segVerticalUpCrossing+segHostATop,
      left:segInitialLeft+segHorizontalCrossing,
      autoAlpha:1});
    tl.to(segment1,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing, delay:-1.5});
    tl.to(segment1,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(trash2,1.5,{autoAlpha:1,delay:-1.5});
    tl.to(segment2,1,{top:"-="+segDiscard});
    tl.to(segment1,1,{autoAlpha:0,delay:-1});
    tl.to(segment2,1,{autoAlpha:0});
    tl.to(trash2,1,{autoAlpha:0,delay:-1});
  }else{
    //correct Host A's transmission
    tl.set(segment1,{top:segHostATop, left: segInitialLeft});
    tl.to(segment1,0.5,{autoAlpha:1});
    tl.to(segment1,1.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment1,1.5,{top:"+="+segVerticalUpCrossing});
    tl.set(segment2,{top:segVerticalUpCrossing+segHostATop,
      left:segInitialLeft+segHorizontalCrossing,
      autoAlpha:1});
    tl.to(segment1,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing, delay:-1.5});
    tl.to(segment1,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(trash2,1.5,{autoAlpha:1,delay:-1.5});
    tl.to(segment2,1,{top:"-="+segDiscard});
    tl.to(segment1,1,{autoAlpha:0,delay:-1});
    tl.to(segment2,1,{autoAlpha:0});
    tl.to(trash2,1,{autoAlpha:0,delay:-1});
  }

  tl.add("step17");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_17',"step16");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/ethernet/17-18.ogg')}});
    //correct Host B's transmission
    tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
    tl.set(segment3,{top:segHostBTop, left:segInitialLeft});
    tl.to(segment2,2,{autoAlpha:1});
    tl.to(segment3,2,{autoAlpha:1,delay:-2});
    tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment3,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});
    tl.to(segment2,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment3,1.5,{top:"-="+segVerticalUpCrossing,delay:-1.5});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(segment3,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
    tl.to(trash1,0.5,{autoAlpha:1,delay:-1.5});
    tl.to(segment3,3,{top:"-="+segDiscard});
    tl.to(segment2,2,{autoAlpha:0});
    tl.to(trash1,2,{autoAlpha:0,delay:-2});
  }else{
    //correct Host B's transmission
    tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
    tl.set(segment3,{top:segHostBTop, left:segInitialLeft});
    tl.to(segment2,1,{autoAlpha:1});
    tl.to(segment3,1,{autoAlpha:1,delay:-1});
    tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing});
    tl.to(segment3,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});
    tl.to(segment2,1.5,{top:"+="+segVerticalDownCrossing});
    tl.to(segment3,1.5,{top:"-="+segVerticalUpCrossing,delay:-1.5});
    tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing});
    tl.to(segment3,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
    tl.to(trash1,0.5,{autoAlpha:1,delay:-1.5});
    tl.to(segment3,1,{top:"-="+segDiscard});
    tl.to(segment2,0.5,{autoAlpha:0});
    tl.to(trash1,0.5,{autoAlpha:0,delay:-0.5});
  }

  tl.add("step18");
  tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'ETHERNET_PRESENTATION_18',"step17");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //end
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

function animateListen(tl,ear1,ear2,ear3,alpha){
    tl.to(ear1,1,{autoAlpha:alpha});
    tl.to(ear2,1,{autoAlpha:alpha,delay:-1});
    tl.to(ear3,1,{autoAlpha:alpha,delay:-1});
}
