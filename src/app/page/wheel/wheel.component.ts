import { Component, ViewChild,ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import {LedsproviderService} from '../../ledsprovider.service'

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements AfterViewInit, OnChanges {
  changeLog: any;
  rgb: any = 0;
  dColor: any = 0;
  @ViewChild("canvasT") pickerCanvas:ElementRef;
ctx;
canvas;
count:number = 0; 
brightness:number = 100;
frequency:number = 0;
background;
location:any;
rx:number = 0;
gx:number = 0;
bx:number = 0;
hexVal:any = 0;
width: number =window.innerWidth;
height: number = window.innerHeight;
mapColor: boolean = false;
disabled:boolean = false;
  constructor(private led: LedsproviderService) { 

    

   }

   ngOnChanges(changes) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log(this.changeLog)
    }
  }

   ngAfterViewInit(){
    //Called after every check of the component's view. Applies to components only.
     //Add 'implements AfterViewChecked' to the class.
          var pixelColor = "rgb("+this.rx+", "+this.gx+", "+this.bx+")";
  

    // console.log(this.location)
    // create canvas and context objects
      this.canvas = this.pickerCanvas.nativeElement;
     
    this.initialiseCanvas();
    
    this.drawCircle();
       
    
     
   }
    initialiseCanvas() : void
   {
      if(this.canvas.getContext)
      {
         this.setupCanvas();
      }
   }

   setupCanvas() : void
   {
     this.ctx  = this.canvas.getContext("2d");
      

  
   } 
   

   drawCircle() : void
   {
      var ctx = this.ctx;
    // drawing active image
   var x = this.canvas.width / 2;
var y = this.canvas.height / 2;
var radius = x;
var counterClockwise = false;

for(var angle=0; angle<=360; angle+=1){
    var startAngle = (angle-1)*Math.PI/180;
    var endAngle = angle * Math.PI/180;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    this.ctx.closePath();
    this.ctx.fillStyle = 'hsl('+angle+', 90%, 50%)';
    this.ctx.fill();
}
   }
   clearCanvas() : void
   {
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
      this.setupCanvas();
   }

  ionViewDidLeave(){
    this.clearCanvas();
    this.drawCircle();
  } 
  mousemove(event){
 
    console.log('evento', event)
              let ctx = this.ctx
            // get coordinates of current position
            var canvasOffset = this.findPos(this.pickerCanvas.nativeElement);
           
            var canvasX = Math.floor(event.center.x - canvasOffset[0]);
            var canvasY = Math.floor(event.center.y - canvasOffset[1]);

            // get current pixel
            var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
            var pixel = imageData.data;

           
          
        
            this.dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
            this.rgb = pixel[0] + pixel[1] + pixel[2];
            this.hexVal = '#' + ('0000' + this.dColor.toString(16)).substr(-6);
            this.rx=pixel[0];
            this.gx=pixel[1];
            this.bx=pixel[2];
           
            this.ligarLed()
            
  }

  findPos(obj) {
  var curleft = 0;
  var curtop = 0;
  if (obj.offsetParent) {
    do {
			curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    return [curleft,curtop];
}
  }
   ligarLed() { 
     this.led.liga(this.rx,this.gx,this.bx,this.brightness, this.frequency);
   }
    powerOff(){
      
     
              
            
       this.disabled = !this.disabled;
       if(this.disabled === false){
        
        let cores = JSON.parse(localStorage.getItem('cor'))
          console.log(JSON.stringify(cores))
          this.brightness = cores.i;
      this.rx = cores.r;
      this.bx = cores.b;
      this.gx = cores.g;
      this.frequency = cores.f;
       this.hexVal = '#F00'
       var pixelColor = "rgb("+this.rx+", "+this.gx+", "+this.bx+")";
           
              
            // $('.preview').css('backgroundColor', pixelColor); 
             this.ligarLed()
       } else if(this.disabled === true) {
         let cor = { r: this.rx, b: this.bx, g:this.gx, i: this.brightness, f:this.frequency}
       localStorage.setItem('cor', JSON.stringify(cor) );
          this.brightness = 0;
      this.rx = 0;
      this.bx = 0;
      this.gx = 0;
      this.frequency = 0;
       this.hexVal = '#000000'
        var pixelColor = "rgb("+this.rx+", "+this.gx+", "+this.bx+")";
           
              
           //  $('.preview').css('backgroundColor', pixelColor); 
           this.ligarLed()
       }
    }
    isDisabled() {
      return !this.disabled;
  }
    setColor(){
          this.disabled = !this.disabled;
       if(this.disabled === true){  
            this.location.color = {colorR:this.rx,colorB:this.bx, colorG:this.gx, brightness:this.brightness, frequency:this.frequency}

        //this.navCtrl.setRoot(MarkerComponent, {location: this.location})
       }
    }
   sColor(r,g,b,f){
     this.rx = r;
     this.gx = g;
     this.bx = b;
     this.frequency = f;
     this.brightness= 100;
     var pixelColor = "rgb("+this.rx+", "+this.gx+", "+this.bx+")";
           //  $('.preview').css('backgroundColor', pixelColor); 
     this.ligarLed()
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
      'background-color': 'rgba('+ this.rx +',' + this.gx + ',' + this.bx + ', 1)'
    }
    return styles;
  }
  changeMatsliderLight(slider) {
    this.brightness = slider.value ;
    this.ligarLed()
  }
  changeMatsliderFreq(slider) {
    this.frequency = slider.value ;
    console.log(this.frequency)
    this.ligarLed()
  }
}
