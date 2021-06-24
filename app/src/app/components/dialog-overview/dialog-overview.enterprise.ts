import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { 
  EnterpriseById,
  EnterpriseTotalsById,
  EnterprisesByCompany
  } from "src/app/models/enterprises";

import { EnterpriseDialogData } from "src/app/models/enterprise-dialog";

import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
    selector: "app-dialog-overview",
    templateUrl: "./dialog-overview.enterprise.html",
    styleUrls: ["./dialog-overview.enterprise.scss"],
  })
  export class DialogOverviewEnterprise implements OnInit {
  
    enterpriseById = {} as EnterpriseById;
    enterprisesById: EnterpriseById[];
    enterpriseTotalsById = {} as EnterpriseTotalsById;
    enterprisesTotalsById: EnterpriseTotalsById[];
    ClientEnterprisesById = {} as EnterprisesByCompany;
    ClientsEnterprisesById: EnterprisesByCompany[];
    dialogData: EnterpriseDialogData[];
  
    constructor(
      private enterpriseService: EnterpriseService,
      public dialogRef: MatDialogRef<DialogOverviewEnterprise>,
      @Inject(MAT_DIALOG_DATA) public data: EnterpriseDialogData
    ) {}
  
    ngOnInit(): void {
      this.getEnterpriseById(this.data);
      this.getTotalsByEnterprise(this.data);
      this.getEnterprisesByCompany(this.data);
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    //Router to get clients data by id
    getEnterpriseById(data) {
      this.enterpriseService
        .getById(data._id)
        .subscribe((enterpriseById: EnterpriseById[]) => {
          this.enterprisesById = enterpriseById;
        });
    } //
  
    //router to get  enterprises clients filter by id
    getEnterprisesByCompany(data) {
      this.enterpriseService
        .getEnterprisesByCompany(data._id)
        .subscribe((enterprisesById: EnterprisesByCompany[]) => {
          this.ClientsEnterprisesById = enterprisesById;
        });
    }
  
    //router to get totals by id
    getTotalsByEnterprise(data) {
      this.enterpriseService
        .getTotalsByEnterprise(data._id)
        .subscribe((enterpriseTotalsById: EnterpriseTotalsById[]) => {
          this.enterprisesTotalsById = enterpriseTotalsById;
        });
    }
  }
  