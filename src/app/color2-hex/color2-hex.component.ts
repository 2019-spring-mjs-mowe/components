import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color2-hex',
  templateUrl: './color2-hex.component.html',
  styleUrls: ['./color2-hex.component.css']
})
export class Color2HexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  colpick = "";
  result = "#000000";

  calcHex = () => {
    this.result = this.colpick;
  }

}
