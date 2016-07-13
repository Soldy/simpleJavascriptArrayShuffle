Array.prototype.shuffle = function (){
    var temp,
    rand,
    round = Math.floor((Math.random() * (this.length*2)) + this.length);
    for (var i =0 ; round> i ; i++){
        rand = Math.floor(Math.random() * this.length);
        temp = this[rand];
        this.splice(rand, 1);
        this.push(temp);
    }
    return this;
}