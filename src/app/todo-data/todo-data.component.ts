import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.css']
})
export class TodoDataComponent {
   x = 0;
   y= 10;
  constructor(private todo:TodoService, private router: Router){}

  ngOnInit(){
    this.todo.getUsers().pipe(map(res => res.slice(0,10))).subscribe(res => {
      console.log(res);
    },complete => {
      this.x = this.y;
      this.y = this.y + 10;
    });
  }

  navItem(){
    this.router.navigateByUrl('items');
  }
 
}
