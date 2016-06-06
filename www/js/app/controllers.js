angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope) {
      $scope.audiovisual = true;

      $scope.changeAudiovisual = function (key){
        $scope.audiovisual = key;
        console.log($scope.audiovisual);
      }
    })

    .controller('AnimationsCtrl', function() {})

    .controller('ConfigCtrl', function($scope, $translate) {
        $scope.changeLanguage = function (key) {
          $translate.use(key);
        };
    })

    .controller('AboutCtrl', function() {});
