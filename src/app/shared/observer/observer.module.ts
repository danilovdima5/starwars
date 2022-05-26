import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObserverDirective} from "./observer.directive";



@NgModule({
  declarations: [ObserverDirective],
  exports: [
    ObserverDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ObserverModule { }
