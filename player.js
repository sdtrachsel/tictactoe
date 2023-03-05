class Player {
  constructor(player) {
    this.id = player.id;
    this.token = player.token ;
    this.altText= player.altText;
    this.wins = 0;
  }

  increaseWins(){
    this.wins++;
  }

}