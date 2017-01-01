'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('experimentApp.login', [])
  .controller('LoginController', LoginController)
  .name;
