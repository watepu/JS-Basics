'use strict';
// 厳密なエラーチェックをしてくれる

{
  const a = [1, 5, 10];

  a.splice(2, 0, 6, 7);  //indexが2の前、削除するのは0、追加するのは6、7
  console.log(a);  //[1, 5, 6, 7, 10]

  a.splice(1, 2);  //indexが1のところから2つ削除
  console.log(a);  //[1, 7, 10]
}
