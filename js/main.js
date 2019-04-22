'use strict';
// 厳密なエラーチェックをしてくれる

{
  const a = [1, 2, 5, 10];

  // それぞれの数を２倍にしたい

  // const b = a.map(item => {
  //   return item * 2;
  // });
  // return１行なので下のように書き換えられる
  const b = a.map(item => item * 2);
  console.log(b);

  // 偶数の要素だけを抜き出したい
  // 偶数の時だけtrueを返す
  const c = a.filter(item => item % 2 === 0);
  console.log(c);

}
