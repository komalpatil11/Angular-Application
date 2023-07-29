import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
  message: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {}

  sendMessage() {
    this.sharedService.sendMessage(this.message);
  }
}
