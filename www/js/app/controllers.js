angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope, $state, $translate, $window) {

      $scope.readPreference = function(){
        var preferencesCookie = $window.localStorage['preferences'];
        if(!preferencesCookie){
          $scope.audiovisual = true;
          $scope.lang = "pt-br";
          $state.go('app.config');
        } else {
          $scope.lang = preferencesCookie.split(",")[0].value;
          $translate.use(preferencesCookie.split(",")[0]);
          $scope.audiovisual = (preferencesCookie.split(",")[1] === "true")? true : false;
        }
      };

      $scope.changeAudiovisual = function (key){
        $scope.audiovisual = key;
      }

      $scope.readPreference();
    })

    .controller('AnimationsCtrl', function() {})

    .controller('ConfigCtrl', function($scope, $translate, $state, $window) {
        $scope.selectLang = $translate.use();

        $scope.changeLanguage = function (key) {
          $translate.use(key);
          $scope.lang = key;
        };

        $scope.savePreferences = function (){
          var preferencesCookie = $scope.lang+","+$scope.audiovisual;
          $window.localStorage['preferences'] = preferencesCookie;
          $state.go('app.animations');
        }
    })

    .controller('AboutCtrl', function() {});
