import { Component } from '@angular/core';
import { OperationsService } from '../operations/operations.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {

  constructor(private opService: OperationsService) {

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

  onUpload() {
    console.log('Files to upload:', this.selectedFiles);
    this.opService.uploadFiles(this.selectedFiles).subscribe(
      response => {
        console.log('Upload response:', response);
      },
      error => {
        console.error('Upload error:', error);
      }
    );
  }
}