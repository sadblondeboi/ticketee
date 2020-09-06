import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfig: any;

  @Output() event = new EventEmitter();

  public message = 'skrrrt';

  constructor() { }

  ngOnInit(): void {
  }

  textBtnClickEmot(): void {
    console.log(this.buttonConfig.active);
    this.buttonConfig.active = !this.buttonConfig.active;
    this.event.emit(this.buttonConfig.id);
  }
}
