import { Component, OnInit } from '@angular/core';
import { MichisDrawings } from '../MichisDrawings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images : object[] = MichisDrawings;

}

