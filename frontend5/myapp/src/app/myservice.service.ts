import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  show()
  { //ng g s myservice
    //ng g c name
    return this.http.get("http://localhost:3000/users");
 
  }

  addUser(n:any)
  {
    return this.http.post("http://localhost:3000/users",n);
  }
url:any;
deleteUser(n:any)
{
  this.url="http://localhost:3000/users/"+n._id;
  return this.http.delete(this.url,n);
}

editUser(n:any)
{
  this.url="http://localhost:3000/users/"+n._id;
  return this.http.put(this.url,n);
}


findUser(n:any)
  { 
    this.url="http://localhost:3000/users/"+n._id;
    return this.http.get(this.url);
  }

}
