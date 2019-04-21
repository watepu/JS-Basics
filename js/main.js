'use strict';
// 厳密なエラーチェックをしてくれる

{
  const a = [1, 5, 10];

  a.unshift(100);
  console.log(a); //[100, 1, 5, 10]

  a.push(200, 300);
  console.log(a);  //[100, 1, 5 ,10, 200, 300]

  a.shift();
  console.log(a);  //[1, 5 , 10, 200, 300]

  a.pop();
  console.log(a);  //[1, 5, 10, 200]
}
