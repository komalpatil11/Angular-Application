import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.css']
})
export class TopRightComponent {
  message: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.message$.subscribe((message) => (this.message = message));
  }
}
