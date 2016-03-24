import angular   from 'angular';
import 'angular-route'
import loginModule  from './login-module'
import listModule from './list-module'

const ngModule = angular.module('app', ['ngRoute']);

loginModule(ngModule);
listModule(ngModule);