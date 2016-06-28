angular.module('netanimations.controllers', [])

    .controller('AppCtrl', ['$cookieStore','$scope','$state', '$translate', function($cookieStore, $scope, $state, $translate) {
      $scope.readPreference = function(){
        var preferencesCookie = $cookieStore.get("preferences");
        if(!preferencesCookie){
          $state.go('app.config');
        } else {
          $scope.language = preferencesCookie.split(",")[0];
          console.log($scope.language);
          $translate.use(preferencesCookie.split(",")[0]);
          $scope.audiovisual = (preferencesCookie.split(",")[1] === "true")? true : false;
        }
      };

      $scope.audiovisual = true;
      $scope.language = "";

      $scope.readPreference();
    }])

    .controller('AnimationsCtrl', function() {})

    .controller('ConfigCtrl', ['$cookieStore','$scope','$translate','$state',function($cookieStore, $scope, $translate, $state) {
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
          $cookieStore.put('preferences',preferencesCookie);
          $state.go('app.animations');
        }
    }])

    .controller('AboutCtrl', function() {});
