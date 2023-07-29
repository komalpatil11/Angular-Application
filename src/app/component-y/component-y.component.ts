import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.css']
})
export class ComponentYComponent {
  textData: string = '';
  @Output() dataSaved = new EventEmitter<string>();

  saveData() {
    // Assuming you have an API endpoint to save data to a backend (Node.js) server
    // Here, we'll just emit the data to the parent ComponentX
    this.dataSaved.emit(this.textData);
  }
}
