import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images : object[] = [
    {
      url: "captainamerica.jpg",
      cathegory: "tv-series-movies"
    },
    {
      url: "eleven-strangerthings.jpg",
      cathegory: "tv-series-movies"
    },
    {
      url: "steve-strangerthings.jpg",
      cathegory: "tv-series-movies"
    },
    {
      url: "flower.jpg",
      cathegory: "other"
    },
    {
      url: "hands.jpg",
      cathegory: "other"
    },
    {
      url: "harrypotter.jpg",
      cathegory: "tv-series-movies"
    },
    {
      url: "sailormoon.jpg",
      cathegory: "cartoons"
    },
    {
      url: "parrot.jpg",
      cathegory: "other"
    }
  ];

}
