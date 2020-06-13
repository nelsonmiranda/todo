import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http : HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  getTodo(username: string, id : number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id : number, todo : Todo) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
       todo);
  }

  deleteTodo(username: string, id : number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

}
