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
    this.todo = new Todo(1,'','', new Date(),false);
    this.todoService.getTodo('in28minutes', this.id).subscribe(
      data => this.todo = data
    ); 
  }

  saveTodo(){
    this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }
    );
  }
}
