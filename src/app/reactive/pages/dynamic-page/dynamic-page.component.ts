import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css',
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    favoritesGames: this.fb.array(
      [
        ['Metal Gear', [Validators.required]],
        ['Final Fantasy VII', [Validators.required]],
      ],
      [Validators.minLength(2)]
    ),
  });

  get favoriteGames() {
    return this.myForm.get('favoritesGames') as FormArray;
  }
}
