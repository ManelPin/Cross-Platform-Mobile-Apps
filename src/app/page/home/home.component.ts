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
  flash = false;
  position = 'back';
  width =  window.innerWidth;
  height =  window.innerHeight;
  red:number=0;
  green:number=0;
  blue:number=0;
  context:any;
  squareDim=10; //ajustar para a melhor captura de cor
  arredonda=5; //ajustar para a melhor captura de cor
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
    'top': '0px',
    'z-index': '99999',
    'position': 'absolute',          
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
            var canvas = _this.fullSize.nativeElement
         
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
              var ctx =(<HTMLCanvasElement>canvas).getContext('2d')
              const imageData = ctx.getImageData(canvasWidth / 2 - _this.squareDim / 2 , canvasHeight / 2 - _this.squareDim , _this.squareDim, _this.squareDim);
               const data = imageData.data;
               const result = _this.generateData(data, _this.arredonda) ;
               const cor = _this.hexToRgb(result);
               _this.red = cor.r;
               _this.green = cor.g;
               _this.blue = cor.b;
 
               console.log('howdy colors',result)
            
            
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
  private generateData( data, redonda) {
   
    const histo = {};
    let freqCorMais = 0;
    let corMais: string;
    
      for (let i = 0 ; i < data.length; i = i + 4) {

        
       let rRed = redonda * (Math.round(data[i] / redonda));
        let gGreen = redonda * (Math.round(data[i + 1] / redonda));
       let bBlue = redonda * (Math.round(data[i +2] / redonda));

       let hex = this.rgbToHex( rRed, gGreen, bBlue );

       if (histo[hex] === undefined ) {
        histo[hex] = 1;
       } else {
        histo[hex]++;
       
       }
      }



    for ( const color  in histo ) {
      if ( freqCorMais < histo[color]) {
        corMais = color;
        freqCorMais = histo[color];

      }
  }



  
      

    
    return corMais;
  }
 

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
}
 hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
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
