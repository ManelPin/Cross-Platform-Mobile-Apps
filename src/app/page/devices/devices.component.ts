import { Component, AfterViewInit } from '@angular/core';
import { LedsproviderService } from '../../ledsprovider.service';

declare var ble:any;
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements AfterViewInit {

  
  emparelhado: boolean = false;
  devices: any;
  device: any;
  dispositivos: any;

  enabled:boolean = false;
  public show:boolean = false;
  public prevClicked:number = -1;




    constructor( public led:LedsproviderService){
            console.log('seetiings')


    }


ngAfterViewInit(){

this.discover()
 var dispositiv = JSON.parse(localStorage.getItem('dispositivos'));
 var inputName = "Clever Lighting";
 console.log(dispositiv);
 if (dispositiv != null){
 for (var i = 0; i < dispositiv.length; i++) {
    if( inputName !== dispositiv[i].name){  //look for match with name
        dispositiv[i] += this.led.device;  //add two
        break;  //exit loop since you found the person
    }
 }
 localStorage.setItem("dispositivos", JSON.stringify(dispositiv));
}
}
start(index,id){

  if(this.led.dispositivos[this.prevClicked] && this.prevClicked != index) {
    this.led.dispositivos[this.prevClicked].show = false
  }
  this.led.dispositivos[index].show = !this.led.dispositivos[index].show;
  this.prevClicked = index;
  
      this.led.emparelhar(id)
      console.log(id)
      


}
isConneted(){
  setTimeout( () =>{
  for ( let i = 0; i < this.dispositivos.length; i++){
    ble.isConnected(this.dispositivos[i].id, ()=> {
      return true
    }, () => {
      return false
    } )
  }
}, 3000);
}

 disconnect(index,id){

  if(this.led.dispositivos[this.prevClicked] && this.prevClicked != index) {
    this.led.dispositivos[this.prevClicked].show = false
  }
  this.led.dispositivos[index].show = !this.led.dispositivos[index].show;
  this.prevClicked = index;
    ble.isConnected(id, () => {
      ble.disconnect(id)
      

     })
   
 }
 discover(){

    console.log('start')
    ble.enable(()=> console.log('success'), ()=> console.log('error'));

 ble.startScanWithOptions([],{ reportDuplicates: false }, (device) => {

     this.dispositivos = this.dispositivos || [];
     if(device.name){
       this.device = device;
       this.devices = this.devices || [];
  this.dispositivos.push(this.device);




     }
 });
  console.log(JSON.stringify(this.dispositivos))

 }
}
