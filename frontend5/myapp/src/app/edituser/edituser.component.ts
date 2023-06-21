import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  constructor(private service:MyserviceService) { }

  result:any;
  updateUser(n:any){
    this.service.editUser(n).subscribe((x:any)=>this.result=JSON.stringify(x) );
  }

}
