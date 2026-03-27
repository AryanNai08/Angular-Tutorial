import { Component } from '@angular/core';

@Component({
  selector: 'app-style-operater-componenet',
  imports: [],
  templateUrl: './style-operater-componenet.html',
  // styleUrl: './style-operater-componenet.css',
  styles:['#tsstyle{color:green}']
})
export class StyleOperaterComponenet {
  color="red"
  zoom=true

  zoomout(){
    this.zoom=!this.zoom
  }
}
