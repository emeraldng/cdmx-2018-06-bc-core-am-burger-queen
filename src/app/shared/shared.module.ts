// Shared-Module es una carpeta que se compartirá a lo largo del proyecto, contendrá elementos de angular material
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // el orden puede cambiar
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule

  ],
  providers: []
})
export class SharedModule { }

