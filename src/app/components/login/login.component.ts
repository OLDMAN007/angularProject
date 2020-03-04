import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  doLogin(){
    // alert(this.username + this.password);
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    let api = "http://localhost:8888/api/agriculture/qingmei/loginPost";
    this.httpClient.post(api,{'userName':this.username, 'passWord':this.password}, httpOptions).subscribe((response:any)=>{
      // this.username = response.userName;
      // this.password = response.passWord;
      alert(this.username + this.password);
    })
    
  }

}
