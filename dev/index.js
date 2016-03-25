import angular      from 'angular';
import listModule   from './list-module'
import loginModule  from './login-module'
import commentModule  from './comment-module'

const ngModule = angular.module('app', []);

listModule(ngModule);
loginModule(ngModule);
//commentModule(ngModule);