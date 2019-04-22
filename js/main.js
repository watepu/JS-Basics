'use strict';
// 厳密なエラーチェックをしてくれる

{
  const o = {
    a: 1,
    b: 2,
  };

  console.log(Object.keys(o)); //キーの一覧を配列としてとってくる ['a', 'b']
  console.log(Object.values(o)); //値の一覧を配列としてとってくる [1, 2]
  console.log(Object.entries(o)); //全体を配列としてとってくる [['a', 1], ['b', 2]]


}
