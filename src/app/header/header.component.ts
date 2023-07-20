import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nav = 'Checkout';
  constructor(private http: HttpClient, private router: Router){}

  openTodo(){
    if(this.nav == 'Checkout'){
      this.router.navigate(['/checkout']);
      this.nav = 'Back to items';
    }else{
      this.router.navigate(['/items']);
      this.nav = 'Checkout'
    }
  }

}
