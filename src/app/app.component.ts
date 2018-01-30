import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';
declare var cordova:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  flash = false;
  position = 'front';
  @ViewChild('fullsize') fullSize:ElementRef;
  @ViewChild('thumbnail') thumbnail:ElementRef;
  @ViewChild('videoBuffer') video:ElementRef;
  @ViewChild('videoResult') videoR:ElementRef;
  constructor(){
     
  }
ngAfterViewInit(){
  if (window['plugin'].CanvasCamera) {
    window['plugin'].CanvasCamera.initialize({
          fullsize:this.fullSize.nativeElement,
          thumbnail:this.thumbnail.nativeElement
    });
    var ctx1 = this.video.nativeElement.getContext("2d")
    ctx1.drawImage(this.thumbnail, 0, 0, 400,400);
    let frame = ctx1.getImageData(0, 0, 400, 400);
    let l = frame.data.length / 4;
    var ctx2 = this.videoR.nativeElement.getContext("2d")
    for (let i = 0; i < l; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];
      if (g > 100 && r > 100 && b < 43)
        frame.data[i * 4 + 3] = 0;
    }
    ctx2.putImageData(frame, 0, 0);
   
  }
  
}
  public play():void{
    var permissions = cordova.plugins.permissions;
    permissions.requestPermission(permissions.CAMERA, success, error);
 
function error() {
  console.warn('Camera permission is not turned on');
}
 
function success( status ) {
  if( !status.hasPermission ) error();
}
      console.log('play');
      if (window['plugin'].CanvasCamera) {
         var options = {
            canvas: {
              width: 640,
              height: 480
            },
            capture: {
              width: 640,
              height: 480
            },
            use: 'file',
            fps: 30,
            flashMode: this.flash,
            hasThumbnail: true,
            thumbnailRatio: 1/6,
            cameraFacing: this.position
        };
        window['plugin'].CanvasCamera.start(options, function(error) {
          console.log('[CanvasCamera start]', 'error', error);
        }, function(data) {
           console.log('[CanvasCamera start]', 'data', data);
        });
      }
  
  }

  public stop(){
    window['plugin'].CanvasCamera.stop()
  }

  public switch () {

      console.log('switch');
      if (window['plugin'].CanvasCamera) {
          this.position = (this.position === 'front') ? 'back' : 'front';
          window['plugin'].CanvasCamera.cameraPosition(this.position, function(error) {
              console.log('[CanvasCamera cameraPosition]', error);
          }, function(data) {
              console.log('[CanvasCamera cameraPosition]', 'data', data);
          });
      }
  
  }
}
