import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
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

  newFavoriteGame = new FormControl('', [Validators.required], []);
  // newFavoriteGame = this.fb.control('', [Validators.required], []);

  get favoriteGames() {
    return this.myForm.get('favoritesGames') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavoriteGame.invalid) return;

    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push(this.fb.control(newGame, [Validators.required]));
    this.newFavoriteGame.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
