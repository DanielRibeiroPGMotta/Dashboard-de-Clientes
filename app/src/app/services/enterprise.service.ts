import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, of, ReplaySubject, Subject, throwError} from "rxjs";
import { retry, catchError, tap, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Enterprise,
  EnterpriseTotal,
  EnterpriseById,
  EnterpriseTotalsById,
  EnterprisesByCompany, } from "../models/enterprises";

@Injectable({
  providedIn: "root",
})
export class EnterpriseService {
  private apiUrl = environment.api;
  private enterprise: Enterprise[];
  private filteredEnterprises$: Subject<Enterprise[]> = new ReplaySubject<Enterprise[]>(0);

  constructor(private httpClient: HttpClient) {}

 // httpOptions = {
   // headers: new HttpHeaders({ "Content-type": "application/json" }),
  //};

  getAll(): Observable<Enterprise[]> {
    if (this.enterprise) {
      return of(this.enterprise);
    }
    return this.httpClient
      .get<Enterprise[]>(`${this.apiUrl}`)
      .pipe(
        tap((enterprises: Enterprise[]) => (this.enterprise = enterprises))
      );
  }
  //get all clients filter by id
  getById(_id): Observable<EnterpriseById[]> {
    return this.httpClient
      .get<EnterpriseById[]>(`${this.apiUrl}/enterprise/${_id}`)
      .pipe(retry(2), catchError(this.handleError));
  }


  //get totals of clients by id
  getTotalsByEnterprise(selectedEnterpriseId): Observable<EnterpriseTotalsById[]> {
    return this.httpClient
      .get<EnterpriseTotalsById[]>(`${this.apiUrl}/${selectedEnterpriseId}/totals`)
      .pipe(retry(2), catchError(this.handleError));
  }

  //get clients enterprises filter by id
  getEnterprisesByCompany(selectedEnterpriseId): Observable<EnterprisesByCompany[]> {
    return this.httpClient.get<EnterprisesByCompany[]>(
      `${this.apiUrl}/${selectedEnterpriseId}/enterprise`
    );
  }

  //Get general totals from api to show on frames
  getGeneralTotals(): Observable<EnterpriseTotal[]> {
    return this.httpClient
      .get<EnterpriseTotal[]>(`${this.apiUrl}/totals`)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Controller of searchbyname
  getSearchResults(): Observable<Enterprise[]> {
    return this.filteredEnterprises$.asObservable();
  }

  search(searchTerm: string): Observable<void> {
    return this.getAll().pipe(
      tap((enterprises: Enterprise[]) => {
        enterprises = enterprises.filter((enterprise) =>
          enterprise.name.toLowerCase().includes(searchTerm)
        );
        this.filteredEnterprises$.next(enterprises);
      }),
      map(() => void 0)
    );
  }
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
