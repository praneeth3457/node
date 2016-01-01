/*PROTOTYPE is used to add properties and functions to the object*/

var user= function(){
    this.name="";
    this.life=100;
    this.givelife= function targetUser(targetPlayer){
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name +" gave life to "+ targetPlayer.name);
    }
}

var rintu=new user();
var chintu=new user();
rintu.name="Rintu";
chintu.name="Chintu";

rintu.givelife(chintu);
console.log("Rintu's life :"+rintu.life);
console.log("Chintu's life :"+chintu.life);

user.prototype.uppercut= function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    this.life += 3;
    console.log(this.name +" uppercutted "+ targetPlayer.name);
};

chintu.uppercut(rintu);
console.log("Rintu's life :"+rintu.life);
console.log("Chintu's life :"+chintu.life);