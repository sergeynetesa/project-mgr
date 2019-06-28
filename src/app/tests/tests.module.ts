import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgMaterialModule } from 'src/app/shared/ng-material.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,

    NgMaterialModule,

  ],
  exports: [

  ]
})
export class TestsModule {}
