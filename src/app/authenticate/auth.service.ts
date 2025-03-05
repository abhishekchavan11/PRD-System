import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:5000';

  private roleSubject = new BehaviorSubject<string | null>(null);
  role$ = this.roleSubject.asObservable();
  private userNameSubject = new BehaviorSubject<string | null>(null);
  userName$ = this.userNameSubject.asObservable();

  constructor(private http: HttpClient) { }

  setRole(role: string, username: string) {
    this.roleSubject.next(role);
    this.userNameSubject.next(username);
  }

  getRole() {
    return this.roleSubject.value;
  }

  getUsername() {
    return this.userNameSubject.value;
  }

  clearRole() {
    this.roleSubject.next(null);
    this.userNameSubject.next(null);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.status == 200) {
          this.setRole(response.role, response.username);
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

  // logout() {
  //   this.clearRole();
  // }

  logout(): Observable<any> {
    const username = this.userNameSubject.getValue();
    if (!username) {
      throw new Error('Username is null');
    }

    const formData: FormData = new FormData();
    formData.append('username', username);

    return this.http.post(`${this.apiUrl}/logout`, formData).pipe(
      tap((response: any) => {
        console.log('Logout response:', response);
        this.clearRole();
      })
    );
  }
}
