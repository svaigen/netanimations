angular.module('netanimations.threewayhandshake', [])
.controller('ThreeWayHandshakeCtrl', function($state, $scope, $ionicPopup, $translate) {
  $scope.end = false;

  var tl = new TimelineLite();

  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

  TweenLite.defaultEase = Power1.easeInOut;

  var segment = '.segment';
  var patternHeight = 595;
  var patternWidth = 422;
  var realHeight = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var aspectRatioHeight = realHeight/patternHeight;
  var segmentInitialSize = 50 * aspectRatioHeight;
  var zoomInScale = 200 * aspectRatioHeight;
  var zoomPipeScale = 60 * aspectRatioHeight;
  var bottom = 380 * aspectRatioHeight;
  var top = 60 * aspectRatioHeight;
  var zoomIn = {width: zoomInScale};
  var zoomOutAndRotate90 = {width: zoomPipeScale, rotation: 90};
  var rotate0 = {rotation: 0};
  var hide = {className:"ng-hide"};
  var show = {className:"ng-show"};
  var sendBottom = {y: bottom};
  var sendTop = {y: top};

  //initial position
  tl.set(segment, {y:top}).set(segment, {width:segmentInitialSize});

  tl.add("step1");
  tl.call( function(){
    initialPopup(tl,$translate, $ionicPopup, $state, $scope, 'STEP_1', 'TWHS_STEP_1');
  });

  tl.to(segment, 1, show);
  tl.to(segment, 2, zoomIn);

  tl.add("step2");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'SEGMENT_1', 'TWHS_ESP_SEG_1',"step1");
  });

  tl.to(segment, 1, zoomOutAndRotate90);
  tl.to(segment, 3, sendBottom);
  tl.to(segment, 0, hide);

  tl.add("step3");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'STEP_2', 'TWHS_STEP_2',"step2");
  });

  tl.to(segment, 0, rotate0);
  tl.to(segment, 1, show);
  tl.to(segment, 1, zoomIn);

  tl.add("step4");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'SEGMENT_2', 'TWHS_ESP_SEG_2',"step3");
  });

  tl.to(segment, 1, zoomOutAndRotate90);
  tl.to(segment, 3, sendTop);
  tl.to(segment, 0, hide);

  tl.add("step5")
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'STEP_3', 'TWHS_STEP_3',"step4");
  });

  tl.to(segment, 0, rotate0);
  tl.to(segment, 0, show);
  tl.to(segment, 1, zoomIn);

  tl.add("step6");
  tl.call(function() {
    commonPopup(tl,$translate, $ionicPopup, 'SEGMENT_3', 'TWHS_ESP_SEG_3',"step5");
  });

  tl.to(segment, 1, zoomOutAndRotate90);
  tl.to(segment, 3, sendBottom);

  tl.call(function() {
    endPopup(tl,$translate, $ionicPopup, $state, $scope, 'END', 'TWHS_END',"step6","step1");
  });

  //hide
  tl.to(segment, 1, hide);
});
