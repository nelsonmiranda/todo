import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

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
    private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.refreshTodo();
  }

  refreshTodo(){
    this.todo = new Todo(1,'','', new Date(),false);
    this.todoService.getTodo('in28minutes', this.id).subscribe(
      data => this.todo = data
    ); 
  }

  saveTodo(){
    console.log('Todo save');
  }
}
