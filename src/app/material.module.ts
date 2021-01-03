import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const data = [
  MatCardModule, MatProgressSpinnerModule, MatSnackBarModule
];

@NgModule({
  imports: data,
  exports: data
})
export class MaterialModule {
}
