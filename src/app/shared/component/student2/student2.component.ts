import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student ';
import { stdarr } from '../../consts/student';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.scss']
})
export class Student2Component implements OnInit {
  stdData:Array<Istudent>=[
    {
      fname:"jhon",
      lname:"doe",
      email:"jhon@gmail.com",
      contact:9510429442
    },
    {
      fname:"jen",
      lname:"doe",
      email:"jen67@gmail.com",
      contact:8910427672
    },
    {
      fname:"may",
      lname:"deo",
      email:"may19@gmail.com",
      contact:9519829442
    }
  ];
   onstdadd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
      let newstd:Istudent={
          fname:fname.value,
          lname:lname.value,
          email:email.value,
          contact:isNaN(+contact.value)?'-':+contact.value
      }
      this.stdData.unshift(newstd)
      fname.value='';
      lname.value='';
      email.value='';
      contact.value='';

   }
  constructor() { }

  ngOnInit(): void {
  }

}
