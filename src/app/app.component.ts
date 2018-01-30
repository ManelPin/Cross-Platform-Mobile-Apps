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
  height;
  width;
  @ViewChild('fullsize') fullSize:ElementRef;
  @ViewChild('thumbnail') thumbnail:ElementRef;
  @ViewChild('videoBuffer') video:ElementRef;
  @ViewChild('videoResult') videoR:ElementRef;
  constructor(){
    window['plugins'].screensize.get(successCallback);
    var _this = this;
    function successCallback(result) {
      console.log(result);
      _this.width = result.width;
      _this.height = result.height;
    }
  }
ngAfterViewInit(){
  if (window['plugin'].CanvasCamera) {
    window['plugin'].CanvasCamera.initialize({
          fullsize:this.fullSize.nativeElement,
          thumbnail:this.thumbnail.nativeElement
    });
    let options = {
      width: 352, height: 288,
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

    flashMode: false,
    thumbnailRatio: 1/6,
      cameraPosition: 'back',
      onAfterDraw: function(frame) {
        // do something with each frame
        console.log(frame)
      }
  };
   
  window['plugin'].CanvasCamera.start(options);
  
   
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
