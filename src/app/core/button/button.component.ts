import {Component, Input, OnInit} from '@angular/core';
import {MyButtonConfig} from "./button.config";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfig : MyButtonConfig = {customCssClass: "default", text: "default", icon: "default"};

  constructor() { }

  ngOnInit(): void {
  }

}
