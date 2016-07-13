/*!
 * shuffle v0.0.1
 * Released under the GPL 3.0 license
 *
 * Date: 2016-07-13
 */


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