'use strict';
// 厳密なエラーチェックをしてくれる

{
  const a = [10, 20];
  const b = [1, 2, ...a];
  console.log(b); //[1, 2, 10, 20]

}
