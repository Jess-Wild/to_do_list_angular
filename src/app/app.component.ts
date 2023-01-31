import { TodoService } from './todo.service';
import { Component, OnDestroy } from '@angular/core';
import { Item } from './item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'todo';

  filter: "all" | "active" | "done" = "all";

  allItems: Item[] = [];
  subTodo = new Subscription();

  constructor(private todoService : TodoService){
    this.subTodo = this.todoService.getAllItems().subscribe(data => this.allItems = data.slice(0,10))
  }
  ngOnDestroy(): void {
    this.subTodo.unsubscribe();
  }

  get items() {
    if(this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === "done" ? item.completed : !item.completed);
  }

  addItem(description: string) {
    this.allItems.unshift({
      title: description,
      completed: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
