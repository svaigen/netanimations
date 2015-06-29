angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function() {})

    .controller('AnimationsCtrl', function() {})

    .controller('ConfigCtrl', function($scope, $translate) {

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

    })

    .controller('AboutCtrl', function() {});
