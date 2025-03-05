import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationsService } from '../operations/operations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  myForm: FormGroup;
  response: string = '';
  formattedResponse: string = '';
  loaderFlag : boolean = false;
  submitFlag !: boolean;
  constructor(private fb: FormBuilder, private operation : OperationsService) {
    this.myForm = this.fb.group({
      query: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitFlag = true;
    this.loaderFlag = true;
    this.operation.getAnswers(this.myForm.value).subscribe(
      (res)=>{
        console.log("res--",res);
        this.formattedResponse = this.formatResponse(res.response);
        this.submitFlag = false;
        this.loaderFlag = false;
      },
      (error) => {
        console.error('Get answer failed', error);
        this.submitFlag = false;
        this.loaderFlag = false;
      }
    )
  }

  formatResponse(response: string): string {
    // Remove special characters and replace \n with new lines
    return response
      .replace(/[*#]/g, '')
      .replace(/\\n/g, '\n')
      .replace(/\n\n/g, '\n'); // Ensure single new lines
  }

}
