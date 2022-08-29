import { Component, OnInit } from '@angular/core';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faBehance = faBehance;
  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
