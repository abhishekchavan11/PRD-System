import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../authenticate/auth.service';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService :AuthService) { }

  getAnswers(prompt : {query : string}) :Observable<any> {
    const formData: FormData = new FormData();
    formData.append('prompt', prompt.query);

    return this.http.post(`${this.apiUrl}/process`, formData).pipe(
      tap((response : any) => {
        console.log('Prompt response:', response);
      })
    )
  }

  uploadFiles(files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    files.forEach(file => {
      formData.append('files', file, file.name);
    });

    const username = this.authService.getUsername();
    if (username) {
      formData.append('username', username);
    } else {
      throw new Error('Username is not set.');
    }
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post(`${this.apiUrl}/upload_files`, formData, { headers });
  }  
}
