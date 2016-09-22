'use strict';

/**
 * Login view (general purpose login view)
 */
angular.module('g1b.login-view', []).
directive('loginView', ['$document', function ($document) {
  return {
    restrict: 'A',
    scope: {
      user: '=',
      onLogin: '&',
      onClose: '&',
    },
    templateUrl: './login-view.html',
    compile: function () {
      return {
        pre: function preLink() {},
        post: function postLink(scope, element) {
        }
      };
    }
  };
}]);
