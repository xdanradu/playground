import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.scss']
})
export class TextMessageComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
