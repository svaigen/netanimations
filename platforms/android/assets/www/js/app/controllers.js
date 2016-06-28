angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope, $state, $translate,$window) {
      $scope.readPreference = function(){
        var preferencesCookie = $window.localStorage['preferences'];
        if(!preferencesCookie){
          $state.go('app.config');
        } else {
          $scope.language = preferencesCookie.split(",")[0];
          $translate.use(preferencesCookie.split(",")[0]);
          $scope.audiovisual = (preferencesCookie.split(",")[1] === "true")? true : false;
        }
      };

      $scope.audiovisual = true;
      $scope.language = "";

      $scope.readPreference();
    })

    .controller('AnimationsCtrl', function() {})

    .controller('ConfigCtrl', function($scope, $translate, $state, $window) {
        $scope.changeLanguage = function (key) {
          $translate.use(key);
          $scope.language = key;
        };

        $scope.changeAudiovisual = function (key){
          $scope.audiovisual = key;
          console.log($scope.audiovisual);
        }

        $scope.savePreferences = function (){
          var preferencesCookie = $scope.language+","+$scope.audiovisual;
          $window.localStorage['preferences'] = preferencesCookie;
          $state.go('app.animations');
        }
    })

    .controller('AboutCtrl', function() {});
