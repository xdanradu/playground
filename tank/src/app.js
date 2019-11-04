import './styles.scss';
import $ from '../libs/jQuery.js';

$(".start-button").click(() => {
    fillTank();
});

$(".tank").on('animationend', () => {
    if (tankIsFull()) unfillTank();
    else if (tankIsEmpty()) closeTheEvacuation();
});

function tankIsFull() {
    return $( ".tank" ).hasClass( "fill-tank" );
}

function tankIsEmpty() {
    return $( ".tank" ).hasClass( "unfill-tank" );
}

function closeTheEvacuation(){
    $(".out").addClass("close").removeClass("open");
}

function fillTank(){
    console.log("Tank is filling");
    if ($( ".tank" ).hasClass( "unfill-tank" )) { 
        console.log("Runs only once at startup");
        $(".tank").removeClass("unfill-tank").addClass("fill-tank");
        
    } else {
        $(".tank").addClass("fill-tank");
    }
    $(".in").addClass("open").removeClass("close");
}

function unfillTank() {
    console.log("Unfilling the tank");
    $(".tank").removeClass("fill-tank").addClass("unfill-tank");
    $(".in").addClass("close").removeClass("open");
    $(".out").addClass("open").removeClass("close");
}

