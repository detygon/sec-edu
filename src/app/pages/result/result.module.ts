import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    SharedModule,
    ResultRoutingModule,
    SweetAlert2Module.forRoot()
  ]
})
export class ResultModule { }
