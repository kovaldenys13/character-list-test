import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectPlaceholderDirective } from './directives/select-placeholder.directive';
import { TooltipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    TooltipDirective,
    SelectPlaceholderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TooltipDirective,
    SelectPlaceholderDirective,
  ],
})
export class SharedModule {
}
