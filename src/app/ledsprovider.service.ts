import { Injectable } from '@angular/core';
declare var ble:any;
@Injectable()
export class LedsproviderService {

  public enable: boolean = false;
  device: any = {};
  public dispositivos = new Array(0);


public devices: any[];
caracteristics: any[];
buffer=new ArrayBuffer(10);
bufferCON=new ArrayBuffer(10);
array= new Int8Array(this.buffer);
freq=new Int16Array(this.buffer,6,1);
primeiro: number=0;




//public macStrip: string="52C8AA72-B60C-4F62-B7E9-1F225E7E55A5";
macStrip: string;
  constructor() {
    
   
  }

  
  
 emparelhar(dispositivo){
console.log(dispositivo)
  this.macStrip = dispositivo;
  this.primeiro=0;
setTimeout(() => {
ble.stopScan(() => {

ble.connect(dispositivo,

dados => { 
  ble.startNotification(dispositivo,'aabb','fff2',
  
  tty => {
    if(this.buffer!=this.bufferCON){
    this.write();
    console.log("Mudou");
    this.bufferCON=this.buffer;
      } else{
    this.primeiro=0;console.log("tora");
      }
    }, () =>  console.log('desligado',dados))
}, 

() => console.log('bummer'))

},() => console.log('bummer')), 3000});
this.enable = true;
 }  
  
 
discover(){
 
   console.log('start')
   ble.enable(()=> console.log('success'), ()=> console.log('error'));

ble.startScanWithOptions([],{ reportDuplicates: false }, device => {
   
    this.dispositivos = this.dispositivos || [];
    if(device.name){
      this.device = device;
      this.devices = this.devices || [];
 this.dispositivos.push(this.device);

localStorage.setItem('dispositivos', JSON.stringify(this.dispositivos))


    }
});
 console.log(JSON.stringify(this.dispositivos))
 
}
inicio(){
    //console.log('Hello LedsProvider Provider');
    //console.log("Scanning Started");
    ble.enable(()=> console.log('success'), ()=> console.log('error'));
this.devices = [];

ble.startScan([]
  ,device => {
this.devices.push(device);
//localStorage.setItem('devices', JSON.stringify(this.devices))
//console.log('devices'+JSON.stringify(this.devices));

});



  var dispositivo = this.macStrip;
  this.primeiro=0;
setTimeout(() => {
ble.stopScan(() => {

ble.connect(dispositivo,

dados => { 
  ble.startNotification(dispositivo,'aabb','fff2',
  
  tty => {
    if(this.buffer!=this.bufferCON){
    this.write();
    console.log("Mudou");
    this.bufferCON=this.buffer;
      } else{
    this.primeiro=0;console.log("tora");
      }
    }, () =>  console.log('desligado',dados))
}, 

() => console.log('bummer'))

},() => console.log('bummer')), 3000});
this.enable = true;

}





liga(r,g,b,i,f){ 
              this.array[0]=65;
              this.array[1]=66;
              this.array[2]=r;
              this.array[3]=g;
              this.array[4]=b;
              this.array[5]=i;
              this.freq[0]=f;
              this.array[8]=67;
              this.array[9]=68;
              
              console.log(this.bytesToString(this.array));
              if(this.primeiro==0){ble.write(this.macStrip, 'aabb', 'ccdd', this.buffer);this.primeiro=1;}
}


bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}


boticia(){
    console.log("Notification");
    

/*this.ble.startNotification(this.macStrip,'aabb','fff2').subscribe(buffer => {
       console.log("Mudou",buffer);
     });*/
}
  noBoticia(){
    console.log("NAO");
    //var gg=this.ble.stopNotification(device.id,'aabb','fff2');
  }



write(){ 
  
  this.boticia();
  
  
  console.log(this.bytesToString(this.buffer));
  ble.write(this.macStrip, 'aabb', 'ccdd', this.buffer);
  this.primeiro=1;

  this.noBoticia();

}
}