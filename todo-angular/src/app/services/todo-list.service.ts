import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item'

@Injectable({ providedIn: 'root' })
export class TodoListService {
    public todoItems: TodoItem[] = [];

    constructor() { }
}