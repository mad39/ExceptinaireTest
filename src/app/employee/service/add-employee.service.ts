import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {
  list =[];
  constructor() { }

  addlist(empObj) {
    this.list.push(empObj);
   }

   getList(){ 
     return this.list;
   }

}
