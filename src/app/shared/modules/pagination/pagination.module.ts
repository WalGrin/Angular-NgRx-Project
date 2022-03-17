import {NgModule} from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import {CommonModule} from '@angular/common';
import {UtilsService} from '../../services/utils.service';
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
  providers: [UtilsService]
})
export class PaginationModule {
}
