import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item'

@Injectable({ providedIn: 'root' })
export class TodoListService {
    public todoItems: TodoItem[] = [];

    constructor() {
        const json = localStorage.getItem('catch-todoitems');
        if (json) {
            this.todoItems = JSON.parse(json);
        }
    }

    add(todoItem: TodoItem) {
        this.todoItems.push(todoItem);
        this.save();
    }

    remove(id: number) {
        this.todoItems = this.todoItems.filter(i => i.id !== id);
        this.save();
    }

    private save() {
        localStorage.setItem('catch-todoitems', JSON.stringify(this.todoItems));
    }
}