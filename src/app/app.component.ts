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
  position = 'front';
  height;
  width;
  red;
  green;
  blue;
  colorsR = [];
  colorsB = [];
  colorsG = [];
  @ViewChild('fullsize') fullSize:ElementRef;
  @ViewChild('thumbnail') thumbnail:ElementRef;
  @ViewChild('videoBuffer') video:ElementRef;
  @ViewChild('videoResult') videoR:ElementRef;
  constructor(){
  
  }
ngAfterViewInit(){

  window['plugins'].screensize.get(successCallback);

var _this = this;
function successCallback(result) {
  console.log(result);

  _this.width = result.width
  _this.height = result.height
}
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
        var _this = this;
        window['plugin'].CanvasCamera.start(options, function(error) {

          console.log('[CanvasCamera start]', 'error', error);
        }, function(data) {
           console.log('[CanvasCamera start]', 'data', data);
           var canvas = _this.videoR.nativeElement;
           var context = canvas.getContext("2d");
           
            var imageObj = new Image();
            imageObj.onload = function(){
                context.drawImage(imageObj, 0, 0);
            };
            imageObj.src = data.output.images.fullsize.file;
            var imageData = context.getImageData(0,0,400,400)
            var data = imageData.data;
            var colorsR = [],
            colorsG= [],
             colorsB= [],
             red,
             green,
             blue;
        // iterate over all pixels
            for(var i = 0, n = data.length; i < n; i += 4) {
              var r = data[i];
              var g = data[i + 1];
              var b = data[i + 2];
              var alpha = data[i + 3];
             

              _this.blue = b;
        _this.red = r;
        _this.green = g;

       
            }

            console.log(r)
         /*   for (var ij = 0; ij < colorsR.length; ij++) {
              red[colorsR[ij]] = (red[colorsR[ij]]|| 0) + 1;
              
     
           }
           
 
           for (var j = 0; j < colorsG.length; j++) {
             green[colorsG[j]] = (green[colorsG[j]] || 0) + 1;
          }
          //console.log(JSON.stringify(green))
          for (var t = 0, k = colorsB.length; t < k; t++) {
           blue[colorsB[t]] = (blue[colorsB[t]] || 0) + 1;
        }
        _this.blue = _this.generateData(red);
        _this.red = _this.generateData(red)
        _this.green = _this.generateData(green) */

       
            });
          }
  
  }
 /* private generateData(data) {
    var tempArray = [];

    for (let k in data){
     if(parseInt(k) > 0){
         tempArray.push({index: k, value:data[k]})
     }
      
    }
    //console.log(JSON.stringify(tempArray))
    var max = _.max( tempArray, function(elti) { return elti.value;  });
    console.log(JSON.stringify(max))
     var tArray = [];
     for(var i = 0; i < tempArray.length; i++){
        tArray.push(tempArray[i]);
      
         
         
     }
     for(var il= 0; il < tArray.length; il++){
       if(tArray[il].value === max.value){
          var result = tArray[il].index
         }
       }
    
           return result;
          
        
     
 }*/
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
