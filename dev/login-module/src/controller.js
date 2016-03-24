// User Login Controller
export default function(){
  const vm = this;

  vm.msg = `Login or something...`;
  vm.userData = {};

  vm.newUser = function(email, pass){
    vm.userData.email = email;
    vm.userData.pass = pass
  };
}