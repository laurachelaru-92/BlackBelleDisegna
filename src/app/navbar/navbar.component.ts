import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../images-service/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router, private imagesService : ImagesService) {
  }

  ngOnInit(): void {
  }

  navigateTo(param : string){
    this.imagesService.setImages(param);
    this.router.navigate(['drawings', param]);
  }

}
