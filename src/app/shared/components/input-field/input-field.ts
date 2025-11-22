import { Component, input } from '@angular/core';
import { Field, FieldState } from '@angular/forms/signals';

@Component({
  selector: 'app-input-field',
  imports: [
    Field
  ],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  // Inputs requeridos (usando la sintaxis moderna de Angular Signals)
  label = input.required<string>();
  type = input<string>('text');
  placeholder = input<string>('');

  // 1. El FieldTree o Control del formulario
  field = input.required<any>();

  // 2. El FieldSignal para acceder al estado (invalid, touched, errors)
  fieldSignal = input.required<FieldState<any>>();

}
