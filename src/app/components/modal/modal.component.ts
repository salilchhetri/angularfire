import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

// app-modal.component.ts
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  closeModal($event) {
    this.router.navigate([{ outlets: { modal: null } }]);
    this.modalClose.next($event);
  }
}
