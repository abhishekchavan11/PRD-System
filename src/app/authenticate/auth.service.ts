import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private roleSubject = new BehaviorSubject<string | null>(null);
  role$ = this.roleSubject.asObservable();

  constructor(private http: HttpClient) { }

  setRole(role: string) {
    this.roleSubject.next(role);
  }

  getRole() {
    return this.roleSubject.value;
  }

  clearRole() {
    this.roleSubject.next(null);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post('/api/login', credentials).pipe(
      tap((response: any) => {
        if (response.success) {
          this.setRole(response.role);
        }
      })
    );
  }

  // login(credentials: { username: string; password: string }): Observable<any> {
  //   // Simulate a successful login response with a delay
  //   return of({ success: true, role: 'Admin' }).pipe(
  //     delay(1000),
  //     tap((response: any) => {
  //       if (response.success) {
  //         this.setRole(response.role);
  //       }
  //     })
  //   );
  // }

  logout() {
    this.clearRole();
  }
}
