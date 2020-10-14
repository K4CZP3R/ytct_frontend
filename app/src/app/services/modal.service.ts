import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalState } from '../interfaces/modal-state';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modalState = new BehaviorSubject<ModalState>(undefined);
  readonly modalState$ = this.modalState.asObservable();

  showModal(title: string, content: string, callback_id: string): void {
    let mState: ModalState = {
      callback_id: callback_id,
      content: content,
      title: title
    };
    this.modalState.next(mState);
  }
}
