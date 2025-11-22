import { Component, model } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

  label = model.required<string>();

  changeLabel() {
    const random = Math.random();
    this.label.set('Nuevo valor desde el hijo! ' + random);
    // this.label.update(oldValue => oldValue + 10);
  }

}
