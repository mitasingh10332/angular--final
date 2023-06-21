import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {

  constructor(private service:MyserviceService) { }
  result:any;
  
  removeUser(n:any){
    this.service.deleteUser(n).subscribe((x:any)=>this.result=JSON.stringify(x));

  }
}
