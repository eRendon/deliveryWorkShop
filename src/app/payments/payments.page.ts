import { Component, OnInit } from '@angular/core';
import {Customer} from '../shared/Customer';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  public customers: Customer[] = [];

  constructor(
    private firebase: AngularFirestore
  ) { }

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
          lastModifiedDate: data.lastModifiedDate.toDate(),
          credit: data.credit
        };
        this.customers.push(customer);
      });
      console.log('todos los clietnes', this.customers);
    });
  }
}
