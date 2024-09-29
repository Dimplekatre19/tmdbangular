import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../models/student ';
import { stdarr } from '../../consts/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
 studentData:Array<Istudent>=stdarr
@ViewChild('fname')fnamecontrol!:ElementRef
@ViewChild('lname')lnamecontrol!:ElementRef
@ViewChild('email')emailcontrol!:ElementRef
@ViewChild('contact')contactcontrol!:ElementRef

onstdadd(){
   let newstd={
       fname:this.fnamecontrol.nativeElement.value,
       lname:this.lnamecontrol.nativeElement.value,
       email:this.emailcontrol.nativeElement.value,
       contact:this.contactcontrol.nativeElement.value
   }
   this.studentData.push(newstd);
   this.fnamecontrol.nativeElement.value='';
   this.lnamecontrol.nativeElement.value='';
   this.emailcontrol.nativeElement.value='';
   this.contactcontrol.nativeElement.value='';

}
  constructor() { }

  ngOnInit(): void {
  }

}
