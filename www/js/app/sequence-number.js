angular.module('netanimations.sequencenumber', [])

    .controller('SequenceNumberCtrl', function($scope, $ionicPopup, $translate) {
        TweenLite.defaultEase = Power1.easeInOut;

        $scope.end = false;

        var segment1 = ".segment-01";
        var segment2 = ".segment-02";
        var zoomIn = {width: 300, left:"50%", top:"50%"};
        var zoomOutAndRotate90 = {width: 40, rotation: 90};
        var rotate0 = {rotation: 0};
        var hide = {className:"ng-hide"};
        var show = {className:"ng-show"};
        var sendBottom = {y: 420};
        var sendTop = {y: 10};

        var tl = new TimelineMax();
        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'SEQUENCE_NUMBER_PRESENTATION_1']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.SEQUENCE_NUMBER_PRESENTATION_1
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.add(segment1, 0, {width: 50}); //dummy step - do not remove

        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'SEQUENCE_NUMBER_PRESENTATION_2']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.SEQUENCE_NUMBER_PRESENTATION_2
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment1, 0.1, {width: 50}); //dummy step - do not remove

        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'SEQUENCE_NUMBER_PRESENTATION_3']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.SEQUENCE_NUMBER_PRESENTATION_3
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment1, 0.1, {width: 50}); //dummy step - do not remove

        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'SEQUENCE_NUMBER_PRESENTATION_4']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.SEQUENCE_NUMBER_PRESENTATION_4
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment1, 0.1, {width: 50}); //dummy step - do not remove

        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'SEQUENCE_NUMBER_PRESENTATION_5']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.SEQUENCE_NUMBER_PRESENTATION_5
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to(segment1, 1, sendTop);
        tl.to(segment1, 1, show);
        tl.to(segment1, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: 'Primeiro segmento',
                template: "Número de sequência: 0 <br/>"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(segment1, 1, zoomOutAndRotate90);
        tl.to(segment1, 3, sendBottom);
        tl.to(segment1, 0, hide);

        tl.call(function() {
           tl.pause();

            $translate(['INFO', 'SEQUENCE_NUMBER_PRESENTATION_6']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.SEQUENCE_NUMBER_PRESENTATION_6
                }).then(function() {
                    tl.resume();
                });
            });
        });

        //initial position of segment 2
        tl.to(segment2, 0, sendBottom);
        tl.to(segment2, 1, show);
        tl.to(segment2, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Segmento",
               template: "Número de sequência: 0<br>"+
                   "Número de reconhecimento: 1000"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(segment2, 1, zoomOutAndRotate90);
        tl.to(segment2, 3, sendTop);
        tl.to(segment2, 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                //TODO internacionalizar essa mensagem
                template: 'Ao receber o segmento com o número de reconhecimento 1000, o host A encaminha ' +
                'os bytes de 1000 a 1999 ao host B. O host A também solicita o próximo segmento ao host B, ' +
                'informando o número 536 no campo número de reconhecimento.'
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(segment2, 0, rotate0);
        tl.to(segment2, 0, show);
        tl.to(segment2, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Segmento",
                template: "Número de sequência: 1000<br>"+
                    "Número de reconhecimento: 536"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(segment2, 1, zoomOutAndRotate90);
        tl.to(segment2, 3, sendBottom);
        tl.to(segment2, 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                //TODO internacionalizar essa mensagem
                template: 'Vamos considerar que logo em seguida o host A encaminha o próximo segmento ao host B, ' +
                'com número de sequência 2000. Como o host A ainda não recebeu o segmento de sequência 536, ' +
                'ele informa novamente este valor no campo número de reconhecimento.'
            }).then(function () {
                tl.resume();
            });
        });

        //origem mostra outro pacote
        tl.to(segment2, 0, rotate0);
        tl.to(segment2, 0, sendTop);
        tl.to(segment2, 0, show);
        tl.to(segment2, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Segmento",
                template: "Número de sequência: 2000<br>"+
                    "Número de reconhecimento: 536"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(segment2, 1, zoomOutAndRotate90);
        tl.to(segment2, 3, sendBottom);
        tl.to(segment2, 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                //TODO internacionalizar essa mensagem
                template: 'O host B por sua vez envia o segmento com número de sequência 536 ao host A.'+
                    'Como o host B recebeu os segmentos de sequência 1000 e 2000 sucessivamente, ele envia no ' +
                'campo número de reconhecimento o valor 3000, que é o próximo segmento a ser enviado pelo host A.'
            }).then(function () {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to(segment1, 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                //TODO internacionalizar essa mensagem
                template: 'Dizemos que o TCP provê reconhecimentos cumulativos, pois ele reconhece todos os ' +
                'bytes até o primeiro byte que está faltando na cadeia.'
            }).then(function () {
                tl.resume();
            });
        });

        //origin shows another segment
        tl.to(segment2, 0, sendTop);
        tl.to(segment2, 0, rotate0);
        tl.to(segment2, 0, show);
        tl.to(segment2, 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Segmento",
                template: "Número de sequência: 536<br>"+
                    "Número de reconhecimento: 3000"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(segment2, 1, zoomOutAndRotate90);
        tl.to(segment2, 3, sendBottom);
        tl.to(segment2, 0, hide);

        //end
        tl.call(function() {
            $translate(['END', 'ANIMATION_END']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.END,
                    template: translations.ANIMATION_END
                });
            });
        });

        $scope.end = true;
    });