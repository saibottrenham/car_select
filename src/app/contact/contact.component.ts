import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageSentComponent } from '../message-sent/message-sent.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(form: any) {
    this.firestore.collection('mail').add({
      to: "info@blackteslas.com.au",
      replyTo: form.value.email,
      message: {
        subject: "BlackTeslas enquiry",
        text: `Name: ${form.value.name}\nEmail: ${form.value.email}\nMessage: ${form.value.message}`

    }}).then(() => {
        console.log('Message sent!');
        this._snackBar.openFromComponent(MessageSentComponent, {
          duration: 5000,
          horizontalPosition: "end",
          verticalPosition: "top",
          
        });
        form.reset(); // Clear the form
        this.router.navigate(['/']); // Redirect to root page
      })
      .catch(error => {
        console.error('Error sending message: ', error);
      });
  }
}