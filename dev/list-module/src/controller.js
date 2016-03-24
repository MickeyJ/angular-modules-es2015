// User List Controller
export default function($http){
  const vm = this;

  vm.msg = 'List of other people and their passwords';

  $http.get('http://localhost:3000/user-list').then((res) =>{
    vm.userData = res.data;

  });
}