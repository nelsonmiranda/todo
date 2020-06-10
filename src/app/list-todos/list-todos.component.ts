import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id : number,
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

  todos = [
    new Todo(1, 'Learn Spring Boot', new Date(), false),    
    new Todo(1, 'Become an Expert at Angular', new Date(), false),
    new Todo(1, 'Learn Java', new Date(), false)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
