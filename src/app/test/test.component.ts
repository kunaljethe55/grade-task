import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  gradeform!: FormGroup
  constructor(private fb: FormBuilder, private servise: SharedService) { }
  storedata: any
  store: any
  ngOnInit(): void {
    this.gradeform = this.fb.group({
      grade: ['', Validators.required]
    })
    this.getinfo()
  }
  getinfo() {
    this.servise.getdata().subscribe((res => {
      this.storedata = res
    }))
  }
  submit() {
    let obj = {
      grade: this.gradeform.value.grade,
      id: ''
    }
    this.servise.postdata(obj).subscribe(res => {
      console.log('deta send' + res)
      this.getinfo()
    })
  }
  edit(users: any) {
    this.gradeform.patchValue({
      grade: users.grade
    })
    this.store = users

  }
  update() {
    let obj = {
      grade: this.gradeform.value.grade,
      id: this.store.id
    }
    this.servise.putdata(this.store.id, obj).subscribe(res => {
      console.log('data updated' + res)
      this.gradeform.reset();
      this.getinfo()

    })
  }
  delete(users: any) {
    this.servise.deletedata(users.id).subscribe(res => {
      console.log('deleted successfully' + res)
      this.getinfo();
    }
      // err => {
      //   console.log(err)
      // }

    )
  }



}