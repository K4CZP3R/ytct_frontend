import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  private loadingState = new BehaviorSubject<boolean>(false);
  readonly loadingState$ = this.loadingState.asObservable();

  setVisibility(state: boolean): void {
    this.loadingState.next(state);
  }
}
