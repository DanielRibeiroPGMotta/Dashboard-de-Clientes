import { EnterpriseService } from "src/app/services/enterprise.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { Enterprise, EnterpriseTotal } from "../../models/enterprises";
import { DialogOverviewEnterprise } from "src/app/components/dialog-overview/dialog-overview.enterprise";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  enterprise = {} as Enterprise;
  enterprises: Enterprise[];
  enterpriseTotal = {} as EnterpriseTotal;
  enterprisesTotals: EnterpriseTotal[];
  searchTerm = "";

  constructor(private enterpriseService: EnterpriseService, public dialog: MatDialog) {}

  clients$: Observable<Enterprise[]> = this.enterpriseService.getSearchResults();


  ngOnInit(): void {
    this.getEnterprises();
    this.getEnterprisesTotals();

    this.enterpriseService.search(this.searchTerm).subscribe();
  }

  //Router to get all clients data
  getEnterprises() {
    this.enterpriseService.getAll().subscribe((enterprises: Enterprise[]) => {
      this.enterprises = enterprises;
    });
  }

    //Router to get all clients totals data
    getEnterprisesTotals() {
      this.enterpriseService
        .getGeneralTotals()
        .subscribe((enterprisesTotals: EnterpriseTotal[]) => {
          this.enterprisesTotals = enterprisesTotals;
        });
    }
    
  //handler to onChange search input
  onSearchTermChange(): void {
    this.enterpriseService.search(this.searchTerm).subscribe();
  }

  openDialog(enterpriseById): void {
    const selectedEnterpriseId: string = enterpriseById;
    let dialogBoxSettings = {
      width: "60%",
      maxHeight: "100vh",
      margin: "0 auto",
      hasBackdrop: true,
      data: { _id: selectedEnterpriseId },
    };
    const dialogRef = this.dialog.open(
      DialogOverviewEnterprise,
      dialogBoxSettings
    );

    dialogRef.afterClosed();
  }
}
