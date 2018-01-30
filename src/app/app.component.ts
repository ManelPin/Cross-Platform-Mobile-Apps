import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


declare var cordova:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  flash = false;
  position = 'back';
  width=window.screen.width * window.devicePixelRatio;
  height= window.screen.height * window.devicePixelRatio;
  red:number=0;
  green:number=255;
  blue:number=0;
  context:any;
  @ViewChild('fullsize') fullSize:ElementRef;
  @ViewChild('videoResult') videoR:ElementRef;
  @ViewChild('thumbnail') thumbnail:ElementRef;
  constructor(){
  
     
  }
ngAfterViewInit(){
  if (window['plugin'].CanvasCamera) {
    window['plugin'].CanvasCamera.initialize({
          fullsize: this.fullSize.nativeElement,
          thumbnail: this.thumbnail.nativeElement
    });
  }
  console.log(this.width)
}
  public play():void{
  /*  var permissions = cordova.plugins.permissions;
    permissions.requestPermission(permissions.CAMERA, success, error);
 
function error() {
  console.warn('Camera permission is not turned on');
}
 
function success( status ) {
  if( !status.hasPermission ) error();
}*/
      console.log('play');
      if (window['plugin'].CanvasCamera) {
         var options = {
      
          
            use: 'file',
            fps: 30,
            flashMode: this.flash,
            hasThumbnail: true,
            thumbnailRatio: 1/6,
            cameraFacing: this.position
        };
        var canvas = this.videoR.nativeElement;
        var context = canvas.getContext("2d");
       var _this = this;
        window['plugin'].CanvasCamera.start(options, function(error) {

          console.log('[CanvasCamera start]', 'error', error);
        }, function(data) {
           console.log('[CanvasCamera start]', 'data', data);
          
           
        
            var imageObj = new Image();
            imageObj.onload = function(){
                context.drawImage(imageObj, 0, 0);
               
            };
            imageObj.src = data.output.images.fullsize.file;
          
           
         
      
            })
            
           var imageData = context.getImageData(0,0, _this.width,
            _this.height)
            context.putImageData(imageData,0,0)
          var data = imageData.data;
         var result = _this.generateData(data)

         console.log(result)
          }
  
  }
  private generateData(data){
 
    for(var i = 0, n = data.length; i < n; i += 4) {
     this.red = data[i];
      this.green = data[i + 1];
      this.blue = data[i + 2];
      var alpha = data[i + 3];
     

      var JSONS = {
       red: this.red,
       green: this.green,
       blue : this.blue
      }
      

    }
    return JSONS;
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
