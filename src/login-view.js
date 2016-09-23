'use strict';

/**
 * Login view (general purpose directive)
 */
angular.module('g1b.login-view', []).
directive('loginView', ['$document', function ($document) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './login-view.html',
    scope: {
      user: '=',
      onLogin: '&',
      onClose: '&',
      placeholder: '=',
    },
    compile: function () {
      return {
        pre: function () {},
        post: function (scope, element) {
        }
      };
    }
  };
}]);
