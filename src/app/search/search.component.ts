import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { OperationsService } from '../operations/operations.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  myForm: FormGroup;
  response: string = '';
  formattedResponse: SafeHtml = '';
  loaderFlag: boolean = false;
  submitFlag !: boolean;
  constructor(private fb: FormBuilder, private operation: OperationsService, private sanitizer: DomSanitizer) {
    this.myForm = this.fb.group({
      query: ['', [Validators.required]]
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.submitFlag = true;
    this.loaderFlag = true;
    this.formattedResponse = '';
    this.operation.getAnswers(this.myForm.value).subscribe(
      async (res) => {
        console.log("res--", res);
        this.formattedResponse = await this.formatResponse(res.response);
        this.submitFlag = false;
        this.loaderFlag = false;
        formDirective.resetForm();  // Clears the <mat-error> messages
        this.myForm.reset();
      },
      (error) => {
        console.error('Get answer failed', error);
        this.submitFlag = false;
        this.loaderFlag = false;
      }
    )
  }

  async formatResponse(response: string): Promise<SafeHtml> {
    // Preprocess the response to remove markdown syntax like `**`
    response = this.removeMarkdownSyntax(response);
    if (response.startsWith('```html') && response.endsWith('```')) {
      response = response.slice(7, -3); // Remove the first 7 characters (`html`) and last 3 characters (```)
    }
    let htmlContent: string;

    // Check if the response is already in HTML format
    if (this.isHtml(response)) {
      htmlContent = response; // Use the HTML directly
    } else {
      // Parse markdown to HTML
      htmlContent = await marked.parse(response);
    }

    // Sanitize the HTML content
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  removeMarkdownSyntax(content: string): string {
    // Replace markdown syntax `**bold text**` with HTML `<b>bold text</b>`
    return content.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // Convert `**bold text**` to `<b>bold text</b>`
  }

  isHtml(content: string): boolean {
    // Check if the content contains HTML tags
    const htmlTagRegex = /<\/?[a-z][\s\S]*>/i;
    return htmlTagRegex.test(content);
  }

}
