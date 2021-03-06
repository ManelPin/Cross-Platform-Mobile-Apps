import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './page/home/home.component';
import { WheelComponent } from './page/wheel/wheel.component';
import { DevicesComponent} from './page/devices/devices.component';
import { PhotosComponent } from './page/photos/photos.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "first" },
  { path: "first", component: HomeComponent },
  { path: "second", component: WheelComponent },
  {path: "third", component:DevicesComponent },
  {path: "forth", component:PhotosComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, WheelComponent];