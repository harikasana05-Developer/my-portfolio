import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  standalone : true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  gmailID = "harika.sana05@gmail.com"

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/Harika_FrontendDeveloper.pdf'; // path to PDF
    link.download = 'Harika_FrontendDeveloper.pdf';   // filename when downloaded
    link.target = '_blank';
    link.click();
  }
  
}
