import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <span>Counter: {{ counter }}</span>

    <button (click)="inccreaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="inccreaseBy(-1)">-1</button>
  `,
  // templateUrl: './counter.component.html',
  // styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

  inccreaseBy(value: number): void {
    // if (this.counter <= 0) {
    //   return;
    // }
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
