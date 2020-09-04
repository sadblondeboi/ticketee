import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {
  public images = [
    { id: 0, path: 'https://content.fortune.com/wp-content/uploads/2016/11/492057710.jpg?resize=750,500', text: 'the best events.'},
    // tslint:disable-next-line: max-line-length
    { id: 1, path: 'https://goingapp.pl/storage/app/uploads/public/59b/182/59e/thumb_133013_600x350_0_0_crop.jpg', text: 'the best prices.'},
    { id: 2, path: 'https://www.rollingstone.com/wp-content/uploads/2018/09/shutterstock_9761152dj.jpg?resize=1800,1200&w=1200', text: 'only on ticketee.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
