import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // INTERPOLATION
  myName = "Macapagal, Andrew Ginelle P.";
  myCareer = "As a graduate with a degree of BSIT in Web Development, I wuld like to pursue a career in Web Developing and enhance my skills further.";
  myImage = "../assets/profile.jpg";
}
