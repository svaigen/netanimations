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
  var patternHeight = 595;
  var patternWidth = 422;
  var realHeight = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var aspectRatioHeight = realHeight/patternHeight;
  var segmentInitialSize = 50 * aspectRatioHeight;
  var zoomInScale = 200 * aspectRatioHeight;
  var zoomPipeScale = 60 * aspectRatioHeight;
  var bottom = 380 * aspectRatioHeight;
  var top = 60 * aspectRatioHeight;
  var zoomIn = {width: zoomInScale};
  var zoomOutAndRotate90 = {width: zoomPipeScale, rotation: 90};
  var rotate0 = {rotation: 0};
  var hide = {className:"ng-hide"};
  var show = {className:"ng-show"};
  var sendBottom = {y: bottom};
  var sendTop = {y: top};

  //initial position
  tl.set(segment, {y:top}).set(segment, {width:segmentInitialSize});

  tl.add("step1");
  tl.call(function() {
    tl.pause();

    $translate(['STEP_1', 'TWHS_STEP_1']).then(function(translations) {
      $ionicPopup.show({
        title: translations.STEP_1,
        template: translations.TWHS_STEP_1,
        buttons: [
          { text: 'Avançar',
            type: 'button-positive',
            onTap: function(){tl.resume();}
          }
        ]
      });
    });
  });
  tl.to(segment, 1, show);
  tl.to(segment, 2, zoomIn);

  tl.add("step2");
  tl.call(function() {
    tl.pause();

    $translate(['SEGMENT_1']).then(function(translations) {
      $ionicPopup.show({
        title: translations.SEGMENT_1,
        template: "Porta origem: TCP 1026<br/>"+
        "Porta destino: TCP 524<br/>"+
        "Nº de sequência: SEQ=0<br/>"+
        "Tam. da janela: WIN=8192bytes<br/>"+
        "Flag SYN: SYN=1<br/>"+
        "Flag ACK: ACK=0<br/>",
        buttons: [
          { text: 'Voltar',
            type: 'button-positive',
            onTap: function(){tl.seek("step1"); tl.play();}
          },
          { text: 'Avançar',
            type: 'button-positive',
            onTap: function(){tl.resume();}
          }
        ]
      });
    });
  });

  tl.to(segment, 1, zoomOutAndRotate90);
  tl.to(segment, 3, sendBottom);
  tl.to(segment, 0, hide);

  tl.add("step3");
  tl.call(function() {
    tl.pause();

    $translate(['STEP_2', 'TWHS_STEP_2']).then(function(translations) {
      $ionicPopup.show({
        title: translations.STEP_2,
        template: translations.TWHS_STEP_2,
        buttons: [
          { text: 'Voltar',
            type: 'button-positive',
            onTap: function(){tl.seek("step2"); tl.play();}
          },
          { text: 'Avançar',
            type: 'button-positive',
            onTap: function(){tl.resume();}
          }
        ]
      });
    });
  });

  tl.to(segment, 0, rotate0);
  tl.to(segment, 1, show);
  tl.to(segment, 1, zoomIn);

  tl.add("step4");
  tl.call(function() {
    tl.pause();
    $ionicPopup.show({
      title: "Segundo segmento",
      template: "Porta origem: TCP 524<br/>"+
      "Porta destino: TCP 1026<br/>"+
      "Nº de sequência: SEQ=0<br/>"+
      "Tam. da janela: WIN=32768bytes<br/>"+
      "Flag SYN: SYN=1<br/>"+
      "Flag ACK: ACK=1<br/>",
      buttons: [
        { text: 'Voltar',
          type: 'button-positive',
          onTap: function(){tl.seek("step3"); tl.play();}
        },
        { text: 'Avançar',
          type: 'button-positive',
          onTap: function(){tl.resume();}
        }
      ]
    });
  });

  tl.to(segment, 1, zoomOutAndRotate90);
  tl.to(segment, 3, sendTop);
  tl.to(segment, 0, hide);

  tl.add("step5")
  tl.call(function() {
    tl.pause();

    $translate(['STEP_3', 'TWHS_STEP_3']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.STEP_3,
        template: translations.TWHS_STEP_3,
        buttons: [
          { text: 'Voltar',
            type: 'button-positive',
            onTap: function(){tl.seek("step4"); tl.play();}
          },
          { text: 'Avançar',
            type: 'button-positive',
            onTap: function(){tl.resume();}
          }
        ]
      });
    });
  });

  tl.to(segment, 0, rotate0);
  tl.to(segment, 0, show);
  tl.to(segment, 1, zoomIn);

  tl.add("step6");
  tl.call(function() {
    tl.pause();
    $ionicPopup.alert({
      title: "Terceiro segmento",
      template: "Porta origem: TCP 524<br/>"+
      "Porta destino: TCP 1026<br/>"+
      "Nº de sequência: SEQ=0<br/>"+
      "Tam. da janela: WIN=32768bytes<br/>"+
      "Flag SYN: SYN=0<br/>"+
      "Flag ACK: ACK=1<br/>",
      buttons: [
        { text: 'Voltar',
          type: 'button-positive',
          onTap: function(){tl.seek("step5"); tl.play();}
        },
        { text: 'Avançar',
          type: 'button-positive',
          onTap: function(){tl.resume();}
        }
      ]
    });
  });

  tl.to(segment, 1, zoomOutAndRotate90);
  tl.to(segment, 3, sendBottom);

  tl.call(function() {
    $translate(['END', 'TWHS_END']).then(function(translations) {
      $ionicPopup.show({
        title: translations.END,
        template: translations.TWHS_END,
        buttons: [
          { text: 'Voltar',
            type: 'button-positive',
            onTap: function(){tl.seek("step6"); tl.play();}
          },
          { text: 'Reiniciar',
            type: 'button-positive',
            onTap: function(){tl.seek("step1"); tl.play();}
          },
          {
            text: 'Finalizar',
            type: 'button-positive',
            /*onTap:, redirecionar para menu de animacoes*/
          }
        ]
      });
    });
  });

  //hide
  tl.to(segment, 1, hide);

});
