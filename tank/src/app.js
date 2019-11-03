import './styles.scss';
import $ from '../libs/jQuery.js';
/*import EventEmitter from 'events'
var events = new EventEmitter()
events.on('app-start', function (text) {
  console.log(text)
})
events.emit('app-start', 'app is running')
*/

$(".start-button").click(() => {
    console.log("Tank is filling");
    if ($( ".tank" ).hasClass( "unfill-tank" )) { 
        console.log("after start");
        $(".tank").removeClass("unfill-tank").addClass("fill-tank");
        
    } else {
        console.log("start");
        $(".tank").addClass("fill-tank");
    }
    $(".in").addClass("open").removeClass("close");
});

$(".tank").on('animationend', () => {
    if ($( ".tank" ).hasClass( "fill-tank" )) { 
        console.log("unfill");
        $(".tank").removeClass("fill-tank").addClass("unfill-tank");
        $(".in").addClass("close").removeClass("open");
        $(".out").addClass("open").removeClass("close");
    } else {
        $(".out").addClass("close").removeClass("open");
    }
});