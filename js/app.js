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
//	link.append($('#mainChar'));
//$( "ul li:nth-last-child(2)" ).append( "<span> - 2nd to last!</span>" );


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
		if(direction === "left") {
			if(this.x > 2){
				this.x--;
			}}
			else if (direction === "right") {
				if(this.x < 13){
					this.x++;
				}}
			else if (direction === "up") {
				if(this.y < 9) {
					this.y++;
				}}
			else if(direction === "down") {
				if(this.y > 3) {
					this.y--;

				}}
				this.render();
			
			


	}
};
hero.render();



$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
       hero.move("left")
         //left arrow key
        break;

    case 38:
        hero.move("up")
         //up arrow key
        break;

    case 39:
        hero.move("right")
        //right arrow key
        break;

    case 40:
        hero.move("down")
            //bottom arrow key
        break;
    }
})

















































