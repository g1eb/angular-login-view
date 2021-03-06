'use strict';

/**
 * Login view (general purpose directive)
 */
angular.module('g1b.login-view', []).
directive('loginView', ['$document', function ($document) {
  return {
    restrict: 'A',
    replace: true,
    transclude: 'element',
    templateUrl: './login-view.html',
    scope: {
      user: '=',
      onLogin: '&',
      onClose: '&',
      position: '=',
      placeholder: '=',
    },
    compile: function () {
      return {
        pre: function () {},
        post: function (scope, element) {
          scope.close = function() {
            scope.active = false;
            scope.onClose();
          };
          $document.on('mousedown', function (e) {
            if ( !!scope.active && !element[0].contains(e.target) ) {
              scope.$apply(function () {
                scope.active = false;
                scope.onClose();
              });
            }
          });
          $document.on('keyup', function (e) {
            if ( !!scope.active && e.keyCode === 27 ) {
              scope.$apply(function () {
                scope.active = false;
                scope.onClose();
              });
            }
          });
        }
      };
    }
  };
}]);
