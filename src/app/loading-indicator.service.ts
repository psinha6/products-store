import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  showLoader = new EventEmitter<boolean>();

  constructor() { }

  show() {
    this.showLoader.emit(true);
  }

  hide() {
    this.showLoader.emit(false);
  }
}
