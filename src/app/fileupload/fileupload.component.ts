import { Component } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    console.log("event",event);
    this.selectedFiles = Array.from(event.target.files);
  }

  onReset(fileInput: any) {
    this.selectedFiles = [];
    fileInput.value = '';
  }

  onUpload() {
    // Implement your upload logic here
    console.log('Files to upload:', this.selectedFiles);
  }
}