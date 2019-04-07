console.log('zelda')


// function grid() {
// 	for(let y = 11; y > -1; y--){
// 		$('#container').append("<div id='row'></div>");
// 	}
	
// for(let x = 11; x > -1; x--){
// 		$('#row').append("<div id='column'></div>");
// }
// }
// grid();
// function createGrid() {
//     for (let y = 11; y > -1; y--) {
//         for (let x = 11;x > -1; x--) {
//             $("#container").append("<div class='grid'></div>");
//         };
//     };
//     $(".grid").width(720/12);
//     $(".grid").height(720/12);
// };
// $(document).ready(function() {
//     	$('button').on('click', function(e) {
//         	console.log(e.target);
// });
// });
// createGrid();

$('#container').append('<div class="gameboard"></div>');
for(let y = 11; y > -1; y--){
    $('.gameboard').append(`<div class='row${y}'></div>`)
    for(let x = 0; x < 16; x++){
        $(`.row${y}`).append(`<div class="game-square" x="${x}" y="${y}"></div>`)
    }
}

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
		$('.bat').removeClass('bat');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bat');

	}
}
const bat2 = {
	x: 10,
	y: 7,
	render() {
		$('.bat2').removeClass('bat2');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('bat2');

	}
}
bat.render();
bat2.render();

const left = 37;
const right = 39;
const up = 38;
const down = 40;
const spacebar = 32;

const hero = {
	x: 7,
	y: 2,
	render() {
		$('.hero').removeClass('hero');
		$(`.game-square[x=${this.x}][y=${this.y}]`).addClass('hero');
	},
	move(direction) {
		$('.game-square').attr({style: ""});
			if(direction === "left") {
				if(this.x > 2){
					this.x--;
				}
			}
			else if (direction === "right") {
				if(this.x < 13){
					this.x++;
				}
			}
			else if (direction === "up") {
				if(this.y < 9) {
					this.y++;
				}
			}
			else if(direction === "down") {
				if(this.y > 3) {
					this.y--;

				}
			}
				this.render();
	},
	attack() {
		$(".hero").height(48);

		if (lastDir === 37) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/oAfffnA.png" })
		}
		else if(lastDir === 39) {
			$('.hero').attr({style: "content:url(https://i.imgur.com/kCUO9Vr.png" })

		}
		else if(lastDir === 38) {
			$(".hero").height(48);
			$('.hero').attr({style: "content:url(https://i.imgur.com/csvhPRc.png" })

		}
		else if(lastDir === 40) {
			$(".hero").height(48);
			$('.hero').attr({style: "content:url(https://i.imgur.com/L9ytA2L.png" })
		}

	}
};
hero.render();


$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
       hero.move("left")
         //left arrow key
       		   $(".hero").attr({style: "content:url(https://i.imgur.com/abBuvjQ.png)" });
       			lastDir = 37;
        break;

    case 38:
        hero.move("up")
         //up arrow key
   				$(".hero").attr({style: "content:url(https://i.imgur.com/arBUiFo.png)" });
   				lastDir = 38;
        break;

    case 39:
        hero.move("right")
        //right arrow key
   				$(".hero").attr({style: "content:url(https://i.imgur.com/gBEWurw.png)" });
       			lastDir = 39;
        break;

    case 40:
        hero.move("down")
            //bottom arrow key
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
 


















































