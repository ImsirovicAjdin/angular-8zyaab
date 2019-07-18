import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>Card builder</h1>
      <div [ngClass]="{ green: this.green, big: this.big, box: this.box }">
        test class binding
      </div>
      <button (click)="toggleThisGreen()">Make text green</button>
      <button (click)="toggleThisBig()">Make text big</button>
      <button (click)="toggleThisBox()">Toogle box</button>      
    </div>
  `,
  styles: [`
    .green { color: green }
    .big { font-size: 100px }
    .box { border: 1px solid gray; padding: 20px; margin: 20px; border-radius: 3px; box-shadow: 10px 10px rgba(100,100,100,0.3)}
  `]
})
export class AppComponent {
  green = false;
  big = false;
  box = false;

  toggleThisGreen() {
    this.green = !this.green;
  }

  toggleThisBig() {
    this.big = !this.big;
  }

  toggleThisBox() {
    this.box = !this.box;
  }

}

