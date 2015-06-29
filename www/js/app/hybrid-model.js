angular.module('netanimations.hybridmodel', [])

    .controller('HybridModelCtrl', function($scope, $ionicPopup, $translate) {
        TweenLite.defaultEase = Power1.easeInOut;

        $scope.end = false;

        var segment1 = "#segment-1";
        var segment2 = "#segment-2";
		var segment3 = "#segment-3";
		var segment4 = "#segment-4";
		var focus = "#focus";
		var message = "#message";
		var initialPosition = {top: "110px", left: "308px"};
		var pipePosition = {top: "110px", left: "64px"};
		var pipePosition2 = {top: "280px", left: "64px"};
		var routerPosition = {top: "120px", left:"144px"};
		var serverPosition = {top: "298px", left:"144px"};
        var rotate90 = {rotation: 90};
        var rotate0 = {rotation: 0};
        var hide = {opacity: 0};
		var delayHide ={opacity:0, delay: -1};
        var show = {opacity: 1};
		var delayShow = {opacity:1, delay: -1};
        var sendDown = {top: "+=15px"};
		var sendDown2 = {top: "+=31px"};
        var sendRight = {left: "+=41px"};
		var delaySendRight = {left: "+=41px", delay: -1};
        var sendLeft = {left: "-=41px"};
		var delaySendLeft = {left:"-=41px", delay: -1};
		var delaySendDown = {top:"+=15px", delay: -1};
		var delaySendDown2 = {top:"+=31px", delay: -1};
		var insertFadeout = {className: "+=fadeout"};
		var removeFadeout = {className: "-=fadeout"};

        var tl = new TimelineMax();

        $scope.restart = function () {
            tl.seek(0);
            $scope.end = false;
        };
		/*Starts segments and focus*/
		tl.to(message, 0, initialPosition);
		tl.to(message, 0, hide);
        tl.to(segment1, 0, initialPosition);
		tl.to(segment1, 0, hide);
		tl.to(segment2, 0, initialPosition);
		tl.to(segment2, 0, hide);
		tl.to(segment3, 0, initialPosition);
		tl.to(segment3, 0, hide);
		tl.to(segment4, 0, initialPosition);
		tl.to(segment4, 0, hide);
		tl.to(focus,0, hide);

        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'HYBRID_MODEL_PRESENTATION_1']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.HYBRID_MODEL_PRESENTATION_1
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

        tl.call(function() {
            tl.pause();

            $translate(['INFO', 'HYBRID_MODEL_PRESENTATION_2']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.HYBRID_MODEL_PRESENTATION_2
                }).then(function() {
                    tl.resume();
                });
            });
        });

        tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

        tl.call(function() {
            tl.pause();

            $translate(['EXAMPLE', 'HYBRID_MODEL_PRESENTATION_3']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.EXAMPLE,
                    template: translations.HYBRID_MODEL_PRESENTATION_3
                }).then(function() {
                    tl.resume();
                });
            });
        });
		tl.to(focus,1,show);
		tl.to(message,1,delayShow);		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
		
		tl.call(function() {
            tl.pause();

            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_4']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_4
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(message,1,sendDown);
		tl.to(segment1,1,show);		
		tl.to(message,1,sendLeft);
		tl.to(segment1,1,delaySendLeft);
		tl.to(segment2,0,sendLeft);
		tl.to(segment3,0,sendLeft);
		tl.to(segment4,0,sendLeft);
				
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
		tl.call(function() {
            tl.pause();

            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_5']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_5
                }).then(function() {
                    tl.resume();
                });
            });
        });
		tl.to(message,1,sendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(segment2,1,show);
		tl.to(message,1,sendLeft);		
		tl.to(segment1,1,delaySendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment3,0,sendLeft);
		tl.to(segment4,0,sendLeft);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
		tl.call(function() {
            tl.pause();

            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_6']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_6
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(message,1,sendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment3,1,show);
		tl.to(message,1,sendLeft);		
		tl.to(segment1,1,delaySendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment3,1,delaySendLeft);
		tl.to(segment4,0,sendLeft);		
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
		tl.call(function() {
            tl.pause();

            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_7']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_7
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(message,1,sendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment4,1,show);
		tl.to(message,1,sendLeft);		
		tl.to(segment1,1,delaySendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment3,1,delaySendLeft);
		tl.to(segment4,1,delaySendLeft);		
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
		tl.call(function() {
            tl.pause();

            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_8']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_8
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(message,1,sendLeft);		
		tl.to(segment1,1,delaySendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment3,1,delaySendLeft);
		tl.to(segment4,1,delaySendLeft);
		
		/*Segments disappear from layers*/
		tl.to(message,0,insertFadeout);
		tl.to(segment1,0,insertFadeout);
		tl.to(segment2,0,insertFadeout);
		tl.to(segment3,0,insertFadeout);
		tl.to(segment4,0,insertFadeout);
		tl.to(message,1,delayHide);
		tl.to(segment1,1,delayHide);
		tl.to(segment2,1,delayHide);
		tl.to(segment3,1,delayHide);
		tl.to(segment4,1,delayHide);
		tl.to(message,0,removeFadeout);
		tl.to(segment1,0,removeFadeout);
		tl.to(segment2,0,removeFadeout);
		tl.to(segment3,0,removeFadeout);
		tl.to(segment4,0,removeFadeout);
		
		/*Segments appear in the pipe*/
		tl.to(message,0,pipePosition);
		tl.to(segment1,0,pipePosition);
		tl.to(segment2,0,pipePosition);
		tl.to(segment3,0,pipePosition);
		tl.to(segment4,0,pipePosition);
		tl.to(segment4,0,show);
		tl.to(segment3,0,show);
		tl.to(segment2,0,show);
		tl.to(segment1,0,show);
		tl.to(message,0,show);
		tl.to(segment4,1,sendDown);
		tl.to(segment4,1,sendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment4,1,sendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment4,1,sendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment1,1,delaySendDown);		
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['INFO', 'HYBRID_MODEL_PRESENTATION_9']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.HYBRID_MODEL_PRESENTATION_9
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		/*Slide segments in the pipe*/
		tl.to(segment4,1,sendDown2);
		tl.to(segment3,1,delaySendDown2);
		tl.to(segment2,1,delaySendDown2);
		tl.to(segment1,1,delaySendDown2);
		tl.to(message,1,delaySendDown2);
		
		/*Segments disappear from tube*/		
		tl.to(segment4,1,sendDown);
		tl.to(segment4,1,delayHide);
		tl.to(segment3,1,delaySendDown);		
		tl.to(segment2,1,delaySendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(message,1,delaySendDown);
		tl.to(segment3,1,sendDown);
		tl.to(segment3,1,delayHide);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(message,1,delaySendDown);
		tl.to(segment2,1,sendDown);
		tl.to(segment2,1,delayHide);
		tl.to(segment1,1,delaySendDown);
		tl.to(message,1,delaySendDown);
		tl.to(segment1,1,sendDown);
		tl.to(segment1,1,delayHide);
		tl.to(message,1,delaySendDown);
		tl.to(message,1,sendDown);
		tl.to(message,1,delayHide);
		tl.to(focus,1,{top:"+=110px"});
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['EXAMPLE', 'HYBRID_MODEL_PRESENTATION_10']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.EXAMPLE,
                    template: translations.HYBRID_MODEL_PRESENTATION_10
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		/*Segments appear in router's layers*/
		tl.to(message,0,routerPosition);
		tl.to(segment1,0,routerPosition);
		tl.to(segment2,0,routerPosition);
		tl.to(segment3,0,routerPosition);
		tl.to(segment4,0,routerPosition);
		tl.to(message,0,sendDown);
		tl.to(message,0,sendDown);
		tl.to(message,0,sendDown);
		tl.to(message,0,sendDown);
		tl.to(segment1,0,sendDown);
		tl.to(segment1,0,sendDown);
		tl.to(segment1,0,sendDown);
		tl.to(segment2,0,sendDown);
		tl.to(segment2,0,sendDown);
		tl.to(segment3,0,sendDown);
		tl.to(segment4,1,show);
		tl.to(segment3,1,delayShow);
		tl.to(segment2,1,delayShow);
		tl.to(segment1,1,delayShow);
		tl.to(message,1,delayShow);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_11']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_11
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment4,1,sendRight);
		tl.to(segment3,1,delaySendRight);
		tl.to(segment2,1,delaySendRight);
		tl.to(segment1,1,delaySendRight);
		tl.to(message,1,delaySendRight);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_12']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_12
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment4,0,insertFadeout);
		tl.to(segment4,1,hide);
		tl.to(segment4,0,removeFadeout);
		tl.to(segment3,1,sendRight);
		tl.to(segment2,1,delaySendRight);
		tl.to(segment1,1,delaySendRight);
		tl.to(message,1,delaySendRight);

		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_13']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_13
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment3,1,sendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment1,1,delaySendLeft);
		tl.to(message,1,delaySendLeft);		
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_14']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_14
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment4,1,show);
		tl.to(segment4,1,sendLeft);
		tl.to(segment3,1,delaySendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment1,1,delaySendLeft);
		tl.to(message,1,delaySendLeft);		
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['ENCAPSULATION', 'HYBRID_MODEL_PRESENTATION_15']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.ENCAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_15
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment4,1,sendLeft);
		tl.to(segment3,1,delaySendLeft);
		tl.to(segment2,1,delaySendLeft);
		tl.to(segment1,1,delaySendLeft);
		tl.to(message,1,delaySendLeft);		
		
		/*Segments disappear from router's layers*/
		tl.to(segment4,0,insertFadeout);
		tl.to(segment3,0,insertFadeout);
		tl.to(segment2,0,insertFadeout);
		tl.to(segment1,0,insertFadeout);
		tl.to(message,0,insertFadeout);
		
		tl.to(segment4,1,delayHide);
		tl.to(segment3,1,delayHide);
		tl.to(segment2,1,delayHide);
		tl.to(segment1,1,delayHide);
		tl.to(message,1,delayHide);
		
		tl.to(segment4,0,removeFadeout);
		tl.to(segment3,0,removeFadeout);
		tl.to(segment2,0,removeFadeout);
		tl.to(segment1,0,removeFadeout);
		tl.to(message,0,removeFadeout);
		
		tl.to(focus,1,{height: "220px"});
		tl.to(focus,1,{top:"+=180px"});
		
		/*Segments appear in pipe (second piece)*/
		tl.to(message,0,pipePosition2);
		tl.to(segment1,0,pipePosition2);
		tl.to(segment2,0,pipePosition2);
		tl.to(segment3,0,pipePosition2);
		tl.to(segment4,0,pipePosition2);
		tl.to(segment4,0,show);
		tl.to(segment3,0,show);
		tl.to(segment2,0,show);
		tl.to(segment1,0,show);
		tl.to(message,0,show);
		tl.to(segment4,1,sendDown);
		tl.to(segment4,1,sendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment4,1,sendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment4,1,sendDown);
		tl.to(segment3,1,delaySendDown);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment1,1,delaySendDown);
		
		/*Segments slide and disappear in pipe*/
		tl.to(segment4,1,sendDown);
		tl.to(segment4,1,delayHide);
		tl.to(segment3,1,delaySendDown);		
		tl.to(segment2,1,delaySendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(message,1,delaySendDown);
		tl.to(segment3,1,sendDown);
		tl.to(segment3,1,delayHide);
		tl.to(segment2,1,delaySendDown);
		tl.to(segment1,1,delaySendDown);
		tl.to(message,1,delaySendDown);
		tl.to(segment2,1,sendDown);
		tl.to(segment2,1,delayHide);
		tl.to(segment1,1,delaySendDown);
		tl.to(message,1,delaySendDown);
		tl.to(segment1,1,sendDown);
		tl.to(segment1,1,delayHide);
		tl.to(message,1,delaySendDown);
		tl.to(message,1,sendDown);
		tl.to(message,1,delayHide);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['INFO', 'HYBRID_MODEL_PRESENTATION_16']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.INFO,
                    template: translations.HYBRID_MODEL_PRESENTATION_16
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(message,0,serverPosition);
		tl.to(segment1,0,serverPosition);
		tl.to(segment2,0,serverPosition);
		tl.to(segment3,0,serverPosition);
		tl.to(segment4,0,serverPosition);
		tl.to(message,0,sendDown);
		tl.to(message,0,sendDown);
		tl.to(message,0,sendDown);
		tl.to(message,0,sendDown);
		tl.to(segment1,0,sendDown);
		tl.to(segment1,0,sendDown);
		tl.to(segment1,0,sendDown);
		tl.to(segment2,0,sendDown);
		tl.to(segment2,0,sendDown);
		tl.to(segment3,0,sendDown);
		tl.to(segment4,1,show);
		tl.to(segment3,1,delayShow);
		tl.to(segment2,1,delayShow);
		tl.to(segment1,1,delayShow);
		tl.to(message,1,delayShow);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_11']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_11
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment4,1,sendRight);
		tl.to(segment3,1,delaySendRight);
		tl.to(segment2,1,delaySendRight);
		tl.to(segment1,1,delaySendRight);
		tl.to(message,1,delaySendRight);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_12']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_12
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment4,0,insertFadeout);
		tl.to(segment4,1,hide);
		tl.to(segment4,0,removeFadeout);
		tl.to(segment3,1,sendRight);
		tl.to(segment2,1,delaySendRight);
		tl.to(segment1,1,delaySendRight);
		tl.to(message,1,delaySendRight);

		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_17']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_17
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment3,0,insertFadeout);
		tl.to(segment3,1,hide);
		tl.to(segment3,0,removeFadeout);
		tl.to(segment2,1,sendRight);
		tl.to(segment1,1,delaySendRight);
		tl.to(message,1,delaySendRight);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_18']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_18
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment2,0,insertFadeout);
		tl.to(segment2,1,hide);
		tl.to(segment2,0,removeFadeout);
		tl.to(segment1,1,sendRight);
		tl.to(message,1,delaySendRight);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove        
        tl.call(function() {
			tl.pause();
            $translate(['DECAPSULATION', 'HYBRID_MODEL_PRESENTATION_19']).then(function(translations) {
                $ionicPopup.alert({
                    title: translations.DECAPSULATION,
                    template: translations.HYBRID_MODEL_PRESENTATION_19
                }).then(function() {
                    tl.resume();
                });
            });
        });
		
		tl.to(segment1,0,insertFadeout);
		tl.to(segment1,1,hide);
		tl.to(segment1,0,removeFadeout);
		
		tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
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