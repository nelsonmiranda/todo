import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Router } from '@angular/router';
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

  message : string
  todos: Todo[];
  // [
  //   new Todo(1,'in28minutes', 'Learn Spring Boot', new Date(), false),    
  //   new Todo(1,'in28minutes', 'Become an Expert at Angular', new Date(), false),
  //   new Todo(1,'in28minutes', 'Learn Java', new Date(), false)
  // ];

  constructor(
    private todoService : TodoService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos("in28minutes").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(username : string, id: number){
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo(username, id).subscribe(
      response => {
        console.log(response);
        this.message = "Delete successful!";
        this.refreshTodos();
      }
    )
  }

  updateTodo(username : string, id: number){
    console.log(`Update todo ${id}`);
    this.router.navigate(['todos', id]);
  }
}
