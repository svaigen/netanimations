angular.module('netanimations.controllers', [])

.controller('AppCtrl', function($scope, $state, $translate, $window) {
  $scope.setFocus = function(elem,collapseElem){
    var ariaExpanded = document.getElementById(collapseElem).getAttribute('aria-expanded');
    if(ariaExpanded === "false"){
      document.getElementById(collapseElem).setAttribute('aria-expanded','true');
    }
    document.getElementById(elem).focus();
  }

  $scope.readPreference = function(){
    var preferencesCookie = $window.localStorage['preferences'];
    if(!preferencesCookie){
      $scope.audiovisual = true;
      $scope.lang = "pt-br";
    } else {
      $scope.lang = preferencesCookie.split(",")[0];
      $translate.use(preferencesCookie.split(",")[0]);
      $scope.audiovisual = (preferencesCookie.split(",")[1] === "true")? true : false;
    }
  };

  $scope.changeAudiovisual = function (key){
    $scope.audiovisual = key;
  };

  $scope.redirect = function(page){
    switch (page) {
      case "map":
        $state.go('app.map');
        break;
      case "animations":
        $state.go('app.animations');
        break;
      case "config":
        $state.go('app.config');
        break;
      case "about":
        $state.go('app.about');
        break;
      default:
    }
    $scope.$watch('$viewContentLoaded',function(event){
        document.getElementById(page+"menu").focus();
    });
  };

  $scope.readPreference();
})

.controller('AnimationsCtrl', function($scope) {
  $scope.$watch('$viewContentLoaded',function(event){
      document.getElementById('animationsmenu').focus();
  });
})

.controller('ConfigCtrl', function($scope, $translate, $state, $window) {
  $scope.$watch('$viewContentLoaded',function(event){
    document.getElementById('configmenu').focus();
  });

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

.controller('AboutCtrl', function($scope) {
  $scope.$watch('$viewContentLoaded',function(event){
    document.getElementById('aboutmenu').focus();
  });
})

.controller('MapCtrl', function($scope) {
  $scope.$watch('$viewContentLoaded',function(event){
    document.getElementById('mapmenu').focus();
  });
});
