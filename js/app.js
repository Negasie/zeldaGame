console.log('zelda')


function gameboard() {
$('#container').append('<div class="gameboard room1"></div>');
for(let y = 11; y > -1; y--){
    $('.gameboard').append(`<div class='row${y}'></div>`)
    for(let x = 0; x < 16; x++){
        $(`.row${y}`).append(`<div class="game-square" x="${x}" y="${y}"></div>`)
    };
 	$('.game-square[x=1][y=6]').addClass('door0');
 	$('.game-square[x=14][y=6]').addClass('door1');
 	$('.game-square[x=7][y=10]').addClass('door2');
 	$('.game-square[x=7][y=2]').addClass('door3');

};
};
gameboard();
class characters {
	constructor(health, attack, inventory){
		this.health = health;
		this.attack = attack;
		this.inventory = inventory;
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
	inventory() {

	}
}
let bossHealth = 3;
const link = new characters(3, 3, ["hello"]);
const bat = {
	x: 5,
	y: 8,
	render() {
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bat');
	},
	roam() {
		let	dir = Math.floor(Math.random() * 5);
		if(dir === 1){
			bat.x++;
		}
		else if(dir === 2){
			bat.x--;
		}
		else if(dir === 3){
			bat.y--;
		}
		else if(dir === 4){
			bat.y++;
		}

		},	
};
	// function movement() {
	// 	setTimeout(function (){
	// 		bat.roam();
	// 		bat.render();
	// 	}, 1000, this.movement);
	// };	
// 			setTimeout(function (){
// 			bat.roam();
// 			bat.render();
// 		}, 1000, this.roam);
	
// bat.roam();
//movement();
const bat2 = {
	x: 10,
	y: 8,
	render() {
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bat');
	},
};
bat.render();
bat2.render();
const key = {
	render() {
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('key');
},
};
const bomb = {
	render() {
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bomb');
	
	},
};
const left = 37;
const right = 39;
const up = 38;
const down = 40;
const spacebar = 32;
let lastDir = 40;
const B = 66;

const hero = {
	x: 7,
	y: 2,
	render() {
		$('.hero').removeClass('hero');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('hero');
		if( $('.gameboard').hasClass('room1')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/GUtC5FT.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			//	Room1 to Room0 doorway
				$('.gameboard').removeClass('room1');
				$('.gameboard').addClass('room0');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${3}][y=${3}]`).addClass('key0');
				$(`.game-square[x=${3}][y=${3}]`).addClass('key');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${8}][y=${6}]`).addClass('minotaur');	
				$(`.game-square[x=${7}][y=${6}]`).addClass('minotaur');	

			};
		};
		if($('.gameboard').hasClass('room1')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/p3d1a5p.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room1 to Room2 doorway
				$('.gameboard').removeClass('room1');
				$('.gameboard').addClass('room2');
			$('.bat').removeClass('bat');
				$(`.game-square[x=${9}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${9}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${6}]`).addClass('redGuy');	
				$(`.game-square[x=${6}][y=${7}]`).addClass('redGuy');	
				$(`.game-square[x=${6}][y=${5}]`).addClass('redGuy');	

			};
		};
		if( $('.gameboard').hasClass('room0')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/04n4zf7.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=1][y=6]`).addClass('hero');
					hero.x = 1;
					hero.y =6;			// Room0 to Room1 doorway
				$('.gameboard').removeClass('room0');
				$('.game-square').removeClass('key');
				$('.game-square').removeClass('key0');
				$('.gameboard').addClass('room1');
 				$('.game-square[x=1][y=6]').addClass('door0');
 				$('.game-square[x=7][y=10]').addClass('door2');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${5}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${10}][y=${8}]`).addClass('bat');	
			};
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('key0')) {
					link.inventory.push('key0');
				$('.key0').removeClass('key0 key');
				let keyPickUp = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Get_Key.wav"); 
				keyPickUp.play();

					};
		};
		if( $('.gameboard').hasClass('room2')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/04n4zf7.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			// Room2 to Room1 doorway
				$('.gameboard').removeClass('room2');
				$('.redGuy').removeClass('redGuy');
				$('.gameboard').addClass('room1');
 				$('.game-square[x=14][y=6]').addClass('door1');
 				$('.game-square[x=7][y=10]').addClass('door2');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${5}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${10}][y=${8}]`).addClass('bat');	
			};

		};
		if( $('.gameboard').hasClass('room1')){
			if(link.inventory.length > 1){
				if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door2')) {
				let openDoor = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Door_Unlock.wav"); 
				openDoor.play();
					$('.gameboard').css('background-image','url(https://i.imgur.com/QGL6B6I.png)');
					$('.hero').removeClass('hero');
					$(`.game-square[x=7][y=3]`).addClass('hero');
						hero.x = 7;
						hero.y =3;			// Room1 to Room3 doorway
					$('.gameboard').removeClass('room1');
					$('.gameboard').addClass('room3');
					$('.bat').removeClass('bat');
					$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
					$(`.game-square[x=${6}][y=${8}]`).addClass('bat');	
					$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
					$(`.game-square[x=${10}][y=${8}]`).addClass('bat');	
					$(`.game-square[x=${12}][y=${8}]`).addClass('bat');	
					$(`.game-square[x=${5}][y=${6}]`).addClass('skelly');	
					$(`.game-square[x=${9}][y=${6}]`).addClass('skelly');	
		
				};
			};	
		};
		if( $('.gameboard').hasClass('room3')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door3')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/04n4zf7.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=9]`).addClass('hero');
					hero.x = 7;
					hero.y =9;			// Room3 to Room1 doorway
				$('.gameboard').removeClass('room3');
				$('.skelly').removeClass('skelly');
				$('.gameboard').addClass('room1');
 				$('.game-square[x=14][y=6]').addClass('door1');
 				$('.game-square[x=7][y=10]').addClass('door2');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${5}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${10}][y=${8}]`).addClass('bat');	
			};

		};
		if( $('.gameboard').hasClass('room3')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door2')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=3]`).addClass('hero');
					hero.x = 7;
					hero.y =3;			// Room3 to Room4 doorway
				$('.gameboard').removeClass('room3');
				$('.skelly').removeClass('skelly');
				$('.gameboard').addClass('room4');
 				$('.game-square[x=14][y=6]').addClass('door1');
 				$('.game-square[x=7][y=10]').addClass('door2');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${9}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${11}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${13}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${10}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${12}][y=${8}]`).addClass('bat');	
	

			};
		};
		if( $('.gameboard').hasClass('room4')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door3')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/04n4zf7.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=9]`).addClass('hero');
					hero.x = 7;
					hero.y =9;			// Room4 to Room3 doorway
				$('.gameboard').removeClass('room4');
				$('.gameboard').addClass('room3');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${10}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${12}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${5}][y=${6}]`).addClass('skelly');	
				$(`.game-square[x=${9}][y=${6}]`).addClass('skelly');	
	

			};
		};
		if( $('.gameboard').hasClass('room4')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/1jz6m6P.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			//	Room4 to Room5 doorway
				$('.gameboard').removeClass('room4');
				$('.gameboard').removeClass('solved');
				$('.gameboard').removeClass('blownUp');				
				$('.gameboard').addClass('room5');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${3}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${3}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${8}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${8}]`).addClass('minotaur');
				$(`.game-square[x=${7}][y=${6}]`).addClass('minotaur');
				$(`.game-square[x=${8}][y=${7}]`).addClass('skelly');
			};
		};	
		if( $('.gameboard').hasClass('room5')) {
			if( !$('.game-square').hasClass('bat') && !$('.game-square').hasClass('skelly') && !$('.game-square').hasClass('minotaur') && !$('.gameboard').hasClass('solved')){
				$('.gameboard').css('background-image','url(https://i.imgur.com/TaIa6ng.png)');
				let secret = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Secret.wav");
				secret.play();
				$('.gameboard').addClass('solved');
			};		
		};
		if( $('.gameboard').hasClass('room5') && $('.gameboard').hasClass('solved')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=1][y=6]`).addClass('hero');
					hero.x = 1;
					hero.y =6;			// Room5 to Room4 doorway
				$('.gameboard').removeClass('room5');
				$('.gameboard').removeClass('solved');
				$('.gameboard').addClass('room4');
 				$('.game-square[x=1][y=6]').addClass('door0');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$('.skelly').removeClass('skelly');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${9}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${11}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${13}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${10}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${12}][y=${8}]`).addClass('bat');	
			};
		};
			if( $('.gameboard').hasClass('room4')) {
				if( $('.game-square').hasClass('door2') && $('.game-square').hasClass('bomb')){
					$('.gameboard').addClass('blownUp');
				};
			};
			if( $('.gameboard').hasClass('room4') && $('.gameboard').hasClass('blownUp')){
				setTimeout(function (){
					$('.gameboard').css('background-image','url(https://i.imgur.com/5XLkSm3.png)');
					let secret = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Secret.wav");
					secret.play();
				}, 3000);
								$('.gameboard').removeClass('blownUp');

			};



			if( $('.gameboard').hasClass('room6')) {
				if( $('.game-square').hasClass('door2') && $('.game-square').hasClass('bomb')){
					$('.gameboard').addClass('blownUp');
				};
			};
			if( $('.gameboard').hasClass('room6') && $('.gameboard').hasClass('blownUp')){
				setTimeout(function (){
					$('.gameboard').css('background-image','url(https://i.imgur.com/KusSvMa.png)');
					let secret = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Secret.wav");
					secret.play();
				}, 3000);
								$('.gameboard').removeClass('blownUp');

			};





		if($('.gameboard').hasClass('room4')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/p3d1a5p.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room4 to Room6 doorway
				$('.gameboard').removeClass('room4');
				$('.gameboard').addClass('room6');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${9}][y=${4}]`).addClass('redGuy');
				$(`.game-square[x=${9}][y=${8}]`).addClass('redGuy');
				$(`.game-square[x=${5}][y=${8}]`).addClass('skelly');
				$(`.game-square[x=${6}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('skelly');
				$(`.game-square[x=${6}][y=${9}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${8}]`).addClass('skelly');
			};
		};
		if( $('.gameboard').hasClass('room6')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			// Room6 to Room4 doorway
				$('.gameboard').removeClass('room6');
				$('.gameboard').addClass('room4');
 				$('.game-square[x=14][y=6]').addClass('door1');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$('.skelly').removeClass('skelly');
				$('.redGuy').removeClass('redGuy');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${9}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${11}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${13}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${10}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${12}][y=${8}]`).addClass('bat');	
			};

		};
		if( $('.gameboard').hasClass('room6')){
				if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door2')) {
					$('.gameboard').css('background-image','url(https://i.imgur.com/m5spAiL.png)');
					$('.hero').removeClass('hero');
					$(`.game-square[x=7][y=3]`).addClass('hero');
						hero.x = 7;
						hero.y =3;			// Room6 to Room9 doorway
					$('.gameboard').removeClass('room6');
					$('.gameboard').addClass('room9');
					$('.bat').removeClass('bat');
					$('.redGuy').removeClass('redGuy');
					$('.skelly').removeClass('skelly');
					$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
					$(`.game-square[x=${3}][y=${4}]`).addClass('bat');	
					$(`.game-square[x=${5}][y=${4}]`).addClass('bat');	
					$(`.game-square[x=${10}][y=${9}]`).addClass('bat');	
					$(`.game-square[x=${11}][y=${7}]`).addClass('bat');	
		
				};
			};	
		if( $('.gameboard').hasClass('room9')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door3')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/p3d1a5p.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=9]`).addClass('hero');
					hero.x = 7;
					hero.y =9;			// Room9 to Room6 doorway
				$('.gameboard').removeClass('room9');
				$('.gameboard').addClass('room6');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${9}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${9}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${9}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${8}]`).addClass('bat');
			};

		};
		if($('.gameboard').hasClass('room9')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/KCC82ph.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room9 to Room10 doorway
				$('.gameboard').removeClass('room9');
				$('.gameboard').addClass('room10');
			 	$('.game-square[x=1][y=6]').addClass('door0');
			 	$('.game-square[x=14][y=6]').addClass('door1');
			 	$('.game-square[x=7][y=10]').addClass('door2');
			 	$('.game-square[x=7][y=2]').addClass('door3');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${9}][y=${4}]`).addClass('skelly');
				$(`.game-square[x=${9}][y=${8}]`).addClass('skelly');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${6}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${8}]`).addClass('minotaur');
				$(`.game-square[x=${12}][y=${6}]`).addClass('minotaur');
				$(`.game-square[x=${10}][y=${6}]`).addClass('minotaur');
			};
		};
		if( $('.gameboard').hasClass('room10')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/m5spAiL.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			// Room10 to Room9 doorway
				$('.gameboard').removeClass('room10');
				$('.gameboard').addClass('room9');
				$('.bat').removeClass('bat');
				$('.skelly').removeClass('skelly');
				$('.minotaur').removeClass('minotaur');
					$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
					$(`.game-square[x=${3}][y=${4}]`).addClass('bat');	
					$(`.game-square[x=${5}][y=${4}]`).addClass('bat');	
					$(`.game-square[x=${10}][y=${9}]`).addClass('bat');	
					$(`.game-square[x=${11}][y=${7}]`).addClass('bat');	
			};

		};
		if( $('.gameboard').hasClass('room10')){
			if(link.inventory.length > 2){
				if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door2')) {
				let openDoor = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Door_Unlock.wav"); 
				openDoor.play();
					$('.gameboard').css('background-image','url(https://i.imgur.com/KCmNp8C.png)');
					$('.hero').removeClass('hero');
					$(`.game-square[x=7][y=3]`).addClass('hero');
						hero.x = 7;
						hero.y =3;			// Room10 to Room11 doorway
					$('.gameboard').removeClass('room10');
					$('.gameboard').addClass('room11');
					$('.bat').removeClass('bat');
					$('.skelly').removeClass('skelly');
					$('.minotaur').removeClass('minotaur');
					$(`.game-square[x=${13}][y=${6}]`).addClass('dragonLowerRight');	
					$(`.game-square[x=${12}][y=${6}]`).addClass('dragonLowerLeft');	
					$(`.game-square[x=${13}][y=${7}]`).addClass('dragonUpperRight');	
					$(`.game-square[x=${12}][y=${7}]`).addClass('dragonUpperLeft');	

				};
			};	
		};
		if( $('.gameboard').hasClass('room11')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door3')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/KCC82ph.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=9]`).addClass('hero');
					hero.x = 7;
					hero.y =9;			// Room11 to Room10 doorway
				$('.gameboard').removeClass('room11');
				$('.gameboard').addClass('room10');
				$('.bat').removeClass('bat');
				$('.dragonLowerLeft').removeClass('dragonLowerLeft');
				$('.dragonLowerRight').removeClass('dragonLowerRight');
				$('.dragonUpperLeft').removeClass('dragonUpperLeft');
				$('.dragonUpperRight').removeClass('dragonUpperRight');
				$(`.game-square[x=${9}][y=${4}]`).addClass('skelly');
				$(`.game-square[x=${9}][y=${8}]`).addClass('skelly');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${6}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${8}]`).addClass('minotaur');
				$(`.game-square[x=${12}][y=${6}]`).addClass('minotaur');
				$(`.game-square[x=${10}][y=${6}]`).addClass('minotaur');
			};

		};
		if( $('.gameboard').hasClass('room4')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door2')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/m5spAiL.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=3]`).addClass('hero');
					hero.x = 7;
					hero.y =3;			// Room4 to Room8 doorway
				$('.gameboard').removeClass('room4');
				$('.gameboard').addClass('room8');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${5}][y=${5}]`).addClass('minotaur');	
				$(`.game-square[x=${4}][y=${5}]`).addClass('skelly');	
				$(`.game-square[x=${9}][y=${5}]`).addClass('minotaur');	
				$(`.game-square[x=${10}][y=${5}]`).addClass('skelly');	
	

			};
		};

		if( $('.gameboard').hasClass('room8')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door3')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=9]`).addClass('hero');
					hero.x = 7;
					hero.y =9;			// Room8 to Room4 doorway
				$('.gameboard').removeClass('room8');
				$('.gameboard').addClass('room4');
				$('.bat').removeClass('bat');
				$('.minotaur').removeClass('minotaur');
				$('.skelly').removeClass('skelly');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${9}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${11}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${13}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${10}][y=${8}]`).addClass('minotaur');	
				$(`.game-square[x=${12}][y=${8}]`).addClass('bat');	
			};

		};
		if($('.gameboard').hasClass('room8')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/m5spAiL.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room8 to Room9 doorway
				$('.gameboard').removeClass('room8');
				$('.gameboard').addClass('room9');
				$('.bat').removeClass('bat');
				$('.skelly').removeClass('skelly');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${4}]`).addClass('bat');	
				$(`.game-square[x=${5}][y=${4}]`).addClass('bat');	
				$(`.game-square[x=${10}][y=${9}]`).addClass('bat');	
				$(`.game-square[x=${11}][y=${7}]`).addClass('bat');	
			};
		};
		if( $('.gameboard').hasClass('room9')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/m5spAiL.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			//	Room9 to Room8 doorway
				$('.gameboard').removeClass('room9');
				$('.gameboard').addClass('room8');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${5}][y=${5}]`).addClass('minotaur');	
				$(`.game-square[x=${4}][y=${5}]`).addClass('skelly');	
				$(`.game-square[x=${9}][y=${5}]`).addClass('minotaur');	
				$(`.game-square[x=${10}][y=${5}]`).addClass('skelly');	

			};
		};
		if( $('.gameboard').hasClass('room8')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			//	Room8 to Room7 doorway
				$('.gameboard').removeClass('room8');
				$('.gameboard').addClass('room7');
				$('.bat').removeClass('bat');
				$('.skelly').removeClass('skelly');
				$('.minotaur').removeClass('minotaur');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${6}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${3}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${9}]`).addClass('bat');
			};
		};
		if($('.gameboard').hasClass('room7')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/m5spAiL.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room7 to Room8 doorway
				$('.gameboard').removeClass('room7');
				$('.gameboard').addClass('room8');
			$('.bat').removeClass('bat');
				$(`.game-square[x=${7}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${6}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${8}][y=${8}]`).addClass('bat');	
				$(`.game-square[x=${5}][y=${5}]`).addClass('minotaur');	
				$(`.game-square[x=${4}][y=${5}]`).addClass('skelly');	
				$(`.game-square[x=${9}][y=${5}]`).addClass('minotaur');	
				$(`.game-square[x=${10}][y=${5}]`).addClass('skelly');	

			};
		};
		if( $('.gameboard').hasClass('room5')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door2')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=3]`).addClass('hero');
					hero.x = 7;
					hero.y =3;			// Room5 to Room7 doorway
				$('.gameboard').removeClass('room5');
				$('.gameboard').removeClass('solved');
				$('.gameboard').addClass('room7');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${6}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${3}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${9}]`).addClass('bat');

			};
		};
		if( $('.gameboard').hasClass('room7')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door3')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/1jz6m6P.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=7][y=9]`).addClass('hero');
					hero.x = 7;
					hero.y =9;			// Room7 to Room5 doorway
				$('.gameboard').removeClass('room7');
				$('.gameboard').addClass('room5');
				$('.bat').removeClass('bat');
				$(`.game-square[x=${3}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${3}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${8}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${7}][y=${8}]`).addClass('minotaur');
				$(`.game-square[x=${7}][y=${6}]`).addClass('minotaur');
				$(`.game-square[x=${8}][y=${7}]`).addClass('skelly');

			};

		};
		if( $('.gameboard').hasClass('room7')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/S2QKpjX.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			//	Room7 to Room6.5 doorway
				$('.gameboard').removeClass('room7');
				$('.gameboard').addClass('roomAdvice');
				$(`.game-square[x=${7}][y=${5}]`).addClass('key1');
				$(`.game-square[x=${7}][y=${5}]`).addClass('key');
				$('.bat').removeClass('bat');
//			ADD THE GUY AND FIREBALLS FIXITLATER	$(`.game-square[x=${3}][y=${3}]`).addClass('adviceGuy');
			};
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('key1')) {
					link.inventory.push('key1');
				$('.key1').removeClass('key1 key');
				let keyPickUp = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Get_Key.wav"); 
				keyPickUp.play();

					};
		};
		if($('.gameboard').hasClass('roomAdvice')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/MSQ63XY.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room6.5 to Room7 doorway
				$('.gameboard').removeClass('roomAdvice');
				$('.gameboard').addClass('room7');
			$('.bat').removeClass('bat');
				$(`.game-square[x=${4}][y=${4}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${6}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${3}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${4}][y=${8}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${3}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${5}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${7}]`).addClass('bat');
				$(`.game-square[x=${5}][y=${9}]`).addClass('bat');
			};
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('key1')) {
					link.inventory.push('key1');
				$('.key1').removeClass('key1 key');
				let keyPickUp = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Get_Key.wav"); 
				keyPickUp.play();

					};			
		};
		if($('.gameboard').hasClass('room11')){
			if( !$('.game-square').hasClass('dragonUpperRight') && !$('.gameboard').hasClass('victory')){
				$('.gameboard').addClass('victory');
				$('.gameboard').css('background-image','url(https://i.imgur.com/m80MnnX.png)');
				let secret = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Secret.wav");
				secret.play();


			}
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door1')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/p3d1a5p.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=2][y=6]`).addClass('hero');
					hero.x = 2;
					hero.y =6;			//	Room11 to Room12 doorway
				$('.gameboard').removeClass('room1');
				$('.gameboard').addClass('room12');
				$(`.game-square[x=${7}][y=${8}]`).addClass('triforce');

			};
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('triforce') && !$('.gameboard').hasClass("winner")) {
				$('.hero').addClass('linkTriforce');
				$('.hero').removeClass('hero');
				$('.triforce').removeClass('triforce');
			setTimeout(function (){
				let victory = new Audio("http://zeldauniverse.s3.amazonaws.com/soundtracks/alinktothepastost/triforce_chamber.mp3"); 
				victory.play();
				$('.gameboard').addClass('winner');

			}, 500);

			}
		};	
		if( $('.gameboard').hasClass('room12')){
			if( $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('door0')) {
				$('.gameboard').css('background-image','url(https://i.imgur.com/KCmNp8C.png)');
				$('.hero').removeClass('hero');
				$(`.game-square[x=13][y=6]`).addClass('hero');
					hero.x = 13;
					hero.y =6;			// Room12 to Room11 doorway
				$('.gameboard').removeClass('room12');
				$('.dragonUpperRight').removeClass('dragonUpperRight');
				$('.dragonLowerRight').removeClass('dragonLowerRight');
				$('.dragonUpperLeft').removeClass('dragonUpperLeft');
				$('.dragonLowerLeft').removeClass('dragonLowerLeft');
				$('.gameboard').addClass('room11');
			};

		};

			if(	$(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('bat') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('minotaur') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('skelly') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('redGuy') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('dragonLowerRight') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('dragonLowerLeft') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('dragonUpperRight') || $(`.game-square[x=${this.x}][y=${this.y}]`).hasClass('dragonUpperLeft')) {
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
			$('.hero').addClass('death');
			$('.hero').removeClass('hero');
      		// $(".hero").attr({style: "content:url(https://i.imgur.com/iB0S4XG.gif)" });			
//						^^^ Death spin GIF wont work




			let dead = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Link_Dying.wav");
			dead.play();
			$('#heart1').attr({style: "content:url(https://i.imgur.com/QDXta1k.png" });

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
				$('.death').addClass('hero');
				$('.hero').removeClass('death');

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
			let snd = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Sword1.wav");
			snd.play();

		if (lastDir === 37) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/ypjv49F.png" })
      		$(`.game-square[x=${this.x-1}][y=${this.y}]`).removeClass('bat');
      		$(`.game-square[x=${this.x-1}][y=${this.y}]`).removeClass('skelly');
      		$(`.game-square[x=${this.x-1}][y=${this.y}]`).removeClass('minotaur');
      		$(`.game-square[x=${this.x-1}][y=${this.y}]`).removeClass('redGuy');
   	  		$(`.game-square[x=${this.x-1}][y=${this.y}]`).attr({style: "content:url(https://i.imgur.com/xF5wkSs.png" });
   	  		if( $(`.game-square[x=${this.x-1}][y=${this.y}]`).hasClass('dragonUpperLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x-1}][y=${this.y}]`).hasClass('dragonUpperRight')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x-1}][y=${this.y}]`).hasClass('dragonLowerRight')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x-1}][y=${this.y}]`).hasClass('dragonLowerLeft')) {
   	  			bossHealth--;
   	  		};

		}
		else if(lastDir === 39) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/yWVt0cq.png" })
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).removeClass('skelly');
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).removeClass('minotaur');
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).removeClass('redGuy');
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).attr({style: "content:url(https://i.imgur.com/LhHh7AK.png" });
   	  		if( $(`.game-square[x=${this.x+1}][y=${this.y}]`).hasClass('dragonUpperLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x+1}][y=${this.y}]`).hasClass('dragonUpperRight')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x+1}][y=${this.y}]`).hasClass('dragonLowerLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x+1}][y=${this.y}]`).hasClass('dragonLowerRight')) {
   	  			bossHealth--;
   	  		};

		}
		else if(lastDir === 38) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/DPKnPxz.png" })
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).removeClass('skelly');
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).removeClass('minotaur');
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).removeClass('redGuy');
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).attr({style: "content:url(https://i.imgur.com/2qVhI0i.png" });
   	  		if( $(`.game-square[x=${this.x}][y=${this.y+1}]`).hasClass('dragonUpperLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x}][y=${this.y+1}]`).hasClass('dragonUpperRight')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x}][y=${this.y+1}]`).hasClass('dragonLowerLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x}][y=${this.y+1}]`).hasClass('dragonLowerRight')) {
   	  			bossHealth--;
   	  		};

		}
		else if(lastDir === 40) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/a4H8WVq.png" })
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).removeClass('bat');
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).removeClass('skelly');
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).removeClass('minotaur');
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).removeClass('redGuy');
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).attr({style: "content:url(https://i.imgur.com/lB21hzZ.png" });
   	  		if( $(`.game-square[x=${this.x}][y=${this.y-1}]`).hasClass('dragonUpperLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x}][y=${this.y-1}]`).hasClass('dragonUpperRight')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x}][y=${this.y-1}]`).hasClass('dragonLowerLeft')) {
   	  			bossHealth--;
   	  		};
   	  		if( $(`.game-square[x=${this.x}][y=${this.y-1}]`).hasClass('dragonLowerRight')) {
   	  			bossHealth--;
   	  		};				
		};
		if(bossHealth === 0){
			$('.dragonUpperLeft').removeClass('dragonUpperLeft');
			$('.dragonUpperRight').removeClass('dragonUpperRight');
			$('.dragonLowerLeft').removeClass('dragonLowerLeft');
			$('.dragonLowerRight').removeClass('dragonLowerRight');

		}

	},
	bomb(){
			let bombDrop = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Bomb_Drop.wav");
			bombDrop.play();
			setTimeout(function (){
//				$('.bomb').attr({style: "content:url(https://i.imgur.com/nJRbPXG.gif)" }).fadeIn().delay(1500).fadeOut();			
				$('.bomb').addClass("explosion").fadeIn().delay(1500).fadeOut();			
				let explosion = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Bomb_Blow.wav");
				explosion.play();
				$('.bomb').removeClass('bomb');


			}, 1500);
			setTimeout(function (){
				$('.explosion').removeClass('explosion');



			},	3000);
				if( $(`.game-square[x=${this.x-1}][y=${this.y}]`).hasClass('bat') ||  $(`.game-square[x=${this.x+1}][y=${this.y}]`).hasClass('bat') || $(`.game-square[x=${this.x}][y=${this.y+1}]`).hasClass('bat') || $(`.game-square[x=${this.x}][y=${this.y-1}]`).hasClass('bat')) {
		   	  		$('game-square').removeClass('bat');
				};		// CANT GET BOMBS TO KILL BATS FIXITLATER










		if (lastDir === 37) {
   	  		$(`.game-square[x=${this.x-1}][y=${this.y}]`).addClass('bomb');

		}
		else if(lastDir === 39) {
   	  		$(`.game-square[x=${this.x+1}][y=${this.y}]`).addClass('bomb');

		}
		else if(lastDir === 38) {
   	  		$(`.game-square[x=${this.x}][y=${this.y+1}]`).addClass('bomb');


		}
		else if(lastDir === 40) {
   	  		$(`.game-square[x=${this.x}][y=${this.y-1}]`).addClass('bomb');

		
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
		hero.attack();
    	break;

    case 66:
    	hero.bomb();
    	break;
    }
});
 

// function screenChange() {
// 	if($('.game-square').
// }

// var audio = document.getElementById("audio");
//   audio.volume = 0.2;


/*

1.	Put each room(enemies, doors, etc) into an object.
2.	Create function to render each room. And clear when moving on.
3.	Plan a room/doorway structure system.

Each room has up to four doors:
	door 0 on the left wall
	door 1 on the right wall
	door 2 on the upper wall
	door 3 on the lower wall

Whichever door number hero steps on checks current room and loads
the next corresponding room.  So if hero is in room1, and steps on 
door0 (left wall), the function checks which room its currently in,
and determines which room is adjacent to it.  and loads up accordingly.



4.	Connect doorways from object to object.  Tie in coordinates,
not just to image.
5.	Style more and have fun.

*/











































