angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope, $http, $state) {

      document.addEventListener("deviceready", $state.go('app.config'), $state.go('app.about'));

      $scope.readPreference = function(){
        /*$http.get('files/preferences.data')
          .success(function(data, status, headers, config) {
              if(!data){
                $state.go('app.config');
              }
              if (data && status === 200) {
                  //$scope.users = data.split(',');
                  console.log("ok");
              }
          });*/
      }
      $scope.audiovisual = true;
      $scope.language = "";

      $scope.readPreference();
    })

    .controller('AnimationsCtrl', function() {})

    .controller('ConfigCtrl', function($scope, $translate, $state) {
        $scope.changeLanguage = function (key) {
          $translate.use(key);
          $scope.language = key;
        };

        $scope.changeAudiovisual = function (key){
          $scope.audiovisual = key;
          console.log($scope.audiovisual);
        }

        $scope.savePreferences = function (){
          var preferencesToWrite = $scope.language+","+$scope.audiovisual;

          $state.go('app.animations');
        }
    })

    .controller('AboutCtrl', function() {});
