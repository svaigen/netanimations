function initialPopup(tl, $translate, $ionicPopup, $state, $scope, paramTitle, paramTemplate){
  tl.pause();
  $translate([paramTitle, paramTemplate]).then(function(translations) {
    console.log(translations);
    $ionicPopup.show({
      title: translations[paramTitle],
      template: translations[paramTemplate],
      buttons: [
        {
          text: 'Voltar para animações',
          type: 'button-positive',
          onTap: function(){
            tl.seek(0);
            $state.go('app.animations');
          }
        },
        { text: 'Avançar',
          type: 'button-positive',
          onTap: function(){
            tl.resume();
          }
        }
      ]
    });
  });
};

function commonPopup(tl, $translate, $ionicPopup, paramTitle, paramTemplate, paramBack){
  tl.pause();
  $translate([paramTitle, paramTemplate]).then(function(translations) {
    console.log(translations);
    $ionicPopup.show({
      title: translations[paramTitle],
      template: translations[paramTemplate],
      buttons: [
        { text: 'Voltar',
          type: 'button-positive',
          onTap: function(){
            tl.seek(paramBack);
            tl.play();
          }
        },
        { text: 'Avançar',
          type: 'button-positive',
          onTap: function(){
            tl.resume();
          }
        }
      ]
    });
  });
};

function endPopup(tl, $translate, $ionicPopup, $state, $scope, paramTitle, paramTemplate, paramBack,paramRestart){
  tl.pause();
  $translate([paramTitle, paramTemplate]).then(function(translations) {
    console.log(translations);
    $ionicPopup.show({
      title: translations[paramTitle],
      template: translations[paramTemplate],
      buttons: [
        { text: 'Voltar',
          type: 'button-positive',
          onTap: function(){
            tl.seek(paramBack);
            tl.play();
          }
        },
        { text: 'Reiniciar',
          type: 'button-positive',
          onTap: function(){
            tl.seek(paramRestart);
            tl.play();
          }
        },
        {
          text: 'Finalizar',
          type: 'button-positive',
          onTap: function(){
            tl.seek(0);
            $state.go('app.animations');
          }
        },
      ]
    });
  });
};
