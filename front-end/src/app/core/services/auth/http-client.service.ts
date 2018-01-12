import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import {Observable} from 'rxjs/Observable'
import {environment} from '../../../../environments/environment';
import {TokenService} from './token.service';

@Injectable()

export class HttpClientService {
  private headers: HttpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    })

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  public get<T>(url: string) {
    this.setHeaders()

    return this.http
      .get<T>(environment.apiUrl + url, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public post<T>(url: string, data: any) {
    this.setHeaders()

    return this.http
      .post<T>(`${environment.apiUrl + url}`, data, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public put<T>(url: string, data: any) {
    this.setHeaders()

    return this.http
      .put<T>(`${environment.apiUrl + url}`, data, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public delete(url: string, id: number) {
    this.setHeaders()

    return this.http
      .delete(`${environment.apiUrl + url}/${id}`, {headers: this.headers})
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  public login(username: string, password: string) {
    const body = JSON.stringify({username, password})

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/x-www-form-urlencoded',
    })

    return this.http
      .post(environment.apiUrl, body, {headers: headers})
      .pipe(catchError(err => this.handleError(err)))
  }

  private handleError(error: any) {
    if (error.status) {
      if (error.status >= 100 && error.status < 200) {
        // this.toastr.showInfo(error.statusText)
      }
      if (error.status >= 200 && error.status < 300) {
        //   this.toastr.showSuccess(error.statusText)
      }
      if (error.status >= 300 && error.status < 400) {
        //  this.toastr.showInfo(error.statusText)
      }
      if (error.status >= 400 && error.status < 500) {
        //  this.toastr.determineNotification("general.login-again", DialogTypes.Warning)
        //   this.store$.dispatch(new AuthActions.LogoutAction())
      }
      if (error.status >= 500 && error.status < 600) {
        //    this.toastr.showError(error.statusText)
      }

      return Observable.throw(new Error(error.statusText))
    }
    else {
      //  this.toastr.determineNotification("general.error-occured", DialogTypes.Alert)
    }
  }

  private setHeaders() {
    debugger
    let token: string = this.tokenService.getToken()

    if (token) {
      let authorization = {Authorization: `Bearer ${token}`}

      Object.keys(authorization)
        .forEach(header => this.headers.set(header, authorization[header]))
    }
  }
}
