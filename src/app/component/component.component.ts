import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  componentXList: any[] = [];

  addComponentX() {
    this.componentXList.push({});
  }
}
