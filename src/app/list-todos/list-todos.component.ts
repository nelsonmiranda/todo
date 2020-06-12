import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
export class Todo {
  constructor(
    public id : number,
    public username : string,
    public description : string,
    public targetDate : Date,
    public done : boolean
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  // [
  //   new Todo(1,'in28minutes', 'Learn Spring Boot', new Date(), false),    
  //   new Todo(1,'in28minutes', 'Become an Expert at Angular', new Date(), false),
  //   new Todo(1,'in28minutes', 'Learn Java', new Date(), false)
  // ];

  constructor(
    private todoService : TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos("in28minutes").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )

  }

}
