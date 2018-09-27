module.exports = function check(str, bracketsConfig) {
  // your solution
  let all = bracketsConfig.join(' ').replace(/,/g,'');
  let arr = all.split(' ');
  
  let a = str.length;

  while(a>0){
    for(let i=0; i<arr.length; i++){
      if(str.indexOf(arr[i])>=0){
        str=str.replace(arr[i],'');
        break;
      }
    }
  a-=2;
  }
  if(str.length===0){
    return true;
  }
  return false;
}