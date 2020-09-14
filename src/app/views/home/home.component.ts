import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events = [{
      id: 17,
      name : 'EUROPA TOUR',
      artist : 'Taco Hemingway',
      url : 'https://i2.wp.com/polskaplyta-polskamuzyka.pl/wp-content/uploads/2020/09/Taco-Hemingway-Europa.jpg?resize=1200%2C1200',
      place: 'Poznań',
      date: '19/06/2020',
      time: '19:00',
      ticketPrice : '129'
  }];

  ngOnInit(): void {
  }

}
