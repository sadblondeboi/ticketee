import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public status = true;
  public message = 'Click on a button';
  public textBtnConfig = [{
    id: 0,
    active: false,
    styles: {
      padding: '.25rem 1.5rem',
      backgroundColor: 'white',
      color: 'rgb(0, 0, 0, .6)',
      border: 'solid rgb(112, 112, 112, .2) 1px',
      borderRadius: '1rem',
      boxShadow: '0 3px 6px rgb(0, 0, 0, .10)'},
    text: 'hottest', },
    {
    id: 1,
    active: false,
    styles: {
      padding: '.25rem 1.5rem',
      backgroundColor: 'white',
      color: 'rgb(0, 0, 0, .6)',
      border: 'solid rgb(112, 112, 112, .2) 1px',
      borderRadius: '1rem',
      boxShadow: '0 3px 6px rgb(0, 0, 0, .10)'
    }, text: 'newest'},
    {
    id: 2,
    active: false,
    styles: {
      padding: '.25rem 1.5rem',
      backgroundColor: 'white',
      color: 'rgb(0, 0, 0, .6)',
      border: 'solid rgb(112, 112, 112, .2) 1px',
      borderRadius: '1rem',
      boxShadow: '0 3px 6px rgb(0, 0, 0, .10)'
    }, text: 'nearby'},
  ];

  onClickEventReceived(event: string): void {
    this.message = event;
  }

  ngOnInit() {

  }

}
