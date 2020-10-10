import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AngularFirestore} from '@angular/fire/firestore';
import {Customer} from '../shared/Customer';
import { ModalAddUserComponent } from '../modal-add-user/modal-add-user.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public employees: Customer[] = [];
  constructor(
    public dialog: MatDialog,
    private firebase: AngularFirestore
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    const db = this.firebase.collection('Employees', ref =>
      ref.orderBy('createdDate', 'desc')).get();
    db.subscribe(values => {
      console.log(values);
      values.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const employees = {
          id,
          name: data.name,
          nit: data.nit,
          age: data.age,
          email: data.email,
          lastModifiedDate: data.lastModifiedDate.toDate()
        };
        this.employees.push(employees);
      });
      console.log('todos los clietnes', this.employees);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAddUserComponent);
    dialogRef.afterClosed().subscribe((value: Customer) => {
      if (value.name) {
        console.log('Employees', value);
        this.addEmployees(value);
      }
    });
  }
  addEmployees(employees) {
    console.log(employees);
    employees.createdDate = new Date();
    employees.lastModifiedDate = new Date();
    const db = this.firebase.collection('Employees');
    db.add(employees);
    this.getEmployees();
  }
}
