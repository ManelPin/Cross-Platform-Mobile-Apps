import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { LedsproviderService } from '../../ledsprovider.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  onStop = false;
  onPlay = true;
  toogle: any = true;
  title = '#444';
  flash = true;
  position = 'back';
  width =  window.innerWidth;
  height =  window.innerHeight;
  red:number=0;
  green:number=0;
  blue:number=0;
  context:any;
  @ViewChild('fullsize') fullSize:ElementRef;
  @ViewChild('videoResult') videoR:ElementRef;
  @ViewChild('thumbnail') thumbnail:ElementRef;
  constructor(private led:LedsproviderService){
  
    var _this = this;
    
      window['plugins'].screensize.get(successCallback, errorCallback);
    
   


    function successCallback(result) {
      console.log(result);
      _this.height = window.innerHeight;
      _this.width = window.innerWidth;
    }
    function errorCallback(err){
     console.log(err) ;
    }
     
  }
ngAfterViewInit(){
  if (window['plugin'].CanvasCamera) {
    window['plugin'].CanvasCamera.initialize({
          fullsize: this.fullSize.nativeElement
    });
  }
 
}
public setStyles() {
  var centerOfWindow = { x: this.width/2, y: this.height/2}
  var rectW = 200;
  var rectH = 200;
  let styles = {
    'border': '2px solid red',
    'left': centerOfWindow.x - (rectW/2),
    'top': centerOfWindow.y - (rectH/2),
    'position': 'absolute',
    'width': rectW + 'px',
    'height': rectH + 'px' 
  };
  return styles;
}
public setPreview() {
  let styles = {
    'height':'45px',
    'width':'65px',    
    'position':'absolute',
    'top': '0px',
    'z-index': '99999',          
    'margin-left': 'auto',
    'margin-right': 'auto',
    'display':' block',
    'border':'1px solid #8c8c8c',
    'background-color': 'rgba('+ this.red +',' + this.green + ',' + this.blue + ', 1)'
  }
  return styles;
}
  public play():void{
     this.toogle = !this.toogle;
    var _this = this;
      console.log('play');
     
        this.onPlay = false;
        this.onStop = true;
        if(this.toogle){
      if (window['plugin'].CanvasCamera) {
         var options = {
      
          
            use: 'file',
            fps: 30,
            flashMode: this.flash,
            hasThumbnail: false,
            thumbnailRatio: 1/6,
            cameraFacing: this.position,
            onBeforeDraw: function(frame){
              // do something before drawing a frame
              var canvas = _this.fullSize.nativeElement;
      
              var ctx =(<HTMLCanvasElement>canvas).getContext('2d')
              
            },
            onAfterDraw: function(frame){
              // do something after drawing a frame
              console.log('hi there',frame.renderer.context)
            var canvas = document.getElementById('fullSize')
          

              var centerOfWindow = { x: frame.renderer.context.canvas.attributes.width.value/2, y:frame.renderer.context.canvas.attributes.height.value/2}
              var rectW = 200;
              var rectH = 200;
              var ctx =(<HTMLCanvasElement>canvas).getContext('2d')
              var imageData = ctx.getImageData(centerOfWindow.x - (rectW/2),centerOfWindow.y - (rectH/2),rectW,rectH);
               var data = imageData.data;
               var widthH = imageData.width;
               var heightV = imageData.height;

              _this.generateData(data, widthH,heightV);
 
               console.log('howdy colors',widthH)
            
            
            }
        };
        
    
        window['plugin'].CanvasCamera.start(options, function(error) {

          console.log('[CanvasCamera start]', 'error', error);
        }, function(data) {
           console.log('[CanvasCamera start]', 'data', data);
          
           
        
       
      
            })
            
          
          }
        } else {
          this.stop()
        }
          
      
  }
  private generateData(data, widthH, heightV){
    var colorsR = [],
    colorsG= [],
     colorsB= [],
     red = {},
     green = {},
     blue = {};
    for(var y = 0; y < widthH; y ++) {
        for(var x = 0; x < heightV; x++){
          var index = (x + y * widthH) * 4
          var colors = {
     r : data[index],
      g : data[index + 1],
      b: data[index + 2],
      a : data[index + 3]

      }
      colorsR.push(colors.r);
    colorsG.push(colors.g);
       colorsB.push(colors.b);
    } 

    }
    for (var ij = 0; ij < colorsR.length; ij++) {
      red[colorsR[ij]] = (red[colorsR[ij]]|| 0) + 1;
      

   }
   
  
 

   
   for (var j = 0; j < colorsG.length; j++) {
     green[colorsG[j]] = (green[colorsG[j]] || 0) + 1;
  }
  //console.log(JSON.stringify(green))
  for (var t = 0, k = colorsB.length; t < k; t++) {
   blue[colorsB[t]] = (blue[colorsB[t]] || 0) + 1;
}
  this.blue = this.generateColor(blue);
  this.red = this.generateColor(red);
  this.green = this.generateColor(green);
 this.clear(blue)
 this.clear(red)
 this.clear(green)
 this.led.liga(this.red,this.green,this.blue, 100, 0);
  }
  private clear(obj){
    for (var key in obj) {
      // this check can be safely omitted in modern JS engines
      // if (obj.hasOwnProperty(key))
        delete obj[key];
    }
  }
  private  generateColor(data) {
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
          
        
     
 }
  public stop(){
    this.onStop = false;
    this.onPlay = true;
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
  public torch(){
    console.log('switch');
      if (window['plugin'].CanvasCamera) {
        this.flash = (this.flash) ? false : true;
        window['plugin'].CanvasCamera.flashMode(this.flash, function(error) {
          console.log('[CanvasCamera flashMode]', 'error', error);
        }, function(data) {
          console.log('[CanvasCamera flashMode]', 'data', data);
        });
       }
  }
}
