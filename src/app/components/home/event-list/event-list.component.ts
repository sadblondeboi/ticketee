import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})

export class EventListComponent implements OnInit {
  @Input() events;
  constructor(private router: Router) {

  }

  public redirect(route: string): void {
    this.router.navigate([`./event/${route}`]);
  }

  ngOnInit(): void {

  }

}
