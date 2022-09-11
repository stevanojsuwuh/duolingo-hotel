import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panelClick(event: any): void {
    const panels = document.querySelectorAll('.panel')
    panels.forEach(panel => {
      panel.classList.remove('active')
  })
  const elemen: Element = event.target as Element;
  elemen.classList.add('active')
  }

}
