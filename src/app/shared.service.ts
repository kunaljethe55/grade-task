import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get('http://localhost:3000/gradedata')
  }
  postdata(obj: any) {
    return this.http.post('http://localhost:3000/gradedata', obj)
  }
  putdata(obj: any, id: any) {
    return this.http.put('http://localhost:3000/gradedata/' + obj, id)
  }
  deletedata(id: any) {
    return this.http.delete('http://localhost:3000/gradedata/' + id)
  }
}
