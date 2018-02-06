import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements AfterViewInit {
  items: Array<any> = []
  width = window.innerWidth;
  height = window.innerHeight;
  @ViewChild('slider') slider : ElementRef;
  constructor() {
    this.items = [
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },
      { name: 'assets/images/thumb5.png' },
      { name: 'assets/images/thumb6.png' },
    ]
   
  }

  ngAfterViewInit() {
    this.slider.nativeElement.addEventListener('touchstart', function(e) {e.preventDefault()}, false);
    this.slider.nativeElement.addEventListener('touchmove', function(e) {e.preventDefault()}, false);
    this.slider.nativeElement.addEventListener('multitap',function(e) {e.preventDefault()}, false);
  }

}
