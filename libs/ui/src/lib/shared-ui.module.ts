import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiAccordionModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TuiRootModule,
    TuiAccordionModule,
  ],
  exports: [
    TuiRootModule,
    TuiAccordionModule,
  ],
})
export class SharedUiModule {
}
