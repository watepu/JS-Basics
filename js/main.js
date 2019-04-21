'use strict';
// 厳密なエラーチェックをしてくれる

{
  class Player{
    constructor(name, score){
      this.name = name;
      this.score = score;
    }
    showInfo(){
      console.log(`name:${this.name} score:${this.score}`)
    }
  }

  class SoccerPlayer extends Player{
    constructor(name, score, number){
      super(name, score);
      this.number = number;
    }
    kick(){
      console.log('Goal!');
    }
  }

  const watepu = new SoccerPlayer('watepu', 80, 5);

  watepu.kick(); //Goal!
  console.log(watepu.number); //5
  watepu.showInfo(); //name:watepu score:80
}
