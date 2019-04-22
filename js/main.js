'use strict';
// 厳密なエラーチェックをしてくれる

{
  const a = [1, 5, 10];
// アロー関数を使用
  a.forEach(item => {
    console.log(item);
  });
  //1 5 10が続けて出力

  a.forEach((item, index) => {
    console.log(`${index}:${item}`);
  });
  //0:1 1:5 2:10が続けて出力
}
