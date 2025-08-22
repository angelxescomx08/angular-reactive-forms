import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Este campo debe ser mayor a ${errors['min'].min}`;
        case 'email':
          return 'No es una dirección de correo válida';
        case 'pattern':
          return 'No cumple con el formato requerido';
        default:
          return "Error desconocido";
      }
    }
    return null;
  }

  static isValidField(form: FormGroup, field: string): boolean | null {
    return !!form.controls[field].errors && form.controls[field].touched;
  }

  static getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field].errors) return null;

    const errors = form.controls[field].errors || {};

    return this.getTextError(errors);
  }

  static isValidFieldInArray(form: FormArray, index: number) {
    return form.controls[index].errors && form.controls[index].touched;
  }

  static getArrayFieldError(form: FormArray, index: number): string | null {
    if (form.controls.length === 0) return null;

    const errors = form.controls[index].errors || {};

    return this.getTextError(errors);
  }
}
