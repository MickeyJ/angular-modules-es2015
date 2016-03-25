import angular      from 'angular';
import listModule   from './list-module'
import loginModule  from './login-module'

const ngModule = angular.module('app', []);

listModule(ngModule);
loginModule(ngModule);
