function playAudio(audio,source){
  audio.setAttribute('src',source);
  audio.play();
}

function cleanContentInfo(){
  document.getElementById('content-title').innerHTML = "";
  document.getElementById('content-text').innerHTML = "";
  document.getElementById('content-buttons').innerHTML = "";
}

function initialPopup(tl, $translate, $ionicPopup, $state, $scope, $compile, paramTitle, paramTemplate){
  tl.pause();
  if($scope.audiovisual){
    document.getElementById('content-title').innerHTML = $translate.instant('INFO');
    document.getElementById('content-text').innerHTML = $translate.instant(paramTitle)+":"+$translate.instant(paramTemplate);
    document.getElementById('content-buttons').innerHTML = "<a role=\"button\" ng-click=\"accessibilityGo('next')\" href=\"\">"
                               +$translate.instant('NEXT')+"</a>"
                               +"<a role=\"button\" ng-click=\"accessibilityGo('exit','app.animations')\" href=\"\">"
                               +$translate.instant('BACK_ANIMATIONS')+"</a>";
    $compile(document.getElementById('content-buttons'))($scope);
    $scope.$watch('$viewContentLoaded',function(event){
        document.getElementById('content-title').focus();
    });
  }else{
    $ionicPopup.show({
      title: $translate.instant(paramTitle),
      template: $translate.instant(paramTemplate),
      buttons: [
        {
          text: $translate.instant('BACK_ANIMATIONS'),
          type: 'button-positive',
          onTap: function(){
            tl.seek(0);
            $state.go('app.animations');
          }
        },
        { text: $translate.instant('NEXT'),
          type: 'button-positive',
          onTap: function(){
          tl.resume();
          }
        }
      ]
    });
  }
};

function commonPopup(tl, $scope, $compile, $translate, $ionicPopup, paramTitle, paramTemplate, paramBack){
  tl.pause(); //interrupção do fluxo do objeto de animação
  if($scope.audiovisual){
    document.getElementById('content-title').innerHTML = $translate.instant('INFO');
    document.getElementById('content-text').innerHTML = $translate.instant(paramTitle)+":"+$translate.instant(paramTemplate);
    document.getElementById('content-buttons').innerHTML = "<a role=\"button\" ng-click=\"accessibilityGo('next')\" href=\"\">"
                               +$translate.instant('NEXT')+"</a>"
                               +"<a role=\"button\" ng-click=\"accessibilityGo('back','"+paramBack+"')\" href=\"\">"
                               +$translate.instant('BACK')+"</a>";
    $compile(document.getElementById('content-buttons'))($scope);
    $scope.$watch('$viewContentLoaded',function(event){
        document.getElementById('content-title').focus();
    });
  }else{
    $translate([paramTitle, paramTemplate]).then(function(translations) {
      $ionicPopup.show({ //criação da popup com objeto construtor
        title: translations[paramTitle], //titulo
        template: translations[paramTemplate], //descricao
        buttons: [
          { text: $translate.instant('BACK'), //especificacao do backButton
            type: 'button-positive',
            onTap: function(){
              tl.seek(paramBack); //checkpoint de retrocesso
              tl.play();
            }
          },
          { text: $translate.instant('NEXT'), //especificacao do nextButton
            type: 'button-positive',
            onTap: function(){
              tl.resume(); //continuacao do fluxo de execução
            }
          }
        ]
      });
    });
  }
};

function endPopup(tl, $translate, $ionicPopup, $state, $scope, $compile, paramTitle, paramTemplate, paramBack,paramRestart){
  tl.pause();
  if($scope.audiovisual){
    document.getElementById('content-title').innerHTML = $translate.instant('INFO');
    document.getElementById('content-text').innerHTML = $translate.instant(paramTitle)+":"+$translate.instant(paramTemplate);
    document.getElementById('content-buttons').innerHTML = "<a role=\"button\" ng-click=\"accessibilityGo('exit')\" href=\"\">"
                               +$translate.instant('FINISH')+"</a>"
                               +"<a role=\"button\" ng-click=\"accessibilityGo('back','"+paramBack+"')\" href=\"\">"
                               +$translate.instant('BACK')+"</a>"
                               +"<a role=\"button\" ng-click=\"accessibilityGo('restart','"+paramRestart+"')\" href=\"\">"
                               +$translate.instant('RESTART')+"</a>";
    $compile(document.getElementById('content-buttons'))($scope);
    $scope.$watch('$viewContentLoaded',function(event){
        document.getElementById('content-title').focus();
    });
  }else{
    $ionicPopup.show({
      title: $translate.instant(paramTitle),
      template: $translate.instant(paramTemplate),
      buttons: [
        { text: $translate.instant('BACK'),
          type: 'button-positive',
          onTap: function(){
            tl.seek(paramBack);
            tl.play();
          }
        },
        { text: $translate.instant('RESTART'),
          type: 'button-positive',
          onTap: function(){
            tl.seek(paramRestart);
            tl.play();
          }
        },
        { text: $translate.instant('FINISH'),
          type: 'button-positive',
          onTap: function(){
            tl.seek(0);
            $state.go('app.animations');
          }
        },
      ]
    });
  }
};
