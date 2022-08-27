import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //di sini bisa juga di-divine html karena terkadang kita cuman butuh dikit
  styleUrls: ['./app.component.scss'] //bisa lebih dari satu file. Tapi kalo mau nge-divine juga bisa di sini. CSS ini optional
})
export class AppComponent { //semua file di angular pakenya class
  title = 'angular-pascal-9';
}
