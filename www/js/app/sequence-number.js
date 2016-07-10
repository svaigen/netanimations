angular.module('netanimations.sequencenumber', [])
.controller('SequenceNumberCtrl', function($state, $scope, $ionicPopup, $translate, $compile) {
  $scope.end = false;

  var tl = new TimelineLite();

  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

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

  TweenLite.defaultEase = Power1.easeInOut;

  var segment1 = ".segment-01";
  var segment2 = ".segment-02";
  var patternHeight = 595;
  var patternWidth = 422;
  var realHeight = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var aspectRatioHeight = realHeight/patternHeight;
  var segmentInitialSize = 40 * aspectRatioHeight;
  var zoomInScale = 200 * aspectRatioHeight;
  var zoomPipeScale = 60 * aspectRatioHeight;
  var zoomIn = {width: zoomInScale};
  var bottom = 400 * aspectRatioHeight;/*window.innerHeight - (window.innerHeight * 0.35);*/
  var top = 40 * aspectRatioHeight;/*window.innerHeight - (window.innerHeight * 0.95);*/
  var zoomOutAndRotate90 = {width: zoomPipeScale, rotation: 90};
  var rotate0 = {rotation: 0};
  var hide = {className:"ng-hide"};
  var show = {className:"ng-show"};
  var sendBottom = {y: bottom};
  var sendTop = {y: top};
  var audio = document.createElement('audio');
  var audiovisualPreference = $scope.audiovisual;

  tl.set(segment1, {y:top, width:segmentInitialSize})
    .set(segment2,{y:top, width:segmentInitialSize});

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_1');
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step2");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_2',"step1");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step3");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_3',"step2");
  });

  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step4");
  tl.call(function() {
    commonPopup(tl,  $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_4',"step3");
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.add("step5");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_5',"step4");
  });

  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/5-6.ogg')}});
    tl.to(segment1, 2, sendTop);
    tl.to(segment1, 3, show);
    tl.to(segment1, 2, zoomIn);
  }else{
    tl.to(segment1, 1, sendTop);
    tl.to(segment1, 1, show);
    tl.to(segment1, 1, zoomIn);
  }

  tl.add("step6");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'SEGMENT_1', 'SEQUENCE_NUMBER_PRESENTATION_6',"step5");
  });


  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/6-7_10-11_12-13_15-16.ogg')}});
    tl.to(segment1, 1, zoomOutAndRotate90);
    tl.to(segment1, 3, sendBottom);
    tl.to(segment1, 0, hide);
  }else{
    tl.to(segment1, 1, zoomOutAndRotate90);
    tl.to(segment1, 3, sendBottom);
    tl.to(segment1, 0, hide);
  }


  tl.add("step7");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_7',"step6");
  });

  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/7-8.ogg')}});
    //initial position of segment 2
    tl.to(segment2, 0, sendBottom);
    tl.to(segment2, 4, show);
    tl.to(segment2, 4, zoomIn);
  }else{
    //initial position of segment 2
    tl.to(segment2, 0, sendBottom);
    tl.to(segment2, 1, show);
    tl.to(segment2, 1, zoomIn);
  }

  tl.add("step8");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'SEGMENT', 'SEQUENCE_NUMBER_PRESENTATION_8',"step7");
  });

  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/8-9.ogg')}});
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendTop);
    tl.to(segment2, 0, hide);
  }else{
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendTop);
    tl.to(segment2, 0, hide);
  }


  tl.add("step9");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_9',"step8");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/9-10.ogg')}});
    tl.to(segment2, 0, rotate0);
    tl.to(segment2, 0, show);
    tl.to(segment2, 8, zoomIn);
  }else{
    tl.to(segment2, 0, rotate0);
    tl.to(segment2, 0, show);
    tl.to(segment2, 1, zoomIn);
  }

  tl.add("step10");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'SEGMENT', 'SEQUENCE_NUMBER_PRESENTATION_10',"step9");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/6-7_10-11_12-13_15-16.ogg')}});
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendBottom);
    tl.to(segment2, 0, hide);
  }else{
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendBottom);
    tl.to(segment2, 0, hide);
  }


  tl.add("step11");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_11',"step10");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/11-12_14-15.ogg')}});
    //origem mostra outro pacote
    tl.to(segment2, 0, rotate0);
    tl.to(segment2, 0, sendTop);
    tl.to(segment2, 0, show);
    tl.to(segment2, 8, zoomIn);
  }else{
    //origem mostra outro pacote
    tl.to(segment2, 0, rotate0);
    tl.to(segment2, 0, sendTop);
    tl.to(segment2, 0, show);
    tl.to(segment2, 1, zoomIn);
  }

  tl.add("step12");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'SEGMENT', 'SEQUENCE_NUMBER_PRESENTATION_12',"step11");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/6-7_10-11_12-13_15-16.ogg')}});
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendBottom);
    tl.to(segment2, 0, hide);
  }else{
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendBottom);
    tl.to(segment2, 0, hide);
  }

  tl.add("step13");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_13',"step12");
  });
  //dummy step - do not remove
  tl.to(segment1, 0.5, {width: 50});

  tl.add("step14");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SEQUENCE_NUMBER_PRESENTATION_14',"step13");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/11-12_14-15.ogg')}});
    //origin shows another segment
    tl.to(segment2, 0, sendTop);
    tl.to(segment2, 0, rotate0);
    tl.to(segment2, 0, show);
    tl.to(segment2, 1, zoomIn);
  }else{
    //origin shows another segment
    tl.to(segment2, 0, sendTop);
    tl.to(segment2, 0, rotate0);
    tl.to(segment2, 0, show);
    tl.to(segment2, 8, zoomIn);
  }


  tl.add("step15");
  tl.call(function() {
    commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'SEGMENT', 'SEQUENCE_NUMBER_PRESENTATION_15',"step14");
  });
  if(audiovisualPreference){
    tl.to(audio,1,{onComplete:function(){playAudio(audio,'audio/sequence/6-7_10-11_12-13_15-16.ogg')}});
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendBottom);
    tl.to(segment2, 0, hide);
  }else{
    tl.to(segment2, 1, zoomOutAndRotate90);
    tl.to(segment2, 3, sendBottom);
    tl.to(segment2, 0, hide);
  }


  //end
  tl.call(function() {
    endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'ANIMATION_END',"step14","step1");
  });
  $scope.end = true;
});
