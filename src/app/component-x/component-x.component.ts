import { Component } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})
export class ComponentXComponent {
  panelName: string = '';
  dataList: string[] = [];

  savePanelName() {
    // Save panel name using an appropriate mechanism or service if required
  }

  addComponentY() {
    this.dataList.push('');
  }

  saveData(data: string) {
    this.dataList[this.dataList.length - 1] = data;
    // You can also save the entire dataList to the backend if needed
  }
}
