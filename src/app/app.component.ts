import { Component } from '@angular/core';
import {LedsproviderService} from './ledsprovider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public led:LedsproviderService){
    led.discover()
  }
}
