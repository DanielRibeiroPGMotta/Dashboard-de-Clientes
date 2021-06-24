import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ClientService } from "src/app/services/client.service";
import { MatDialog } from "@angular/material/dialog";
import { Client, ClientTotal } from "../../models/clients";
import { DialogOverviewComponent } from "src/app/components/dialog-overview/dialog-overview.component";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  client = {} as Client;
  clients: Client[];
  clientTotal = {} as ClientTotal;
  clientsTotals: ClientTotal[];
  searchTerm = "";

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  clients$: Observable<Client[]> = this.clientService.getSearchResults();

  ngOnInit(): void {
    this.getClients();
    this.getClientsTotals();

    this.clientService.search(this.searchTerm).subscribe();
  }

  //Router to get all clients data
  getClients() {
    this.clientService.getAll().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }

  //Router to get all clients totals data
  getClientsTotals() {
    this.clientService
      .getGeneralTotals()
      .subscribe((clientsTotals: ClientTotal[]) => {
        this.clientsTotals = clientsTotals;
      });
  }

  //handler to onChange search input
  onSearchTermChange(): void {
    this.clientService.search(this.searchTerm).subscribe();
  }

  openDialog(clientId): void {
    const selectedClientId: string = clientId;
    let dialogBoxSettings = {
      width: "60%",
      maxHeight: "100vh",
      margin: "0 auto",
      hasBackdrop: true,
      data: { _id: selectedClientId },
    };
    const dialogRef = this.dialog.open(
      DialogOverviewComponent,
      dialogBoxSettings
    );

    dialogRef.afterClosed();
  }
}

