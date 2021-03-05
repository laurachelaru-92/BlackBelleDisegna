import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ImagesService } from '../images-service/images.service';
import { MichisDrawings } from '../MichisDrawings';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit, OnDestroy {

  imageSubscription : Subscription;

  constructor(private route : ActivatedRoute, private imagesService : ImagesService) {
    this.imageSubscription = this.imagesService.getImages().subscribe(images=>{
      this.images = images;
    })
  }

  ngOnInit(): void {
    let category = this.route.snapshot.params.category;
    this.imagesService.setImages(category);
    this.imagesService.getImages().subscribe(images=>{
      this.images = images;
    })
  }

  ngOnDestroy():void {
    this.imageSubscription.unsubscribe();
  }

  images : object[];


}
