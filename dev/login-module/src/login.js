import loginController from './controller'

export default ngModule =>{
  ngModule.directive('userlogin', () =>{
    require('./login.scss');
    return{
      restrict: 'E',
      scope: {},
      template: require('./login.html'),
      controllerAs: 'vm',
      controller:loginController
    }
  })
}