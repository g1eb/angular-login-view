"use strict";angular.module("g1b.login-view",[]).directive("loginView",["$document",function(n){return{restrict:"A",replace:!0,transclude:"element",template:'<div class="login-view"><div class="login-view--toggle" ng-click="active = !active" ng-transclude></div><div class="login-view--container" ng-show="!!active" ng-class="!!position ? position : \'bottom\'"><form ng-submit="onLogin(); close()"><div class="login-input--username" ng-class="{\'active\': !!user.username}"><input id="login-input-username" type="text" autocomplete="off" ng-model="user.username"> <label for="login-input-username">Username</label></div><div class="login-input--password" ng-class="{\'active\': !!user.password}"><input id="login-input-password" type="password" autocomplete="off" ng-model="user.password"> <label for="login-input-password">Password</label></div><button type="submit" class="login--btn" ng-if="!!user.username && !!user.password"><span ng-bind="placeholder || \'Log In\'"></span></button></form></div></div>',scope:{user:"=",onLogin:"&",onClose:"&",position:"=",placeholder:"="},compile:function(){return{pre:function(){},post:function(e,o){e.close=function(){e.active=!1,e.onClose()},n.on("mousedown",function(n){e.active&&!o[0].contains(n.target)&&e.$apply(function(){e.active=!1,e.onClose()})}),n.on("keyup",function(n){e.active&&27===n.keyCode&&e.$apply(function(){e.active=!1,e.onClose()})})}}}}}]);