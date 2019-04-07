console.log('zelda')


function gameboard() {
$('#container').append('<div class="gameboard"></div>');
for(let y = 11; y > -1; y--){
    $('.gameboard').append(`<div class='row${y}'></div>`)
    for(let x = 0; x < 16; x++){
        $(`.row${y}`).append(`<div class="game-square" x="${x}" y="${y}"></div>`)
    };
 //	$('.game-square[x=7][y=9]').addClass('door door2');
 	$('.game-square[x=7][y=10]').addClass('door door2');
// 	$('.game-square[x=2][y=6]').addClass('door door0');
 	$('.game-square[x=1][y=6]').addClass('door door0');
 //	$('.game-square[x=13][y=6]').addClass('door door1');
 	$('.game-square[x=14][y=6]').addClass('door door1');

};
};
gameboard();
class characters {
	constructor(health, attack){
		this.health = health;
		this.attack = attack;
	}
	health() {
		if(this.health > 0){
			this.health--;
		}
	}
	attack() {
		if(this.attack > 0){
		}
	}
}

const link = new characters(3, 3);
const bat = {
	x: 5,
	y: 8,
	render() {
		// $('.bat').addClass('enemy');
		$('.bat').removeClass('bat');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bat');

	}
}
const bat2 = {
	x: 10,
	y: 7,
	render() {
		$('.bat2').removeClass('bat2');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bat');

	}
}
bat.render();
bat2.render();

const left = 37;
const right = 39;
const up = 38;
const down = 40;
const spacebar = 32;
let lastDir = 40;

const hero = {
	x: 7,
	y: 2,
	render() {
		$('.hero').removeClass('hero');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('hero');
		// if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
		// 	$('.gameboard').css('background-image','url(https://i.imgur.com/GUtC5FT.png)');
		// 	$('.hero').removeClass('hero');
		// 	$(`.game-square[x=14][y=6]`).addClass('hero');

		// };
		if(	$(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('bat')) {
			link.health--;
			let hurt = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Link_Hurt.wav"); 
			hurt.play();


		};
		if(link.health === 2){
			$('#heart3').attr({style: "content:url(https://i.imgur.com/QDXta1k.png" })
		};
		if(link.health === 1){
			$('#heart2').attr({style: "content:url(https://i.imgur.com/QDXta1k.png" })

		};
		if(link.health === 0){
			let dead = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Link_Dying.wav");
			dead.play();
			$('#heart1').attr({style: "content:url(https://i.imgur.com/QDXta1k.png" });
       		// $(".hero").attr({style: "content:url(https://i.imgur.com/abBuvjQ.png)" });			












			setTimeout(function (){
				$('#mainChar').attr({style: "content:url(https://66.media.tumblr.com/24fd4082b31df8b1ded26c2ae6417019/tumblr_mgdycq3WwS1r3smugo1_500.gif)" }).fadeIn().delay(2000).fadeOut();			
				let fairy = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Get_Fairy.wav");
				fairy.play();

			}, 1500);
			setTimeout(function (){
				// $('#mainChar').attr({style: "content:url(https://66.media.tumblr.com/24fd4082b31df8b1ded26c2ae6417019/tumblr_mgdycq3WwS1r3smugo1_500.gif)" }).fadeIn().delay(1000).fadeOut();
				let fairy = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Get_Fairy.wav");
				fairy.play();
				link.health = link.health + 3;
			}, 2500);
			setTimeout(function (){
				let itemSound = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Item.wav");
				itemSound.play();
				$('#heart1').attr({style: "content:url(https://i.imgur.com/rCtMDmM.png" })

			}, 3500);
			setTimeout(function (){
				let itemSound = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Item.wav");
				itemSound.play();
				$('#heart2').attr({style: "content:url(https://i.imgur.com/rCtMDmM.png" })

			}, 3700);
			setTimeout(function (){
				let itemSound = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Item.wav");
				itemSound.play();
				$('#heart3').attr({style: "content:url(https://i.imgur.com/rCtMDmM.png" })

			}, 3900);

		};

	},
	move(direction) {
		$('.game-square').attr({style: ""});
			if(lastDir === 37) {
				if(direction === "left") {
					if(this.x > 2 || (this.y === 6 && this.x === 2)){ 
						this.x--;
					}
				}
				else if (lastDir !== 37) {
      		   		$(".hero").attr({style: "content:url(https://i.imgur.com/abBuvjQ.png)" });
      		  	} 	
			}
			else if(lastDir === 39) {
				 if (direction === "right") {
					if(this.x < 13 || (this.y === 6 && this.x === 13)){
						this.x++;
					}
				}
				else if (lastDir !== 39) {
					$('.hero').attr({style: "content:url(https://i.imgur.com/kCUO9Vr.png" })
				}
			}
			else if(lastDir === 38) {
				if (direction === "up") {
					if(this.y < 9 || (this.y === 9 && this.x === 7)) {
						this.y++;
					}
				}
				else if(lastDir !== 38) {
					$('.hero').attr({style: "content:url(https://i.imgur.com/csvhPRc.png" })
	
				}
			}
			else if(direction === "down") {
				if(this.y > 3 || (this.y === 3 && this.x === 7)) {
					this.y--;

				}
			}
				this.render();
	},
	attack() {
		$(".hero").height(48);
			let snd = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword1.wav");
			snd.play();

		if (lastDir === 37) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/ypjv49F.png" })
      		$(`.game-square[x=${this.x-1}][y=${this.y}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x-1}][y=${this.y}]`).attr({style: "content:url(https://i.imgur.com/xF5wkSs.png" });

		}
		else if(lastDir === 39) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/yWVt0cq.png" })
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).attr({style: "content:url(https://i.imgur.com/LhHh7AK.png" });

		}
		else if(lastDir === 38) {
			$(".hero").height(48);
			$('.hero').attr({style: "content:url(https://i.imgur.com/DPKnPxz.png" })
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).attr({style: "content:url(https://i.imgur.com/2qVhI0i.png" });

		}
		else if(lastDir === 40) {
			$(".hero").height(48);
			$('.hero').attr({style: "content:url(https://i.imgur.com/a4H8WVq.png" })
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).attr({style: "content:url(https://i.imgur.com/lB21hzZ.png" });
		
		}

	},

};

hero.render();


$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
       hero.move("left")
         //left arrow key
       		   $(".hero").attr({style: "content:url(https://i.imgur.com/vnqk8jR.gif)" });
       			lastDir = 37;
        break;

    case 38:
        hero.move("up")
         //up arrow key
   				$(".hero").attr({style: "content:url(https://i.imgur.com/CAFfrTP.gif)" });
   				lastDir = 38;
        break;

    case 39:
        hero.move("right")
        //right arrow key
   				$(".hero").attr({style: "content:url(https://i.imgur.com/17AAxr3.gif)" });
       			lastDir = 39;
        break;

    case 40:
        hero.move("down")
            //bottom arrow key
   				$(".hero").attr({style: "content:url(https://i.imgur.com/IZallmN.gif)" });

            lastDir = 40;
        break;
    case 32:
    if(lastDir === 38 || lastDir === 40){
    	$(".hero").height(48);
    	hero.attack();
    }	else {
    	$(".hero").width(42);
    	hero.attack();

    }
    }
});
 

// function screenChange() {
// 	if($('.game-square').
// }

// var audio = document.getElementById("audio");
//   audio.volume = 0.2;
















































