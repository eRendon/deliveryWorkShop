import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { ModalAddUserComponent } from '../modal-add-user/modal-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from '../shared/Customer';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  public customers: Customer[] = [];

  constructor(
    public dialog: MatDialog,
    private firebase: AngularFirestore
  ) {}
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    const db = this.firebase.collection('Customers', ref =>
      ref.orderBy('createdDate', 'desc')).get();
    db.subscribe(values => {
      console.log(values);
      values.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const customer = {
          id,
          name: data.name,
          nit: data.nit,
          age: data.age,
          email: data.email,
          lastModifiedDate: data.lastModifiedDate.toDate()
        };
        this.customers.push(customer);
      });
      console.log('todos los clietnes', this.customers);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAddUserComponent);
    dialogRef.afterClosed().subscribe((value: Customer) => {
      if (value.name) {
        console.log('customer', value);
        this.addCustomer(value);
      }
    });
  }

  addCustomer(customer) {
    console.log(customer);
    customer.createdDate = new Date();
    customer.lastModifiedDate = new Date();
    const db = this.firebase.collection('Customers');
    db.add(customer);
    this.getCustomers();
  }
}
