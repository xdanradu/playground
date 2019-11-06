import { Component, Input  } from '@angular/core';

@Component({
    selector: "lib-color-me",
    templateUrl: 'color-me.component.html',
    styleUrls: ['color-me.component.scss']
})
export class ColorMeComponent {
    @Input() color: string;

    keyup() {
        const val = (<HTMLInputElement>document.getElementById('in')).value;
        document.getElementById('in').style.borderColor = val;
        document.getElementById('in').style.color = val;
    }

    blur() {
        document.getElementById('in').style.borderColor = '#dedede';
    }

    focus() {
        const val = (<HTMLInputElement>document.getElementById('in')).value;
        document.getElementById('in').style.borderColor = val;
        document.getElementById('in').style.color = val;
    }
}
