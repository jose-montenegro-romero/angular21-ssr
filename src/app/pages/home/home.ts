import { Component, signal } from '@angular/core';
// Interfaces
import { ISignupForm } from '../../shared/interfaces/ISignupForm';
import { email, form, minLength, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
// Components
import { InputField } from '../../shared/components/input-field/input-field';
import { Test } from '../../shared/components/test/test';

@Component({
  selector: 'app-home',
  imports: [
    JsonPipe,
    InputField,
    Test
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  label = signal("Hola mundo");

  private readonly signupModel = signal<ISignupForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  protected readonly signupForm = form(this.signupModel, (fieldPath) => {
    // Validaciones para 'username'
    required(fieldPath.username, { message: 'El nombre de usuario es obligatorio' });
    minLength(fieldPath.username, 4, { message: 'Mínimo 4 caracteres' });

    // Validaciones para 'email'
    required(fieldPath.email, { message: 'El email es obligatorio' });
    email(fieldPath.email, { message: 'Debe ser un email válido' });

    // Validaciones para 'password'
    required(fieldPath.password, { message: 'La contraseña es obligatoria' });
    minLength(fieldPath.password, 6, { message: 'Mínimo 6 caracteres' });

    // // 5. Aplica el validador Cross-Field (se ejecuta cuando cambia cualquier campo)
    // passwordMatchValidator(p); 
  }
  );

  protected get usernameField() { return this.signupForm.username(); }
  protected get emailField() { return this.signupForm.email(); }
  protected get passwordField() { return this.signupForm.password(); }
  protected get confirmPasswordField() { return this.signupForm.confirmPassword(); }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.signupForm().valid()) {
      console.log('Registro exitoso. Datos:', this.signupForm().value());
      alert('¡Registro exitoso! Revisa la consola para ver los datos.');
    } else {
      console.error('El formulario tiene errores. Por favor, revísalos.');
      this.signupForm().markAsTouched;
    }
  }

}
