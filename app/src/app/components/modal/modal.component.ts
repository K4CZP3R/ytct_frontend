import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalState } from 'src/app/interfaces/modal-state';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  message_content: string
  message_header: string
  callback_id: string
  modal_instances


  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    console.log("initing modal!")
    this.modal.modalState$.subscribe((state: ModalState) => {
      if (state !== undefined)
        this.showModal(state)
    })
  }

  showModal(state: ModalState) {
    this.message_content = state.content;
    this.message_header = state.title;
    this.callback_id = state.callback_id;
    this.modal_instances[0].open();
  }


  ngAfterViewInit(): void {
    let elems = document.querySelectorAll('.modal')
    let options = {
      onCloseEnd: this.closeCallback
    }
    this.modal_instances = M.Modal.init(elems, options)
  }

  closeCallback = (event: any) => {
    console.log("Modal callback!")
  }


}
