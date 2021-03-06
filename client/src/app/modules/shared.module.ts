import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
  exports: [BsDropdownModule, ToastrModule],
})
export class SharedModule {}
