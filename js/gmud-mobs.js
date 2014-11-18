var mob_name = [
    'Cat',
    'Dog',
    'Ghost',
    'Zombie',
    'Sock',
    'pair of Underpants'
];

var mob_stance = [
    'angry',
    'spooky',
    'frightened',
    'happy',
    'confused',
    'smart'
];

function Mob(){
    //this.name;
    //this.stance;
    this.rand = function(){
        return Math.round( (Math.random()*10+1) / 2 );
    }(); // 1-5
}

Mob.prototype = {
    name : function(){
        return mob_name[this.rand];
    },
    stance : function(){
        return mob_stance[this.rand];
    }
}


