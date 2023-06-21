import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private service:MyserviceService){}
  
  data:any;
  getData()
  {
    //this.service.show();
    this.service.show().subscribe((n:any)=>this.data=n);

  }

  result:any;
  search(n:any)
  {
    this.service.findUser(n).subscribe((x:any)=>this.result=x);

  }
  
}
