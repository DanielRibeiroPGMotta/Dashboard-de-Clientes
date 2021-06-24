import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  ClientById,
  ClientEnterprisesById,
  ClientTotalsById,
} from "src/app/models/clients";

import { DialogData } from "src/app/models/clients-dialog";

import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-dialog-overview",
  templateUrl: "./dialog-overview.component.html",
  styleUrls: ["./dialog-overview.component.scss"],
})
export class DialogOverviewComponent implements OnInit {
  clientById = {} as ClientById;
  clientsById: ClientById[];
  clientTotalsById = {} as ClientTotalsById;
  clientsTotalsById: ClientTotalsById[];
  ClientEnterprisesById = {} as ClientEnterprisesById;
  ClientsEnterprisesById: ClientEnterprisesById[];
  dialogData: DialogData[];

  constructor(
    private clientService: ClientService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.getClientById(this.data);
    this.getTotalsById(this.data);
    this.getClientEnterprisesById(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //Router to get clients data by id
  getClientById(data) {
    this.clientService
      .getById(data._id)
      .subscribe((clientById: ClientById[]) => {
        this.clientsById = clientById;
      });
  }

  //router to get clients enterprises filter by id
  getClientEnterprisesById(data) {
    this.clientService
      .getClientEnterprisesById(data._id)
      .subscribe((clientEnterprisesById: ClientEnterprisesById[]) => {
        this.ClientsEnterprisesById = clientEnterprisesById;
      });
  }

  //router to get totals by id
  getTotalsById(data) {
    this.clientService
      .getTotalsById(data._id)
      .subscribe((clientTotalsById: ClientTotalsById[]) => {
        this.clientsTotalsById = clientTotalsById;
      });
  }
}
