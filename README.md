# Login view UI element

This directive is designed to provide a general purpose login view.

Desgined to be as simple as possible in order to afford intuitive interactions.

Converted into an angular directive for your convenience :)

## Demo
Click <a href="https://rawgit.com/g1eb/angular-login-view/master/" target="_blank">here</a> for a live demo.

## Installation

1) Install 'angular-login-view' with bower

```
bower install angular-login-view
```

2) Add 'g1b.login-view' module to your app config


```javascript
angular.module('myApp', [
  'g1b.login-view',
  ......
])
```

3) Use the directive as attribute on any element in a view

```html
<a login-view user="me" on-login="print(me)">Login</a>
```

### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| user | JSON object representing a user with username and password | none | no |
| on-login | Handler function that is fired on submit of login form | none | no |
| on-close | Handler function that is fired on close/hide of login form | none | no |

## Dependencies

* [AngularJS](https://angularjs.org/)
