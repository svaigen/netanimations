angular.module('netanimations.threewayhandshake', [])

    .controller('ThreeWayHandshakeCtrl', function($scope, $ionicPopup, $translate) {
        $scope.end = false;

        var tl = new TimelineLite();

        $scope.restart = function () {
            tl.seek(0);
            $scope.end = false;
        };

        TweenLite.defaultEase = Power1.easeInOut;

        var segment = '.segment';
		var segmentInitialSize = window.innerHeight * 0.05;
		var zoomInScale = window.innerHeight * 0.4;
		var zoomPipeScale = window.innerHeight * 0.1;
		var bottom = window.innerHeight - (window.innerHeight * 0.3);
		var top = window.innerHeight - (window.innerHeight * 0.9);
        var zoomIn = {width: zoomInScale};
        var zoomOutAndRotate90 = {width: zoomPipeScale, rotation: 90};
        var rotate0 = {rotation: 0};
        var hide = {className:"ng-hide"};
        var show = {className:"ng-show"};
        var sendBottom = {y: bottom};
        var sendTop = {y: top};

        //initial position
		tl.to(segment, 0, {y:top});
        tl.to(segment, 0, {width:segmentInitialSize});

        tl.call(function() {
            tl.pause();

            $translate(['STEP_1', 'TWHS_STEP_1']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.STEP_1,
                    template: translations.TWHS_STEP_1
                }).then(function(result) {
                    tl.resume();
                });
            });
        });

        tl.to(segment, 1, show);
        tl.to(segment, 2, zoomIn);

        tl.call(function() {
            tl.pause();

            $translate(['SEGMENT_1']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.SEGMENT_1,
                    template: "Porta origem: TCP 1026<br/>"+
                    "Porta destino: TCP 524<br/>"+
                    "Nº de sequência: SEQ=0<br/>"+
                    "Tam. da janela: WIN=8192bytes<br/>"+
                    "Flag SYN: SYN=1<br/>"+
                    "Flag ACK: ACK=0<br/>"
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment, 1, zoomOutAndRotate90);
        tl.to(segment, 3, sendBottom);
        tl.to(segment, 0, hide);

        tl.call(function() {
            tl.pause();

            $translate(['STEP_2', 'TWHS_STEP_2']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.STEP_2,
                    template: translations.TWHS_STEP_2
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment, 0, rotate0);
        tl.to(segment, 1, show);
        tl.to(segment, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Segundo segmento",
                template: "Porta origem: TCP 524<br/>"+
                    "Porta destino: TCP 1026<br/>"+
                    "Nº de sequência: SEQ=0<br/>"+
                    "Tam. da janela: WIN=32768bytes<br/>"+
                    "Flag SYN: SYN=1<br/>"+
                    "Flag ACK: ACK=1<br/>"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(segment, 1, zoomOutAndRotate90);
        tl.to(segment, 3, sendTop);
        tl.to(segment, 0, hide);

        tl.call(function() {
            tl.pause();

            $translate(['STEP_3', 'TWHS_STEP_3']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.STEP_3,
                    template: translations.TWHS_STEP_3
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment, 0, rotate0);
        tl.to(segment, 0, show);
        tl.to(segment, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Terceiro segmento",
                template: "Porta origem: TCP 524<br/>"+
                    "Porta destino: TCP 1026<br/>"+
                    "Nº de sequência: SEQ=0<br/>"+
                    "Tam. da janela: WIN=32768bytes<br/>"+
                    "Flag SYN: SYN=0<br/>"+
                    "Flag ACK: ACK=1<br/>"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(segment, 1, zoomOutAndRotate90);
        tl.to(segment, 3, sendBottom);

        tl.call(function() {
            $translate(['END', 'TWHS_END']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.END,
                    template: translations.TWHS_END
                }).then(function(result) {
                    $scope.end = true;
                });
            });
        });

        //hide
        tl.to(segment, 1, hide);
		
    });