angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('conter');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  /*用于修改安卓tab居下 --结束*/

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('tab.interest', {
      url: '/interest',
      views: {
        'tab-interest': {
          templateUrl: 'templates/tab-interest.html',
          controller: 'interestCtrl'
        }
      }
    })
    .state('tab.shopcar', {
      url: '/shopcar',
      views: {
        'tab-shopcar': {
          templateUrl: 'templates/tab-shopcar.html',
          controller: 'shopcarCtrl'
        }
      }
    })

  .state('tab.mine', {
    url: '/mine',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine.html',
        controller: 'mineCtrl'
      }
    }
  })

  .state('tab.detail', {
    url: '/detail/:myId',
    cache:'false',
    reload:true,
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-detail.html',
        controller: 'detailCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/home');

});
