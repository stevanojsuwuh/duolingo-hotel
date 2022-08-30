import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  name: string = '';

  constructor(
    private readonly route: ActivatedRoute // Untuk mengambil parameter
  ) { }
  
  // Salah satu komponen lifecycle
  // Ini akan dijalankan sekali sebelum komponen di-load / dijalankan saat 'ChildAComponent' dipanggil
  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      const { name } = param; // Untuk ambil parameter di url dengan cara ?name=...
      this.name = name;
    })
  }

}
