import './styles.scss';
import $ from '../libs/jQuery.js';
import EventEmitter from 'events'
var events = new EventEmitter()
events.on('app-start', function (text) {
  console.log(text)
})


$(".start-button").click(() => {
    events.emit('app-start', 'Event generated from click handler')
});
