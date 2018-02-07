import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer } from '@angular/core';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements AfterViewInit {
  blue: any;
  green: any;
  red: any;

  items: Array<any> = []
  width = window.innerWidth;
  height = window.innerHeight;
  @ViewChild('slider') slider : ElementRef;
  constructor(private renderer:Renderer, private elementRef:ElementRef) {
    this.items = [
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },

      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' },
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb4.png' },

    ]
   
  }

  ngAfterViewInit() {
 
    
    for(let i in this.items ) {
      this[i+'canvas'] = this.elementRef.nativeElement.querySelector('.canvas'+i);
    
      this[i+'canvasContext']   = this[i+'canvas'].getContext("2d");
        loadImages(this.items[i],(image) => {
          image.width = this[i+'canvas'].width
          image.height = this[i+'canvas'].height
          this[i+'canvasContext'].drawImage(image.name,0,0);
        })
        
       
     
  }
  function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  }

  
  }

  public setPreview() {
    let styles = {
      'height':'45px',
      'width':'45px',    
      'top': '0px',
      'z-index': '99999',
      'position': 'fixed',
      'border-radius': '32%',          
      'margin': 'auto',
      'left': '50%',
      'transform': 'translate(-50%, 0)',
      'border':'1px solid #8c8c8c',
      'background-color': 'rgba('+ this.red +',' + this.green + ',' + this.blue + ', 1)'
    }
    return styles;
  }
      
  mousemove(event, index){
    
    
        var canvas = this.elementRef.nativeElement.querySelector('.canvas'+index);
    
       
        var BB=canvas.getBoundingClientRect();

      
         var canvasX = event.clientX-BB.left;
         var canvasY = event.clientY-BB.top;
    
         // get current pixel
         var imageData =canvas.getContext('2d').getImageData(canvasX, canvasY, 1, 1);
         var pixel = imageData.data;
    
         // update preview color
         var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
    
          console.log(pixelColor)
    
        
    
    
          this.red =pixel[0];
          this.green =pixel[1];
          this.blue =pixel[2];
    
    
    
    
    
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
    
    
      
    }
    