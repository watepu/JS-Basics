'use strict';
// 厳密なエラーチェックをしてくれる

{
  class Player{
    constructor(name, score){
      this.name = name;
      this.score = score;
    }
  }

  const watepu = new Player('watepu', 80);
  const neko = new Player('neko', 60);

  console.log(watepu.score); //80
}
