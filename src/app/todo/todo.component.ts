import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService : TodoService,
    private activateRouter : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    this.refreshTodo();
  }

  refreshTodo(){
    this.todo = new Todo(this.id,'','', new Date(),false);
    if(this.id > 0){
      this.todoService.getTodo('in28minutes', this.id).subscribe(
        data => this.todo = data
      ); 
    }
  }

  saveTodo(){
    if(this.id > 0){
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }else{
      this.todo.username = 'in28minutes';
      this.todoService.createTodo('in28minutes', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }
}
