import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of, ReplaySubject, Subject, throwError } from "rxjs";
import { retry, catchError, tap, map } from "rxjs/operators";
import {
  Client,
  ClientTotal,
  ClientById,
  ClientTotalsById,
  ClientEnterprisesById,
} from "../models/clients";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private apiUrl = environment.api;
  private clients: Client[];
  private filteredClients$: Subject<Client[]> = new ReplaySubject<Client[]>(1);

  constructor(private httpClient: HttpClient) {}

  //get all clients and set to an observable
  getAll(): Observable<Client[]> {
    if (this.clients) {
      return of(this.clients);
    }
    return this.httpClient
      .get<Client[]>(this.apiUrl)
      .pipe(tap((clients: Client[]) => (this.clients = clients)));
  }

  //get all clients filter by id
  getById(selectedId): Observable<ClientById[]> {
    return this.httpClient
      .get<ClientById[]>(`${this.apiUrl}/${selectedId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  //get totals of clients by id
  getTotalsById(selectedId): Observable<ClientTotalsById[]> {
    return this.httpClient
      .get<ClientTotalsById[]>(`${this.apiUrl}/${selectedId}/totals`)
      .pipe(retry(2), catchError(this.handleError));
  }

  //get clients enterprises filter by id
  getClientEnterprisesById(selectedId): Observable<ClientEnterprisesById[]> {
    return this.httpClient.get<ClientEnterprisesById[]>(
      `${this.apiUrl}/${selectedId}/enterprise`
    );
  }

  //Get general totals from api to show on frames
  getGeneralTotals(): Observable<ClientTotal[]> {
    return this.httpClient
      .get<ClientTotal[]>(`${this.apiUrl}/totals`)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Controller of searchbyname
  getSearchResults(): Observable<Client[]> {
    return this.filteredClients$.asObservable();
  }

  search(searchTerm: string): Observable<void> {
    return this.getAll().pipe(
      tap((clients: Client[]) => {
        clients = clients.filter((client) =>
          client.name.toLowerCase().includes(searchTerm)
        );
        this.filteredClients$.next(clients);
      }),
      map(() => void 0)
    );
  }

  // manipulation of errors
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
