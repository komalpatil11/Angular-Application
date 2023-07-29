import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.css']
})
export class BottomRightComponent {
  message: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.message$.subscribe((message) => (this.message = message));
  }
}
