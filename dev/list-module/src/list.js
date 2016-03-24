import listController from './controller'

export default ngModule =>{
  ngModule.directive('userlist', () =>{
    require('./list.scss');
    return{
      restrict: 'E',
      scope: {},
      template: require('./list.html'),
      controllerAs: 'vm',
      controller: listController
    }
  })
}