import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { ClientComponent } from "./client.component";
import { ClientService } from "src/app/services/client.service";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

export const ClientRoutes: Routes = [
  {
    path: "client",
    component: ClientComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ClientComponent],
  providers: [ClientService],
})
export class ClientModule {}
