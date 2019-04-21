'use strict';
// 厳密なエラーチェックをしてくれる

{
  const player = {
    name: 'watepu',
    score: 80,
  };

  console.log(player);
  console.log(player.name);
  console.log(player['name']);

  player.score = 100;
  console.log(player);

  player.age = 30;
  console.log(player);

  delete player.age;
  console.log(player);
}
