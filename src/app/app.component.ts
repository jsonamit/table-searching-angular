import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multiDropdown';
  user=[];
  name:any;

  ngOnInit() {
  
    this.user=[
      {"id":1,"name":'amit',"mobile":923782999,"email":"jsonamit@gmail.com"},
      {"id":2,"name":'anil',"mobile":923782999,"email":"jsonamit@gmail.com"},
      {"id":3,"name":'rohit',"mobile":923782999,"email":"jsonamit@gmail.com"},
      {"id":4,"name":'amit',"mobile":923782999,"email":"jsonamit@gmail.com"}
    ]

    
    
  }
 

  Search(){
    if(this.name==''){
     this.ngOnInit();
    }
    this.user = this.user.filter(res=>{
      return res.name.toLowerCase().match(this.name.toLowerCase());
    })
  }
}
