// User List Controller
export default function($http){
  const vm = this;

  vm.msg = 'List of people and their passwords';

  $http.get('http://localhost:3000/test').then(function(res){
    vm.userData = res.data;
    console.log(
    );
  });
}