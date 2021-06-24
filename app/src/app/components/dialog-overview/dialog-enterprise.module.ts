import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { DialogOverviewComponent } from "./dialog-overview.component";
import { DialogOverviewEnterprise } from "./dialog-overview.enterprise";
import { MatTableModule } from "@angular/material/table";


@NgModule({
    declarations: [DialogOverviewEnterprise],
    imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatCardModule,
      MatTableModule,
    ],
  })
  export class DialogEnterpriseModule {}
  