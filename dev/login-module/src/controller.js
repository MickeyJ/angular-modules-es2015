// User Login Controller
export default function(){
  const vm = this;

  vm.msg = `Give me your password...`;
  vm.userData = {};

  vm.handleLoginMsg = (name) =>{
    vm.loginMessage =  `Thanks ${name}!`;
    console.log(vm.user);
  };
}