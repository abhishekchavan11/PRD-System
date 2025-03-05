import { Component } from '@angular/core';
import { OperationsService } from '../operations/operations.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  loaderFlag !: boolean
  constructor(private opService: OperationsService, private _snackBar: MatSnackBar) {

  }
  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    console.log("event", event);
    this.selectedFiles = Array.from(event.target.files);
  }

  onReset(fileInput: any) {
    this.selectedFiles = [];
    fileInput.value = '';
  }

  onUpload(fileInput: any) {
    this.loaderFlag = true;
    console.log('Files to upload:', this.selectedFiles);
    this.opService.uploadFiles(this.selectedFiles).subscribe(
      response => {
        this.loaderFlag = false;
        console.log('Upload response:', response);
        this.selectedFiles = [];
        fileInput.value = '';
        this._snackBar.open('Data uploaded successfully!', 'Close', {
          duration: 3000
        });
      },
      error => {
        this.loaderFlag = false;
        console.error('Upload error:', error);
      }
    );
  }
}