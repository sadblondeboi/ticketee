import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public event = {
    id: 17,
    name : 'EUROPA TOUR',
    artist : 'Taco Hemingway',
    url : 'https://i2.wp.com/polskaplyta-polskamuzyka.pl/wp-content/uploads/2020/09/Taco-Hemingway-Europa.jpg?resize=1200%2C1200',
    place: 'Poznań, gdzieś tam',
    date: '19/06/2020',
    time: '19:00',
    ticketPrice : '129'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
