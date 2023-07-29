import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public message$: Observable<string> = this.messageSubject.asObservable();

  constructor() {}

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
