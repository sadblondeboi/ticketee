import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events = [{
      name : 'Natalia Przybysz „JAK MALOWAĆ OGIEŃ” - koncert live stream',
      artist : 'Natalia Przybysz',
      url : 'https://www.vogue.pl/uploads/repository/newsy/natalia-przybysz-foto-silvia-pogoda-1.jpg',
      date: '19/06/2020',
      time: '19:00',
      ticketPrice : '70'
  }];

  ngOnInit(): void {
  }

}
