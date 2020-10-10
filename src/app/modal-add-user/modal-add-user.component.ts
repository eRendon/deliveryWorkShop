import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../shared/Customer';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.scss'],
})
export class ModalAddUserComponent {

  public customer: Customer = {};

  constructor(
    public dialogRef: MatDialogRef<ModalAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close(this.customer);
  }
}
