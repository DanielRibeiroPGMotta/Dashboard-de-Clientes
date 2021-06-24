import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { DetailComponent } from "./detail.component";
import { EnterpriseService } from "src/app/services/enterprise.service";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";

export const DetailRoutes: Routes = [
  {
    path: "detail",
    component: DetailComponent,
  },
];

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
  ],
  declarations: [DetailComponent],
  providers: [EnterpriseService],
})
export class DetailModule {}
