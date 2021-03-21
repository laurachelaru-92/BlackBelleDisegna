import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MichisDrawings } from '../MichisDrawings';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  private images = new Subject<object[]>();

  setImages(str:string) : void{
    let tempImages = [];
    // MichisDrawings.filter(img => img.category === str);
    MichisDrawings.forEach(img => {
      if (img.category.includes(str)) {
        tempImages.push(img);
      }
    })
    this.images.next(tempImages);
  }

  getImages(){
    return this.images.asObservable();
  }


}
