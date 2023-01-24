import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent {
  myColor = '#0c946c';
  showData($event: any) {
    console.log('WEBSITE DOWNLOADED!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  sendData($event: any) {
    console.log('DATA IS SENT!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
