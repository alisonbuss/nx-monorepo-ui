
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgGreetingComponent } from './ng-greeting/ng-greeting.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgGreetingComponent],
  exports: [NgGreetingComponent]
})
export class LibAngularModule {}
