import { AddEmployeeService } from './../service/add-employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public listService : AddEmployeeService, private router: Router) { }
  empList = [];
  ngOnInit() {
    this.getList();
  }
  

  addEmployee()
  {
   this.router.navigate(['employee/add-employee']);
    
  }
  getList()
  {
    this.empList =  this.listService.getList();
    console.log('this.empList', this.empList);
    
  }
}
