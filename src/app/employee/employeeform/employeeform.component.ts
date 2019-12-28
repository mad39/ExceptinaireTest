import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AddEmployeeService } from '../service/add-employee.service';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  empForm: FormGroup;
  isSubmitted  =  false;
  imgURL: any;
  @ViewChild('ipt',{ static: false }) input: ElementRef;
  constructor(private formBuilder: FormBuilder, private router: Router,
              public listservice: AddEmployeeService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.empForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // dob: ['', Validators.required],
      // gender:['', Validators.required],
      // country:['', Validators.required],
      profilePic: ['']
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
  },
  { updateOn: "blur" }
  );
  }
  validateEmail(name){
    if(!name){
      
      this.formControls.name.setErrors({error: 'This field is mandatory'});
    }

    
    // formControls.formControls
  }
  mEditProfilePic() {
    // this.editProfilePic = true;
    this.triggerFalseClick();
  }

  triggerFalseClick() {
    const el: HTMLElement = this.input.nativeElement;
    el.click();
  }
  onimgSelect(event) {
    let selectedFile = {};
    if (event.target.files && event.target.files[0]) {
      const fileNumbers = [];
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.readAsDataURL(file); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgURL = reader.result; //add source to image
        selectedFile['ImageUrl'] = this.imgURL;
      };
      selectedFile['FileName'] = file.name ;
      selectedFile['FileID'] = '' ;
      selectedFile['_file'] = file;
      selectedFile['Updated'] = true;
      selectedFile['FileSize'] = file.size;
      selectedFile['FileType'] = file.type;
      
      // this.field.ProfilePicture = selectedFile;
      // console.log('this.empForm, ', this.empForm.value);
      // this.empForm.controls.
      // this.empForm.patchValue({
      //   profilePic: this.imgURL+''
      // });
    //   this.empForm.controls.profilePic.setValue({
    //     profilePic: file.name
    //  });
    }
  }
  get formControls() { return this.empForm.controls; }
  onSubmit() {
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.empForm.invalid) {
      // console.log('invalid:', this.empForm.value);
      Swal.fire(
        'Caution!',
        'Please enter correct email id and mandatory fields',
        'error'
      );
      return;
    }
    let copy = cloneDeep(this.empForm.value);
    copy['profilePic'] = this.imgURL;
    if(!this.imgURL){
      copy['profilePic'] ='NA';
     }
    console.log('copy:', copy);
    
    this.listservice.addlist(copy);

    Swal.fire(
      'Success!',
      'Data saved successfully!',
      'success'
    );

    this.router.navigate(['/employee/employee-list']);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.empForm.value));
}
}
