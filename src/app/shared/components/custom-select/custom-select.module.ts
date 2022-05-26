import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select.component';

@NgModule({
  declarations: [CustomSelectComponent],
  exports: [CustomSelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CustomSelectModule {}
