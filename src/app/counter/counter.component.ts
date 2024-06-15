import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl:'\counter.component.html',



  styles: []
})
export class CounterComponent {
  @Input() initialValue: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  count = this.initialValue;
  

  increment() {
    this.count++;
    this.valueChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.valueChange.emit(this.count);
  }
}