import { FormGroup } from "@angular/forms";

export class FormUtils {
  static isValidField(form: FormGroup, field: string): boolean | null {
    return (
      !!form.controls[field].errors && form.controls[field].touched
    );
  }

  static getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field].errors) return null;

    const errors = form.controls[field].errors || {};

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