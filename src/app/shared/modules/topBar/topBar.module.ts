import {NgModule} from '@angular/core';
import { TopBarComponent } from './components/topBar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [TopBarComponent],
  declarations: [TopBarComponent],
  providers: [],
})
export class TopBarModule {
}
