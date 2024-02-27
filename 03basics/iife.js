// to remove global variable polution
(function iife1(){
    console.log("iife example1 ");
})();

((name)=>{
    console.log(`hello this me ${name}`);
})('kabi')