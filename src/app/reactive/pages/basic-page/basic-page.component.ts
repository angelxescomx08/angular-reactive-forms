import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  // myForm = new FormGroup({
  //   name: new FormControl(""),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  isValidField(field: string): boolean | null {
    return !!this.myForm.controls[field].errors;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field].errors) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Este campo debe ser mayor a ${errors['min'].min}`;
        default:
          return null;
      }
    }
    return null;
  }
}
