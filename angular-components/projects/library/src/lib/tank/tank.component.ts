import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'lib-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(".tank").on('animationend', () => {
      if (this.tankIsFull()) this.unfillTank();
      else if (this.tankIsEmpty()) this.closeTheEvacuation();
    });
  }

  tankIsFull() {
    return $( ".tank" ).hasClass( "fill-tank" );
  }

  tankIsEmpty() {
    return $( ".tank" ).hasClass( "unfill-tank" );
  }

  closeTheEvacuation(){
    $(".out").addClass("close").removeClass("open");
  }

  fillTank(){
    console.log("Tank is filling");
    if ($( ".tank" ).hasClass( "unfill-tank" )) { 
      console.log("Runs only once at startup");
      $(".tank").removeClass("unfill-tank").addClass("fill-tank");
    } else {
      $(".tank").addClass("fill-tank");
    }
    $(".in").addClass("open").removeClass("close");
  }

  unfillTank() {
    console.log("Unfilling the tank");
    $(".tank").removeClass("fill-tank").addClass("unfill-tank");
    $(".in").addClass("close").removeClass("open");
    $(".out").addClass("open").removeClass("close");
  }



}
